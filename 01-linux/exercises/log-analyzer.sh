echo "========== LOG ANALYSIS REPORT =========="
echo "File:" $(realpath log-analyzer.sh)
echo "Total lines:" $(wc -l log-analyzer.sh)
echo "-----------------------------------------"
2024-01-15 08:00:01 INFO Application server started successfully
2024-01-15 08:00:05 INFO Database connection pool initialized
2024-01-15 08:01:23 INFO User login successful from 192.168.1.100
2024-01-15 08:02:45 INFO Request processed from 192.168.1.100
2024-01-15 08:03:12 WARNING High memory usage detected: 85%
2024-01-15 08:05:33 INFO User login successful from 10.0.0.50
2024-01-15 08:06:01 INFO Request processed from 10.0.0.50
2024-01-15 08:07:22 ERROR Database connection failed: timeout after 30s
2024-01-15 08:07:25 INFO Retrying database connection...
2024-01-15 08:07:30 INFO Database connection restored
2024-01-15 08:10:15 INFO User login successful from 172.16.0.25
2024-01-15 08:12:44 WARNING Disk space running low: 90% used
2024-01-15 08:15:00 INFO Scheduled backup started
2024-01-15 08:15:33 INFO Request processed from 192.168.1.100
2024-01-15 08:18:22 ERROR File not found: /var/data/config.xml
echo "INFO:" $(grep -o -i "INFO" log-analyzer.sh | wc -l)
echo "WARNING:" $(grep -o -i "WARNING" log-analyzer.sh | wc -l)
echo "ERROR:" $(grep -o -i "ERROR" log-analyzer.sh | wc -l)
echo "-----------------------------------------"
echo IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$LOG_FILE" | sort | uniq)
echo "========================================="
 
