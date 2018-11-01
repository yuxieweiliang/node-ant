/*
*  创建书籍表
*  b_c_id  < 主键 >
*/
CREATE TABLE if NOT EXISTS public.comments (
  comment_id                  SERIAL              NOT NULL PRIMARY KEY,
  comment_content             varchar(16)         NOT NULL,
  comment_date                varchar(100)        DEFAULT NULL,
  comment_author              varchar(16)         NOT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.comments
  OWNER TO postgres;

COMMENT ON TABLE public.comments
IS '书籍 - 基础信息表';

