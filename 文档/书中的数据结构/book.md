书的边上，会显示当前书章节出现的人物头像，点击人物头像会条状到当前人物的个人介绍页面。
每一个章节，都可以点击一次人物头像旁边的心形icon，会增加与当前人物的好感度。
当好感度达到一定程度时，可以领取当前人物的动态头像。
人物形象时会跟着章节的变化而变化的。
作者可以通过人物，设置互动。



角色的设定 # { b_r_s_label: 兵器, b_r_s_type: string, b_r_s_values: 苍冷的心跳 }
role_sets:
{
  r_s_id:                 < 主键 >,
  r_s_label:              标题, # 兵器 阵营：camp 武器：weapons
  r_s_type:               string, # ( array | string ) 数据类型
  r_s_values:             冰雪霜华, # [ 苍冷的心跳, 黎明的哀歌 ]
}


时间点事件：
time_point_events:
{
  t_p_e_id:                 < 主键 >,
  t_p_e_time:               2018-10-10,
  t_p_e_title:              离家出走,
  t_p_e_introduction:       离家出走……,
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




武器：等级，形态，级别，排行，所属。
宠物：形态，等级，名称，潜力，归属，技能，种族，种族技能。

{name: '武器', labels: [1, 2, 3, 4, 5], values: [凤尾狮身虎爪, 10, null, null, null]}
{name: '宠物', labels: [1, 2, 3, 4, 5], values: [凤尾狮身虎爪, 10, null, null, null]}

[{id: 1, lable: '形态'}, {id: 2, lable: '等级'}, ]


书籍 - 卷：
book_volumes:
{
  book_v_id:                 < 主键 >,
  book_v_title:              卷名,
  book_v_introduction:       简介,
  book_chapters:             [章节], # 包含那些章节
  book_v_create_time:        创建时间,
  book_v_update_time:        更新时间,
}
书籍 - 章节：
book_chapters:
{
  book_c_id:                 < 主键 >,
  book_c_title:              章节名字,
  book_c_content:            主要内容,
  book_c_comments:           讨论,
  book_c_replys:             留言,
  book_c_page:               页码,
  book_c_create_time:        创建时间,
  book_c_update_time:        更新时间,
}

comments:
{
  comment_id:               < 主键 >,
  comment_content:          内容,
  comment_date:             评论时间,
  comment_author:           发言人id,
}

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
  rankings_id:             < 主键 >,
  rankings_title:          名字,
  rankings_content:        主体,
}

排行榜详细信息：
rankings_details:
{
  rankings_details_id:       < 主键 >,
  rankings_details_name:     名字,
  rankings_details_value:    值,
  rankings_details_index:    排行,
}

客户端：
client:
{
  client_id:                 < 主键 >,
  client_name:               客户端名称 第三方软件名称,
  client_authorize_code:     授权码,
  client_authorize:          是否授权 暂时无用 是否允许第三方查询,
}



sets:
{
  id:                   <主键>,
  title:                标题,
  introduce:            介绍,
}

字典：
dictionaries:
{
  id:                   <主键>,
  title:                标题,
  type:                 类型,
  ctrl_in:              属于, # doc.id
  introduce:            介绍,
  parent_id:            父节点, # 0：本身为最高节点，num：父节点的 id
}

sets: {
  title: 功法层次,
  dictionaries: [
     {_id: 1, title: 名称, introduce: '', type: '', parent_id: null},
     {_id: 2, title: 重量, introduce: '', type: '', parent_id: null},
     {_id: 3, title: 长短, introduce: '', type: '', parent_id: 2},
     {_id: 4, title: 粗细, introduce: '', type: '', parent_id: null},
   ]
}













