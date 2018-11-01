/*
*  书籍 - 设定 - 其他
*  set_i_id             < 主键 >
*  set_i_values         字段名称
*/
CREATE TABLE if NOT EXISTS public.set_items (
  set_i_id                          SERIAL          NOT NULL PRIMARY KEY,
  set_i_values                      varchar[]       NOT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.set_items
  OWNER TO postgres;

COMMENT ON TABLE public.set_items
IS '书籍 - 设定 - 其他';

