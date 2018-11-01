/*
*  书籍 - 设定 - 其他
*  set_i_id             < 主键 >
*  set_i_values         字段名称
*/
CREATE TABLE if NOT EXISTS public.set_values (
  set_v_id                        SERIAL          NOT NULL PRIMARY KEY,
  set_v_value                     varchar(30)       NOT NULL,
  set_v_type                      varchar(30)       NOT NULL,
  set_v_introduction              varchar(30)       DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.set_values
  OWNER TO postgres;

COMMENT ON TABLE public.set_values
IS '书籍 - 设定 - 其他';

