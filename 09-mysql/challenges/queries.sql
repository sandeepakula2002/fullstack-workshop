-- Insert sample categories
INSERT INTO categories (category_name)
VALUES ('Electronics'), ('Clothing');

-- Products with their categories
SELECT p.product_name, c.category_name
FROM products p
JOIN categories c
ON p.category_id = c.category_id;

-- Orders placed by a specific customer
SELECT o.order_id, o.order_date, o.status
FROM orders o
JOIN customers c
ON o.customer_id = c.customer_id
WHERE c.customer_id = 1;

-- Update stock after an order
UPDATE products
SET stock_quantity = stock_quantity - 1
WHERE product_id = 1;

-- Delete cancelled orders older than 30 days
DELETE FROM orders
WHERE status = 'cancelled'
AND order_date < CURDATE() - INTERVAL 30 DAY;

-- Products with low stock
SELECT product_name, stock_quantity
FROM products
WHERE stock_quantity < 10;

-- Revenue generated per category
SELECT c.category_name,
       SUM(oi.quantity * oi.unit_price) AS revenue
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY c.category_name
HAVING SUM(oi.quantity * oi.unit_price) > 1000;
