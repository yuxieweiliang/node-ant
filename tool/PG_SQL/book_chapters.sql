/*
*  章节
*/
CREATE TABLE if NOT EXISTS public.book_chapters (
  -- < 主键 >
  chapter_id         SERIAL               NOT NULL PRIMARY KEY,
  -- 标题
  title              varchar(18)          NOT NULL,
  -- 内容
  article            text                 DEFAULT NULL,
  -- 注解： 也可以是作者的话。
  annotation         varchar              DEFAULT NULL,
  -- 页码
  page               SERIAL               NOT NULL,
  -- 创建时间
  create_time        timestamp            NOT NULL DEFAULT now(),
  -- 更新时间
  update_time        timestamp            NOT NULL DEFAULT now(),
  -- 发布时间
  release_time       timestamp            NOT NULL DEFAULT now()
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.book_chapters
  OWNER TO postgres;

COMMENT ON TABLE public.book_chapters
IS '书籍 - 基础信息表';

/*
  -- 评论
  comments           varchar(16)         DEFAULT NULL,
  -- 回复
  replys             varchar(500)        DEFAULT NULL,
*/