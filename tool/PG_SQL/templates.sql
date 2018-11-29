/*
*  书籍 - 设定
*  set_id                         < 主键 >
*  title:                         标题,
*  introduction:                  简介,
*/
CREATE TABLE if NOT EXISTS public.templates (
  temp_id                 SERIAL                NOT NULL PRIMARY KEY,
  book_set_id             SERIAL                NOT NULL,
  temp_item_id            SERIAL                NOT NULL,
  introduction            varchar               DEFAULT NULL,
  foreign key(book_set_id) references book_sets(book_set_id) on update cascade on delete cascade,
  foreign key(temp_item_id) references temp_items(temp_item_id) on update cascade on delete cascade
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.templates
  OWNER TO postgres;

COMMENT ON TABLE public.templates
IS '模板 - 关系';

insert into templates(book_set_id, temp_item_id) values(1, 1);
insert into templates(book_set_id, temp_item_id) values(1, 2);
insert into templates(book_set_id, temp_item_id) values(1, 3);
insert into templates(book_set_id, temp_item_id) values(1, 4);

insert into templates(book_set_id, temp_item_id) values(2, 5);
insert into templates(book_set_id, temp_item_id) values(2, 6);
insert into templates(book_set_id, temp_item_id) values(2, 7);
insert into templates(book_set_id, temp_item_id) values(2, 8);

