/*
*  书籍 - 设定 - 其他
*  item_id:                      < 主键 >,
*  set_id:                       < 外键 >, # settings
*  name:                         名字, # 武器
*  introduction:                 简介,
*/
CREATE TABLE if NOT EXISTS public.book_set_items (
  book_item_id                  SERIAL                NOT NULL PRIMARY KEY,
  book_set_id                   SERIAL                NOT NULL,
  book_val_id                   SERIAL                NOT NULL,
  FOREIGN KEY(book_set_id) REFERENCES book_sets(book_set_id) ON UPDATE CASCADE ON DELETE CASCADE,
  foreign key(book_val_id) references book_set_values(book_val_id) on update cascade on delete cascade
) WITH (OIDS = FALSE);

/*  foreign key(set_id) references settings(set_id) on update cascade on delete cascade */
/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_set_items
  OWNER TO postgres;

COMMENT ON TABLE public.book_set_items
IS '书籍 - 设定 - 自定义 - 条目';


insert into book_set_items(book_set_id, book_val_id) values(1, 1);
insert into book_set_items(book_set_id, book_val_id) values(1, 2);
insert into book_set_items(book_set_id, book_val_id) values(1, 3);
insert into book_set_items(book_set_id, book_val_id) values(1, 4);

insert into book_set_items(book_set_id, book_val_id) values(1, 5);
insert into book_set_items(book_set_id, book_val_id) values(1, 6);
insert into book_set_items(book_set_id, book_val_id) values(1, 7);
insert into book_set_items(book_set_id, book_val_id) values(1, 8);