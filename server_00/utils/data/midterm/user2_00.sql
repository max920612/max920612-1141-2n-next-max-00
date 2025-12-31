CREATE TABLE user2_00 (
    uid int NOT NULL PRIMARY KEY,
    uname varchar(255),
    email varchar(255),
    password varchar(255)
);

INSERT INTO user2_00 (uid, uname, email, password) 
VALUES
(1, 'user1', 'user1@example.com', 'pass123'),
(2, 'user2', 'user2@example.com', 'pass123'),
(3, 'test3', 'test@example.com', 'pass123'),
(4, 'test4', 'test@example.com', 'pass123'),
(213410300, 'max920612', 'max920612@example.com', 'pass123')