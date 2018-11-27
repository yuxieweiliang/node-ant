/*
*  排行榜
*/
CREATE TABLE if NOT EXISTS public.rankings (
  -- < 主键 >
  rank_id               SERIAL         NOT NULL PRIMARY KEY,
  archite_id            SERIAL         NOT NULL,
  -- 标题
  title                 varchar(20)    NOT NULL,
  FOREIGN KEY(archite_id) REFERENCES architectures(archite_id) ON UPDATE CASCADE ON DELETE CASCADE
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.rankings
  OWNER TO postgres;

COMMENT ON TABLE public.rankings
IS '书籍 - 基础信息表';

