CREATE FUNCTION CalculateOrderTotal(orderId INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(quantity * unit_price) * 1.08
    INTO total
    FROM order_items
    WHERE order_id = orderId;
    RETURN IFNULL(total, 0);
END;
