CREATE TRIGGER trg_low_stock_alert
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    IF NEW.stock_quantity < 10 THEN
        INSERT INTO stock_alerts (product_id, product_name, current_quantity)
        VALUES (NEW.product_id, NEW.product_name, NEW.stock_quantity);
    END IF;
END;
