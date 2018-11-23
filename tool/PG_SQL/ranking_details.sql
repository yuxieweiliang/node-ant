/*
*  创建书籍表
*  book_id  < 主键 >
*  book_name 书名
*  book_author 作者
*  book_introduction 简介
*/
CREATE TABLE if NOT EXISTS public.rankings_details (
  det_id              SERIAL              NOT NULL PRIMARY KEY,
  name                varchar(20)         NOT NULL,
  value               varchar(20)         NOT NULL,
  index               varchar(20)         DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.rankings_details
  OWNER TO postgres;

COMMENT ON TABLE public.rankings_details
IS '书籍 - 基础信息表';

