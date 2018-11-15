/*
*  书籍 - 设定
*  set_id                         < 主键 >
*  title:                         标题,
*  introduction:                  简介,
*/
CREATE TABLE if NOT EXISTS public.test_01 (
  set_id                  SERIAL            NOT NULL PRIMARY KEY,
  title                   varchar(500)      NOT NULL,
  introduction            varchar(500)      DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.test_01
  OWNER TO postgres;

COMMENT ON TABLE public.test_01
IS '书籍 - 设定';

