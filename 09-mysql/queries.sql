-- Insert sample data
INSERT INTO categories (category_name) VALUES ('Electronics'), ('Clothing');

-- Products with category names
SELECT p.product_name, c.category_name
FROM products p
JOIN categories c ON p.category_id = c.category_id;

-- Orders for a customer
SELECT * FROM orders WHERE customer_id = 1;

-- Update stock after order
UPDATE products SET stock_quantity = stock_quantity - 1 WHERE product_id = 1;

-- Delete cancelled orders older than 30 days
DELETE FROM orders
WHERE status = 'cancelled'
AND order_date < CURDATE() - INTERVAL 30 DAY;

-- Low stock products
SELECT product_name, stock_quantity
FROM products
WHERE stock_quantity < 10;

-- Revenue per category
SELECT c.category_name, SUM(oi.quantity * oi.unit_price) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
GROUP BY c.category_name
HAVING revenue > 1000;
