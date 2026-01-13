import java.io.*;
import java.nio.file.*;
import java.security.*;
import java.util.*;
import java.util.stream.*;

public class DirectoryScanner {

    public List<Path> findByPattern(Path dir, String glob) {
        PathMatcher m = FileSystems.getDefault().getPathMatcher("glob:" + glob);
        try (Stream<Path> s = Files.walk(dir)) {
            return s.filter(p -> m.matches(p.getFileName())).toList();
        } catch (IOException e) {
            return List.of();
        }
    }

    public List<Path> findRecentFiles(Path dir, int days) {
        long limit = System.currentTimeMillis() - days * 86400000L;
        try (Stream<Path> s = Files.walk(dir)) {
            return s.filter(p -> {
                try {
                    return Files.getLastModifiedTime(p).toMillis() >= limit;
                } catch (IOException e) { return false; }
            }).toList();
        } catch (IOException e) { return List.of(); }
    }
}
