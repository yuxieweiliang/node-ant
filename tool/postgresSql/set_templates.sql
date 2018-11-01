/*
*  书籍 - 设定 - 其他
*  b_s_l_id             < 主键 >
*  b_s_l_name           字段名称
*  b_s_l_type           字段类型
*  b_s_l_introduction   字介绍
*/
CREATE TABLE if NOT EXISTS public.set_templates (
  set_t_id                        SERIAL          NOT NULL PRIMARY KEY,
  set_t_name                      varchar         NOT NULL,
  set_t_type                      varchar[]       DEFAULT NULL,
  set_t_explain                   varchar[]       DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.set_templates
  OWNER TO postgres;

COMMENT ON TABLE public.set_templates
IS '书籍 - 设定 - 其他';

