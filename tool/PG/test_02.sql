/*
*  书籍 - 设定 - 其他
*  temp_id:                      < 主键 >,
*  set_id:                       < 外键 >, # settings
*  name:                         名字, # 武器
*  type:                         string, # ( array | string ) 数据的显示类型
*  explain:                      解释, # 解释，对于当前字段的注解，字段后面跟“？”
*/
CREATE TABLE if NOT EXISTS public.test_02 (
  temp_id                       SERIAL                  NOT NULL UNIQUE,
  set_id                        SERIAL                  NOT NULL PRIMARY KEY,
  name                          varchar(100)            DEFAULT NULL,
  type                          varchar(100)            DEFAULT NULL,
  explain                       varchar(100)            DEFAULT NULL,
  foreign key(set_id) references public.test_01(set_id) on update cascade on delete cascade
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.test_02
  OWNER TO postgres;

COMMENT ON TABLE public.test_02
IS '书籍 - 设定 - 其他';

