SELECT e.name, e.department, p.name AS project
FROM employees e
JOIN assignments a ON e.id = a.employee_id
JOIN projects p ON a.project_id = p.id;
