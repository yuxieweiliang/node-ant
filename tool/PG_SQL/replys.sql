/*
*  创建书籍表
*  b_c_id  < 主键 >
*/
CREATE TABLE if NOT EXISTS public.replys (
  reply_id                  SERIAL              NOT NULL PRIMARY KEY,
  content                   varchar(16)         NOT NULL,
  date                      varchar(100)        DEFAULT NULL,
  comment                   varchar(100)        DEFAULT NULL,
  author                    varchar(16)         NOT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.replys
  OWNER TO postgres;

COMMENT ON TABLE public.replys
IS '书籍 - 基础信息表';

