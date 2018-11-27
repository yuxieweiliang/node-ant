/*
*  排行榜详细
*/
CREATE TABLE if NOT EXISTS public.rankings_details (
  -- < 主键 >
  det_id              SERIAL              NOT NULL PRIMARY KEY,
  -- 排行榜 _ID
  rank_id             varchar(20)         NOT NULL,
  -- 名字
  name                varchar(20)         DEFAULT NULL,
  -- 内容
  value               varchar(20)         DEFAULT NULL,
  -- 排行
  index               varchar(20)         DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.rankings_details
  OWNER TO postgres;

COMMENT ON TABLE public.rankings_details
IS '书籍 - 基础信息表';

