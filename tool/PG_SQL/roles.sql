/*
*  创建书籍表
*  book_role_id             < 主键 >

*  book_role_name           名字
*  user_role_sex            性别
*  user_role_date_of_birth  出生日期
*  book_introduction        简介

*  book_role_identity       身份： 主角，女一号，路人甲
*  book_role_camp           阵营
*  book_role_weapons        武器
*/
CREATE TABLE if NOT EXISTS public.roles (
  role_id               SERIAL               NOT NULL PRIMARY KEY,
  role_name             varchar(13)          NOT NULL,
  role_sex              enum_sex             NOT NULL,
  role_portrait         varchar(13)          NOT NULL,
  role_image            varchar(13)          DEFAULT NULL,
  role_birthday         date                 DEFAULT (now()),
  role_introduction     character(100)       DEFAULT NULL,
  role_identity         varchar(13)          DEFAULT NULL,
  role_character        varchar(13)          DEFAULT NULL,
  role_point_event      varchar(13)          DEFAULT NULL,
  role_sets             varchar(13)          DEFAULT NULL
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.roles
  OWNER TO postgres;

COMMENT ON TABLE public.roles
IS '书籍 - 角色';

