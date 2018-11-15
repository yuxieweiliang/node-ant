/**
*  创建用户表
  word_id:                  < 主键 >,
*/
CREATE TABLE if NOT EXISTS public.word_similar (
  w_s_id               SERIAL        NOT NULL PRIMARY KEY,
  w_s_level            varchar(13)   NOT NULL,
  w_s_words            varchar(13)   NOT NULL
) WITH (OIDS = FALSE);

ALTER TABLE public.word_similar
  OWNER TO postgres;

COMMENT ON TABLE public.word_similar
IS '用户 - 信息';

