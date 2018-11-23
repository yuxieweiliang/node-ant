/*
*  创建书籍表
*  client_id  < 主键 >
*  client_name 客户端名称 第三方软件名称
*  client_authorize_code 授权码
*  client_authorize 是否授权 暂时无用 是否允许第三方查询
*/
CREATE TABLE if NOT EXISTS public.clients (
  client_id               SERIAL          NOT NULL PRIMARY KEY,
  client_name             varchar(16)     NOT NULL,
  client_authorize_code   varchar(100)    DEFAULT NULL,
  client_authorize        boolean         DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.clients
  OWNER TO postgres;

COMMENT ON TABLE public.clients
IS '书籍 - 基础信息表';

