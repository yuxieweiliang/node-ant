/*
*  架构
*/
CREATE TABLE if NOT EXISTS public.architectures (
  -- < 主键 >, # 书号
  archite_id                SERIAL            NOT NULL PRIMARY KEY,
  -- 标题
  title                     varchar(18)       DEFAULT NULL,
  -- 作者
  author                    varchar(10)       DEFAULT NULL,
  -- 编辑
  editor                    varchar[]         DEFAULT NULL,
  -- 背景
  background                text              DEFAULT NULL,
  -- 事件点
  datetime                  date              NOT NULL DEFAULT now(),
  -- 创建时间
  create_time               timestamp         NOT NULL DEFAULT now()
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.architectures
  OWNER TO postgres;

COMMENT ON TABLE public.architectures
IS '架构 - 基础信息表';


insert into architectures(title) values('test');


/*
  -- 类型
  type                      varchar(16)       DEFAULT NULL,
*/
