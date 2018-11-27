/*
*  书籍 - 设定
*  set_id                         < 主键 >
*  title:                         标题,
*  introduction:                  简介,
*/
CREATE TABLE if NOT EXISTS public.templates (
  temp_id                 SERIAL                NOT NULL PRIMARY KEY,
  items                   int4[]                DEFAULT NULL,
  introduction            varchar               DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.templates
  OWNER TO postgres;

COMMENT ON TABLE public.templates
IS '书籍 - 设定';

insert into templates(items) values('{1, 2, 3, 4}');
insert into templates(items) values('{2, 4, 6, 8}');
insert into templates(items) values('{3, 5 }');
insert into templates(items) values('{12, 211, 322, 4567}');

