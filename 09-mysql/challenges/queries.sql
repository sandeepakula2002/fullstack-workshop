USE sample_db;

SELECT * FROM employees;

SELECT department, COUNT(*) 
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;
