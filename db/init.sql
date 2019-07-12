DROP TABLE IF EXISTS shelfieItems;

CREATE TABLE IF NOT EXISTS shelfieItems(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price NUMERIC NOT NULL,
    photo TEXT DEFAULT 'https://images.app.goo.gl/Lqu9XVhYoFrXrj6u6'
);

INSERT INTO shelfieItems
(name, price, photo)
VALUES
( 'Shoes', 120.00, 'https://images.app.goo.gl/JF1fxEKd3QM5gEWMA');

INSERT INTO shelfieItems
(name, price, photo)
VALUES
( 'Pants', 60.00, 'https://images.app.goo.gl/jH9CcH8WyawXudDR8');

INSERT INTO shelfieItems
(name, price, photo)
VALUES
( 'Red Cap', 20.00, 'https://images.app.goo.gl/L1BqJ3uDbv2Lpb8z6');