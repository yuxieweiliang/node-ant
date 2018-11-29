/*
*  书籍 - 设定
*  set_id                         < 主键 >
*  title:                         标题,
*  introduction:                  简介,
*/
CREATE TABLE if NOT EXISTS public.temp_items (
  temp_item_id            SERIAL                NOT NULL PRIMARY KEY,
  name                    varchar(100)          DEFAULT NULL,
  type                    varchar(100)          DEFAULT NULL,
  introduction            varchar               DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.temp_items
  OWNER TO postgres;

COMMENT ON TABLE public.temp_items
IS '书籍 - 设定';

insert into temp_items(name, type) values('名字', 'text');
insert into temp_items(name, type) values('性别', 'select');
insert into temp_items(name, type) values('年龄', 'tag');
insert into temp_items(name, type) values('爱好', 'text');

insert into temp_items(name, type) values('名字', 'text');
insert into temp_items(name, type) values('属性', 'select');
insert into temp_items(name, type) values('等级', 'tag');
insert into temp_items(name, type) values('强度', 'text');

