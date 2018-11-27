/*
*  书籍 - 设定 - 其他
*  val_id:                       < 主键 >,
*  item_id:                      < 外键 >, # set_items
*  value:                        值, # 冰雪霜华, 苍冷的心跳, 黎明的哀歌
*  supplement:                   补充, #
*/
CREATE TABLE if NOT EXISTS public.book_set_values (
  val_id                    SERIAL                NOT NULL PRIMARY KEY,
  item_id                   SERIAL                NOT NULL,
  value                     varchar(30)           DEFAULT NULL,
  supplement                varchar(30)           DEFAULT NULL,
  foreign key(item_id) references book_set_items(item_id) on update cascade on delete cascade
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_set_values
  OWNER TO postgres;

COMMENT ON TABLE public.book_set_values
IS '书籍 - 设定 - 其他';


insert into book_set_values(value, item_id) values('林莫锋', 1);
insert into book_set_values(value, item_id) values('12', 1);
insert into book_set_values(value, item_id) values('男', 1);
insert into book_set_values(value, item_id) values('没有', 1);

insert into book_set_values(value, item_id) values('李清柔', 2);
insert into book_set_values(value, item_id) values('6', 2);
insert into book_set_values(value, item_id) values('女', 2);
insert into book_set_values(value, item_id) values('谁知道呢', 2);