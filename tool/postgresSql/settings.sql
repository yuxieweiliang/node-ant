/*
*  书籍 - 设定
*  b_s_id             < 主键 >
*/
CREATE TABLE if NOT EXISTS public.settings (
  set_id                  SERIAL            NOT NULL PRIMARY KEY,
  set_title               varchar(13)       NOT NULL,
  set_introduction        varchar(500)      DEFAULT NULL,
  set_templates              varchar[]         DEFAULT NULL,
  set_type                varchar(13)       DEFAULT NULL,
  set_items               varchar[]         DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.settings
  OWNER TO postgres;

COMMENT ON TABLE public.settings
IS '书籍 - 设定';

