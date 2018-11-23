/**
*  创建用户表
  word_id:                  < 主键 >,
*/
CREATE TABLE if NOT EXISTS public.word_thinks (
  w_t_id               SERIAL        NOT NULL PRIMARY KEY,
  w_t_level            varchar(13)   NOT NULL,
  w_t_words            varchar(13)   NOT NULL
) WITH (OIDS = FALSE);

ALTER TABLE public.word_thinks
  OWNER TO postgres;

COMMENT ON TABLE public.word_thinks
IS '用户 - 信息';

