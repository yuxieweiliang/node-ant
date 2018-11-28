/*
*  书籍 - 设定
*  set_id                         < 主键 >
*  title:                         标题,
*  introduction:                  简介,
*/
CREATE TABLE if NOT EXISTS public.book_sets (
  book_set_id             SERIAL            NOT NULL PRIMARY KEY,
  archite_id              SERIAL            NOT NULL,
  title                   varchar(20)       NOT NULL,
  introduction            varchar           DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_sets
  OWNER TO postgres;

COMMENT ON TABLE public.book_sets
IS '书籍 - 设定';

insert into book_sets(title, archite_id) values('角色', 1);
insert into book_sets(title, archite_id) values('武器', 1);
insert into book_sets(title, archite_id) values('契灵', 1);
