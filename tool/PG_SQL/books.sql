/*
*  创建书籍表
  book_id:                  < 主键 >, # 书号
  name:                     书名, #
  introduction:             简介,
  title_message:            扉页寄语,
  type:                     类型, # 驻站， 签约， 未签约， 公众作品
  author:                   授权类型, # 独家，驻站
  edited_group:             责编分组, # 仙侠编辑组，玄幻编辑组
  classify:                 分类,
  subscribe:                订阅,
  tags:                     标签,
  collection:               收藏,
  contribution_fee:         稿费,
  chapter_fee:              章节费, #
  status:                   状态, # 连载中，已完结，断更。
  editor:                   [编辑], # 只有这里有的人，才可以编辑
  architecture:             架构, # ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
  create_time:              创建时间, #
  update_time:              更新时间, #
*/
CREATE TABLE if NOT EXISTS public.books (
  book_id               SERIAL              NOT NULL PRIMARY KEY,
  name                  varchar(16)         NOT NULL,
  introduction          varchar(100)        DEFAULT NULL,
  title_message         varchar(100)        DEFAULT NULL,
  type                  varchar(100)        DEFAULT NULL,
  author                varchar(100)        DEFAULT NULL,
  edited_group          varchar(100)        DEFAULT NULL,
  classify              varchar(100)        DEFAULT NULL,
  subscribe             varchar(100)        DEFAULT NULL,
  tags                  varchar(100)        DEFAULT NULL,
  collection            varchar(100)        DEFAULT NULL,
  contribution_fee      varchar(100)        DEFAULT NULL,
  status                varchar(100)        DEFAULT NULL,
  editor                varchar(100)        DEFAULT NULL,
  architecture          varchar(100)        DEFAULT NULL,
  create_time           timestamp           NOT NULL DEFAULT now(),
  update_time           timestamp           NOT NULL DEFAULT now()
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.books
  OWNER TO postgres;

COMMENT ON TABLE public.books
IS '书籍 - 基础信息表';

