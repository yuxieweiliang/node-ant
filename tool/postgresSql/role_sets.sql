/*
*  创建书籍表
*  b_r_s_id             < 主键 >
*/
CREATE TABLE if NOT EXISTS public.role_sets (
  role_s_id                SERIAL                NOT NULL PRIMARY KEY,
  role_s_label             varchar(13)           NOT NULL,
  role_s_type              enum_sex              NOT NULL,
  role_s_values            varchar(13)           NOT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.role_sets
  OWNER TO postgres;

COMMENT ON TABLE public.role_sets
IS '书籍 - 角色';

