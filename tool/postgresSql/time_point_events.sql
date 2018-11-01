/*
*  书籍 - 设定 - 其他
*  t_p_e_id             < 主键 >
*  t_p_e_time           字段名称
*  t_p_e_title          字段类型
*  t_p_e_introduction   字介绍
*/
CREATE TABLE if NOT EXISTS public.book_set_labels (
  t_p_e_id                        SERIAL          NOT NULL PRIMARY KEY,
  t_p_e_time                      varchar         NOT NULL,
  t_p_e_title                     varchar[]       DEFAULT NULL,
  t_p_e_introduction              varchar[]       DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_set_labels
  OWNER TO postgres;

COMMENT ON TABLE public.book_set_labels
IS '书籍 - 设定 - 其他';

