/*
*  创建书籍表
*  b_c_id  < 主键 >
*/
CREATE TABLE if NOT EXISTS public.comments (
  -- < 主键 >, # 书号
  comt_id             SERIAL                NOT NULL PRIMARY KEY,
  --  内容
  content             text                  NOT NULL,
  -- 发布人
  author              varchar(16)           NOT NULL,
  -- 时间
  datetime            timestamp             NOT NULL DEFAULT now()
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.comments
  OWNER TO postgres;

COMMENT ON TABLE public.comments
IS '书籍 - 基础信息表';

