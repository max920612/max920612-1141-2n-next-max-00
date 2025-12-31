CREATE TABLE cart2_00 (
    cid int NOT NULL PRIMARY KEY,
    user_id int,
    product_id int,
    quantity int,
    total int DEFAULT 0,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_1 FOREIGN KEY ("user_id") REFERENCES user2_00(uid)
    on DELETE SET NULL on UPDATE CASCADE,
    CONSTRAINT fk_2 FOREIGN KEY ("product_id") REFERENCES shop2_00(pid)
    on DELETE SET NULL on UPDATE CASCADE
);

INSERT INTO cart2_00 (cid, user_id, product_id, quantity, total, added_at) 
VALUES
(1, 213410300, 1, 2, 0, '2025-12-24 18:50:50'),
(2, 213410300, 10, 3, 0, '2025-12-24 18:50:50'),
(3, 213410300, 15, 1, 0, '2025-12-24 18:50:50'),
(4, 213410300, 23, 2, 0, '2025-12-24 18:50:50'),
(5, 213410300, 30, 2, 0, '2025-12-24 18:50:50'),
(6, 1, 1, 2, 0, '2025-12-24 18:50:50'),
(7, 2, 10, 3, 0, '2025-12-24 18:50:50'),
(8, 3, 15, 1, 0, '2025-12-24 18:50:50'),
(9, 4, 23, 2, 0, '2025-12-24 18:50:50'),
(10, 5, 30, 2, 0, '2025-12-24 18:50:50');

select C.user_id, U.uname, C.product_id, S.pname, C.quantity, S.price, S.img_url from cart2_00 as C, user2_00 as U, shop2_00 as S
where U.uid = '213410300' and C.user_id = U.uid and C.product_id = S.pid