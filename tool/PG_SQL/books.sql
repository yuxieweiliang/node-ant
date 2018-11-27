/*
*  创建书籍表
*/
CREATE TABLE if NOT EXISTS public.books (
  -- < 主键 >, # 书号
  book_id               SERIAL              NOT NULL PRIMARY KEY,
  -- 书名, #
  name                  varchar(16)         NOT NULL,
  -- 网站： 阅读文学网 其他文学网
  website               text                NOT NULL,
  -- 简介：
  introduction          text                DEFAULT NULL,
  -- 扉页寄语：
  title_message         text                DEFAULT NULL,
  -- 类型： 驻站， 签约， 未签约， 公众作品
  type                  varchar(100)        DEFAULT NULL,
  -- 作者
  author                int                 NOT NULL,
  -- 授权类型：独家首发，驻站作品
  authorize             int                 NOT NULL,
  -- 责编分组： 仙侠编辑组，玄幻编辑组
  edited_group          varchar[]           DEFAULT NULL,
  -- 分类：
  classify              varchar(20)         DEFAULT NULL,
  -- 订阅：
  subscribe             varchar[]           DEFAULT NULL,
  -- 标签：
  tags                  varchar[]           DEFAULT NULL,
  -- 收藏：
  collection            integer             DEFAULT NULL,
  -- 稿费：
  contribution_fee      numeric             DEFAULT NULL,
  -- 章节费：
  chapter_fee           numeric             DEFAULT NULL,
  -- 状态： 连载中，已完结，断更。
  status                varchar(10)         DEFAULT NULL,
  -- [编辑]： 只有这里有的人，才可以编辑
  editor                varchar[]           DEFAULT NULL,
  -- 创建时间
  create_time           timestamp           NOT NULL DEFAULT now(),
  -- 更新时间
  update_time           timestamp           NOT NULL DEFAULT now()
) WITH (OIDS = FALSE);

/*  ALTER TABLE <tablename> OWNER TO <username>  将这张表赋给当前用户  */
ALTER TABLE public.books
  OWNER TO postgres;

COMMENT ON TABLE public.books
IS '书籍 - 基础信息表';

/*
  architecture          varchar(100)        DEFAULT NULL,
  # 架构 ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
*/