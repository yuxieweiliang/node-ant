书的边上，会显示当前书章节出现的人物头像，点击人物头像会条状到当前人物的个人介绍页面。
每一个章节，都可以点击一次人物头像旁边的心形icon，会增加与当前人物的好感度。
当好感度达到一定程度时，可以领取当前人物的动态头像。
人物形象时会跟着章节的变化而变化的。
作者可以通过人物，设置互动。



角色的设定 # { b_r_s_label: 兵器, b_r_s_type: string, b_r_s_values: 苍冷的心跳 }
role_sets:
{
  role_id:                 < 主键 >,
  label:              标题, # 兵器 阵营：camp 武器：weapons
  type:               string, # ( array | string ) 数据类型
  values:             冰雪霜华, # [ 苍冷的心跳, 黎明的哀歌 ]
}


时间点事件：
time_point_events:
{
  event_id:                 < 主键 >,
  user:                     用户,
  time:                     2018-10-10,
  title:                    离家出走,
  introduction:             离家出走……,
}

词：
words:
{
  word_id:                  < 主键 >,
  word_name:                dream,
  word_meaning:             '', #【含义】词的含义
  word_similars:            [近义词], # from word_similar
  word_antonyms:            [反义词], # from word_antonyms
  word_thinks:              [联想词], # from think_words
}

近义词：
word_similar:
{
  w_s_id:                 < 主键 >,
  w_s_level:              1, #【关系级别】 （ 1 …… 9 ）
  w_s_words:              [w_01, w_04, w_05] #【联想词】 同一级别可以有多个 from words
}

联想词：
word_thinks:
{
  w_t_id:                 < 主键 >,
  w_t_level:              1, #【关系级别】 （ 1 …… 9 ）
  w_t_words:              [w_01, w_04, w_05] #【联想词】 同一级别可以有多个 from words
}






书籍 - 卷：
book_volumes:
{
  volume_id:                  < 主键 >,
  title:                      卷名,
  introduction:               简介,
  chapters:                   [章节], # 包含那些章节
  create_time:                创建时间,
  update_time:                更新时间,
}

书籍 - 章节：
book_chapters:
{
  chapter_id:                 < 主键 >,
  title:                      章节名字,
  content:                    主要内容,
  comments:                   讨论,
  replys:                     留言,
  page:                       页码,
  create_time:                创建时间,
  update_time:                更新时间,
}

留言：
comments:
{
  comment_id:               < 主键 >,
  comment_content:          内容,
  comment_date:             评论时间,
  comment_author:           发言人id,
}

回复：
replys:
{
  reply_id:               < 主键 >,
  reply_content:          内容,
  reply_date:             评论时间,
  reply_comment:          被回复id,
  reply_author:           发言人id,
}

排行榜：
rankings:
{
  rank_id:              < 主键 >,
  title:                    名字,
  list:                     主体,
}


客户端：
client:
{
  client_id:                 < 主键 >,
  client_name:               客户端名称 第三方软件名称,
  client_authorize_code:     授权码,
  client_authorize:          是否授权 暂时无用 是否允许第三方查询,
}

















