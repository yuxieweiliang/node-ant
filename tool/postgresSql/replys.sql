/*
*  创建书籍表
*  b_c_id  < 主键 >
*/
CREATE TABLE if NOT EXISTS public.replys (
  reply_id                  SERIAL              NOT NULL PRIMARY KEY,
  reply_content             varchar(16)         NOT NULL,
  reply_date                varchar(100)        DEFAULT NULL,
  reply_comment             varchar(100)        DEFAULT NULL,
  reply_author              varchar(16)         NOT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.replys
  OWNER TO postgres;

COMMENT ON TABLE public.replys
IS '书籍 - 基础信息表';

