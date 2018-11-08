/*
*  用户 - 信息
*  INCREMENT 增量 -> 可以把增量设置为 2 ，就会成为 1 3 5 ……
*  MINVALUE 最小值
*  MAXVALUE 最大值
*  START 开始值
*  CACHE 缓存
*/
CREATE SEQUENCE if NOT EXISTS public.users_user_information_id_seq
 INCREMENT 2
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

/**
*  创建用户表
  user_id:                  < 主键 >,
  user_sex:                 性别,
  user_name:                实名, #【真是姓名】
  user_pseudonym:           笔名, # 签名 署名
  user_birthday:            生日,
  user_nickname:            昵称, #【昵称】
  user_collect_books:       [收藏的书], #
  user_follow_authors:      [关注的作者], #
  user_role:                角色, # 普通用户，作家，编辑，管理员，小组成员
  user_auth:                权限, #
*/
CREATE TABLE if NOT EXISTS public.user_information (
  user_id                 SERIAL        NOT NULL PRIMARY KEY,
  user_sex                enum_sex      DEFAULT NULL,
  user_name               varchar(13)   DEFAULT NULL,
  user_birthday           varchar(13)   DEFAULT NULL,
  user_nickname           varchar(13)   DEFAULT NULL,
  user_pseudonym          varchar(16)   DEFAULT NULL,
  user_collect_books      varchar(13)   DEFAULT NULL,
  user_follow_authors     varchar(13)   DEFAULT NULL,
  user_role               varchar(13)   DEFAULT NULL,
  user_auth               enum_type     DEFAULT NULL
) WITH (OIDS = FALSE);
ALTER SEQUENCE public.users_user_information_id_seq OWNED BY user_information.user_id;

ALTER TABLE public.user_information
  OWNER TO postgres;

COMMENT ON TABLE public.user_information
IS '用户 - 信息';

