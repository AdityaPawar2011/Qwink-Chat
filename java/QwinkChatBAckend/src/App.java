import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.*;
import java.net.InetSocketAddress;
import java.util.stream.Collectors;

public class App {

    public static void main(String[] args) throws IOException {
        int port = 8080;
        killProcessUsingPort(port);

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/chat/messages", new ChatHandler());
        server.createContext("/login", new LoginHandler()); // new login context
        server.setExecutor(null);
        server.start();
        System.out.println("Server started on port " + port);
    }

    private static void killProcessUsingPort(int port) {
        try {
            String findCommand = "netstat -ano | findstr :" + port;
            Process process = Runtime.getRuntime().exec(new String[]{"cmd.exe", "/c", findCommand});
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

            String line;
            while ((line = reader.readLine()) != null) {
                if (line.contains("LISTENING")) {
                    String[] tokens = line.trim().split("\\s+");
                    String pid = tokens[tokens.length - 1];
                    System.out.println("Killing process with PID: " + pid);
                    Runtime.getRuntime().exec("taskkill /PID " + pid + " /F");
                }
            }

            reader.close();
        } catch (IOException e) {
            System.err.println("Error checking/killing process: " + e.getMessage());
        }
    }

    static class ChatHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().add("Content-Type", "application/json");
            String response = "[\"Hi\", \"Hello\", \"How are you?\"]";
            exchange.sendResponseHeaders(200, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }

    static class LoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "*");
            exchange.getResponseHeaders().add("Content-Type", "application/json");

            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(204, -1); // preflight CORS
                return;
            }

            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1); // Method Not Allowed
                return;
            }

            InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), "utf-8");
            String body = new BufferedReader(isr).lines().collect(Collectors.joining("\n"));

            String email = extractValue(body, "emailOrPhone");
            String password = extractValue(body, "password");

            String response;
            if ("user@example.com".equals(email) && "password123".equals(password)) {
                response = "{\"token\": \"dummy-token-123\"}";
                exchange.sendResponseHeaders(200, response.getBytes().length);
            } else {
                response = "Invalid email or password";
                exchange.sendResponseHeaders(401, response.getBytes().length);
            }

            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }

        private String extractValue(String json, String key) {
            String pattern = "\"" + key + "\"\\s*:\\s*\"([^\"]*)\"";
            return json.matches(".*" + pattern + ".*")
                    ? json.replaceAll(".*" + pattern + ".*", "$1")
                    : "";
        }
    }
}
