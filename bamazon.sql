DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon; 

USE bamazon;

CREATE TABLE products ( 
	item_id INTEGER AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(30) NOT NULL, 
    department_name VARCHAR(30) NOT NULL, 
    price INTEGER(10) NOT NULL,
	stock_quantity INTEGER(3) NOT NULL,
    PRIMARY KEY(item_id)
    );

    SELECT * FROM products; 

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Iron Man 2", "Blu-Ray", 20, 25);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("The Sirens Of Titan", "Books", 12, 5);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("The Legend Of Zelda", "Video Games", 60, 2);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Thriller", "Music", 25, 8);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Gladiator", "Blu-Ray", 20, 1);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Gibson Les Paul", "Musical Instruments", 100, 8);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Kazoo", "Musical Instruments", 5, 0);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Reusable Straw", "Home Goods", 8, 50);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Twister", "Games", 20, 8);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Raspberry Pi", "Electronics", 25, 14);