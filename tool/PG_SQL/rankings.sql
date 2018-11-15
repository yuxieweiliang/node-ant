/*
*  排行榜
*  rank_id      < 主键 >
*  title        书名
*  list         列表
*/
CREATE TABLE if NOT EXISTS public.rankings (
  rank_id               SERIAL         NOT NULL PRIMARY KEY,
  title                 varchar(20)    NOT NULL,
  list                  varchar[]      DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.rankings
  OWNER TO postgres;

COMMENT ON TABLE public.rankings
IS '书籍 - 基础信息表';

