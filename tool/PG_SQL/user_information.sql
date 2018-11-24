/*
*  用户 - 信息
*  INCREMENT 增量 -> 可以把增量设置为 2 ，就会成为 1 3 5 ……
*  MINVALUE 最小值
*  MAXVALUE 最大值
*  START 开始值
*  CACHE 缓存
*/
CREATE SEQUENCE if NOT EXISTS public.users_user_information_id_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

/**
*  创建用户表
  user_id:                  < 主键 >,
  sex:                      性别,
  name:                     实名, #【真是姓名】
  pseudonym:                笔名, # 签名 署名
  birthday:                 生日,
  nickname:                 昵称, #【昵称】
  collect_books:            [收藏的书], #
  follow_authors:           [关注的作者], #
  role:                     角色, # 普通用户，作家，编辑，管理员，小组成员
  auth:                     权限, #
*/
CREATE TABLE if NOT EXISTS public.user_information (
  user_id            SERIAL        NOT NULL PRIMARY KEY,
  sex                enum_sex      DEFAULT NULL,
  nickname           varchar(13)   DEFAULT NULL,
  birthday           varchar(13)   DEFAULT NULL,
  pseudonym          varchar(16)   DEFAULT NULL,
  collect_books      varchar(13)   DEFAULT NULL,
  follow_authors     varchar(13)   DEFAULT NULL,
  role               varchar(13)   DEFAULT NULL,
  auth               enum_type     DEFAULT NULL
) WITH (OIDS = FALSE);
ALTER SEQUENCE public.users_user_information_id_seq OWNED BY user_information.user_id;

ALTER TABLE public.user_information
  OWNER TO postgres;

COMMENT ON TABLE public.user_information
IS '用户 - 信息';

