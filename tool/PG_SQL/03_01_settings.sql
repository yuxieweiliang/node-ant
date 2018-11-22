/*
*  书籍 - 设定
*  set_id                         < 主键 >
*  title:                         标题,
*  introduction:                  简介,
*/
CREATE TABLE if NOT EXISTS public.settings (
  set_id                  SERIAL            NOT NULL PRIMARY KEY,
  title                   int               NOT NULL,
  introduction            varchar(500)      DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.settings
  OWNER TO postgres;

COMMENT ON TABLE public.settings
IS '书籍 - 设定';

