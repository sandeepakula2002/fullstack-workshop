CREATE PROCEDURE ProcessOrder(IN cust_id INT, OUT new_order_id INT)
BEGIN
    INSERT INTO orders (customer_id, order_date, status)
    VALUES (cust_id, CURDATE(), 'pending');
    SET new_order_id = LAST_INSERT_ID();
END;
