/*
*  创建书籍表
  book_id:                    < 主键 >, # 书号
  label:                      书名, #
  value:                      书名, #
*/
CREATE TABLE if NOT EXISTS public.dictionaries (
  dic_id                SERIAL              NOT NULL PRIMARY KEY,
  label                 integer             DEFAULT NULL,
  value                 varchar(16)         NOT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.dictionaries
  OWNER TO postgres;

COMMENT ON TABLE public.dictionaries
IS '字典 - 基础信息表';

/*
  architecture          varchar(100)        DEFAULT NULL,
  # 架构 ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
*/