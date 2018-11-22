/*
*  书籍 - 设定 - 其他
*  item_id:                      < 主键 >,
*  set_id:                       < 外键 >, # settings
*  name:                         名字, # 武器
*  introduction:                 简介,
*/
CREATE TABLE if NOT EXISTS public.set_items (
  item_id                        SERIAL                NOT NULL UNIQUE,
  set_id                         SERIAL                NOT NULL PRIMARY KEY,
  name                           varchar(100)          DEFAULT NULL,
  introduction                   varchar(100)          DEFAULT NULL,
  FOREIGN KEY(set_id) REFERENCES settings(set_id) ON UPDATE CASCADE ON DELETE CASCADE
) WITH (OIDS = FALSE);

/*  foreign key(set_id) references settings(set_id) on update cascade on delete cascade */
/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.set_items
  OWNER TO postgres;

COMMENT ON TABLE public.set_items
IS '书籍 - 设定 - 其他';

