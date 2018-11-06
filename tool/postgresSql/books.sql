/*
*  创建书籍表
  book_id:                  < 主键 >, # 书号
  book_name:                书名, #
  book_author:              作者, # ID 这里是作品的归属 & 可以做一个外键
  user_signature:           署名, # 签名
  book_introduction:        简介,
  book_title_message:       扉页寄语,
  book_type:                作品类型,
  book_authorization:       授权级别,
  book_edited_group:        责编分组,
  book_volumes:             章节,
  book_classify:            分类,
  book_subscribe:           订阅,
  book_tags:                标签,
  book_collection:          收藏,
  book_contribution_fee:    稿费,
  book_chapter_fee:         章节费, # subscribe 订阅
  book_status:              作品状态, # 草稿：draft, 发布：release，销毁：destroy
  book_editor:              [编辑], # 只有这里有的人，才可以编辑
  book_role:                [角色] #
  book_sets:                [设定] #
  book_architecture:        架构 # ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
*/
CREATE TABLE if NOT EXISTS public.books (
  book_id               SERIAL              NOT NULL PRIMARY KEY,
  book_name             varchar(16)         NOT NULL,
  book_author           varchar(100)        DEFAULT NULL,
  book_signature        varchar(16)         NOT NULL,
  book_introduction     varchar(500)        DEFAULT NULL,
  book_title_message    varchar(500)        DEFAULT NULL,
  book_type             varchar(500)        DEFAULT NULL,
  book_authorization    varchar(500)        DEFAULT NULL,
  book_edited_group     varchar(500)        DEFAULT NULL,
  book_volumes          varchar(500)        DEFAULT NULL,
  book_classify         varchar(500)        DEFAULT NULL,
  book_subscribe        varchar(500)        DEFAULT NULL,
  book_tags             varchar(500)        DEFAULT NULL,
  book_collection       varchar(500)        DEFAULT NULL,
  book_contribution_fee varchar(500)        DEFAULT NULL,
  book_status           varchar(500)        DEFAULT NULL,
  book_editor           varchar(500)        DEFAULT NULL,
  book_role             varchar(500)        DEFAULT NULL,
  book_architecture     varchar(500)        DEFAULT NULL,
  book_settings         varchar[]           DEFAULT NULL,
  book_create_time      date                DEFAULT new('new')
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.books
  OWNER TO postgres;

COMMENT ON TABLE public.books
IS '书籍 - 基础信息表';

