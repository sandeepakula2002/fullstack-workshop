import java.io.*;
import java.nio.file.*;
import java.util.*;

public class AppConfig {
    private final Properties props = new Properties();
    private final Path path;

    public AppConfig(Path path) {
        this.path = path;
        if (Files.exists(path)) reload();
        else save();
    }

    public String getString(String k, String d) {
        return props.getProperty(k, d);
    }
    public int getInt(String k, int d) {
        return Integer.parseInt(props.getProperty(k, String.valueOf(d)));
    }
    public boolean getBoolean(String k, boolean d) {
        return Boolean.parseBoolean(props.getProperty(k, String.valueOf(d)));
    }
    public double getDouble(String k, double d) {
        return Double.parseDouble(props.getProperty(k, String.valueOf(d)));
    }

    public synchronized void setProperty(String k, String v) {
        props.setProperty(k, v);
    }

    public synchronized void save() {
        try (OutputStream os = Files.newOutputStream(path)) {
            props.store(os, "App Config");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public synchronized void reload() {
        try (InputStream is = Files.newInputStream(path)) {
            props.load(is);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Map<String,String> getPropertiesWithPrefix(String prefix) {
        Map<String,String> map = new HashMap<>();
        for (String k : props.stringPropertyNames()) {
            if (k.startsWith(prefix)) map.put(k, props.getProperty(k));
        }
        return map;
    }
}
