/*
*  书籍 - 设定 - 其他
*  val_id:                       < 主键 >,
*  item_id:                      < 外键 >, # set_items
*  value:                        值, # 冰雪霜华, 苍冷的心跳, 黎明的哀歌
*  supplement:                   补充, #
*/
CREATE TABLE if NOT EXISTS public.book_set_values (
  book_val_id               SERIAL                NOT NULL PRIMARY KEY,
  label                     varchar(30)           DEFAULT NULL,
  value                     varchar(30)           DEFAULT NULL,
  supplement                varchar(30)           DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_set_values
  OWNER TO postgres;

COMMENT ON TABLE public.book_set_values
IS '书籍 - 设定 - 自定义 - 值';


insert into book_set_values(label, value) values('姓名', '林莫锋');
insert into book_set_values(label, value) values('年龄', '12');
insert into book_set_values(label, value) values('性别', '男');
insert into book_set_values(label, value) values('爱好', '没有');

insert into book_set_values(label, value) values('姓名', '李清柔');
insert into book_set_values(label, value) values('年龄', '6');
insert into book_set_values(label, value) values('性别', '女');
insert into book_set_values(label, value) values('爱好', '谁知道呢');