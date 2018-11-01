/*
*  架构
*  book_id  < 主键 >
*  book_name 书名
*  book_author 作者
*  book_introduction 简介
*/
CREATE TABLE if NOT EXISTS public.architectures (
  archite_id                SERIAL            NOT NULL PRIMARY KEY,
  archite_name              varchar(16)       NOT NULL,
  archite_author            varchar(100)      DEFAULT NULL,
  archite_editor            varchar(500)      DEFAULT NULL,
  archite_background        varchar(500)      DEFAULT NULL,
  archite_datetime          varchar(500)      DEFAULT NULL,
  archite_ranking           varchar(500)      DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.architectures
  OWNER TO postgres;

COMMENT ON TABLE public.architectures
IS '书籍 - 基础信息表';

