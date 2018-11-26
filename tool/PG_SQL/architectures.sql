/*
*  架构
*  book_id                  < 主键 >
*  book_name                书名
*  book_author              作者
*  book_introduction        简介
*/
CREATE TABLE if NOT EXISTS public.architectures (
  archite_id                SERIAL            NOT NULL PRIMARY KEY,
  name                      varchar(16)       DEFAULT NULL,
  type                      varchar(16)       DEFAULT NULL,
  author                    varchar(100)      DEFAULT NULL,
  editor                    varchar(100)      DEFAULT NULL,
  background                varchar(100)      DEFAULT NULL,
  create_time               varchar(100)      DEFAULT NULL,
  datetime                  timestamp         NOT NULL DEFAULT now(),
  ranking                   timestamp         NOT NULL DEFAULT now()
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.architectures
  OWNER TO postgres;

COMMENT ON TABLE public.architectures
IS '书籍 - 基础信息表';

