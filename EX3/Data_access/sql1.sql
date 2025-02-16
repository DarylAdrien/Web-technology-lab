CREATE DATABASE bookstore;
USE bookstore;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

INSERT INTO books (isbn, title, author, price) VALUES
('978-0131101630', 'The C Programming Language', 'Brian W. Kernighan, Dennis M. Ritchie', 45.99),
('978-0596009205', 'Head First Java', 'Kathy Sierra, Bert Bates', 39.99),
('978-0321356680', 'Effective Java', 'Joshua Bloch', 49.99);
