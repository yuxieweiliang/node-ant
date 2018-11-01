/**
*  创建用户表
  word_id:                  < 主键 >,
*/
CREATE TABLE if NOT EXISTS public.words (
  word_id                 SERIAL        NOT NULL PRIMARY KEY,
  word_name               varchar(13)   NOT NULL,
  word_meaning            varchar(13)   NOT NULL,
  word_similars           varchar(13)   NOT NULL,
  word_thinks             varchar(13)   NOT NULL
) WITH (OIDS = FALSE);

ALTER TABLE public.user_info
  OWNER TO postgres;

COMMENT ON TABLE public.user_info
IS '用户 - 信息';

