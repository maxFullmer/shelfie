UPDATE shelfieItems
SET name = $2, price = $3, photo = $4
WHERE product_id = $1;

SELECT * FROM shelfieItems;