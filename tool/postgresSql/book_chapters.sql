/*
*  创建书籍表
*  b_c_id  < 主键 >
*/
CREATE TABLE if NOT EXISTS public.book_chapters (
  b_c_id                 SERIAL              NOT NULL PRIMARY KEY,
  b_c_title              varchar(16)         NOT NULL,
  b_c_content            varchar(100)        DEFAULT NULL,
  b_c_comments           varchar(16)         NOT NULL,
  b_c_replys             varchar(500)        DEFAULT NULL,
  b_c_page               varchar(500)        DEFAULT NULL,
  b_c_create_time        varchar(500)        DEFAULT NULL,
  b_c_update_time        varchar(500)        DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_chapters
  OWNER TO postgres;

COMMENT ON TABLE public.book_chapters
IS '书籍 - 基础信息表';

