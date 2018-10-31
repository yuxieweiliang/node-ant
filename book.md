书的边上，会显示当前书章节出现的人物头像，点击人物头像会条状到当前人物的个人介绍页面。
每一个章节，都可以点击一次人物头像旁边的心形icon，会增加与当前人物的好感度。
当好感度达到一定程度时，可以领取当前人物的动态头像。
人物形象时会跟着章节的变化而变化的。
作者可以通过人物，设置互动。




用户：
user:
{
  user_id:                 < 主键 >,
  username:                用户名, #【王五】
  password:                密码, #【】
}

用户信息：
user_info:
{
  user_id:                  < 主键 >,
  user_sex:                 性别,
  user_name:                实名, #【真是姓名】
  user_nickname:            昵称, #【昵称】
  user_signature:           署名, # 签名
  user_collect_books:       [收藏的书], #
  user_follow_authors:      [关注的作者], #
  user_role:                角色, # 普通用户，作家，编辑，管理员，小组成员
  user_auth:                权限, #
}

架构：
architecture:
{
  archite_id:               < 主键 >,
  archite_name:             crchite_01, #【架构名称】
  archite_author:           crchite_01, #【作者】这里是架构的归属
  archite_editor:           crchite_01, #【编辑】只有这里有的人，才可以编辑
  archite_background:       crchite_01, #【背景】
  archite_datetime:         crchite_01, #【时间点】
  archite_ranking:          crchite_01, #【排行榜】
}

书： # 创建一本书的同时，就会创建一个架构
book:
{
  book_id:                  < 主键 >,
  book_name:                清闲, #【书名称】
  book_author:              abc_01, #【作者】这里是作品的归属 & 可以做一个外键
  book_editor:              [abc_02, abc_03], #【编辑】只有这里有的人，才可以编辑
  book_role:                [b_r_01, b_r_02] # 角色
  book_sets:                [b_s_01, b_s_02] # 设定
  book_architecture:        '' # 架构
}

书中角色：
book_role:
{
  b_r_id:                   < 主键 >,
  b_r_name:                 李清柔,
  b_r_sex:                  女,
  b_r_portrait:             url/xxx.jpeg, #【头像】
  b_r_image:                url/xxx.jpeg, #【形象】
  b_r_age:                  6,
  b_r_character:            6, # 【性格】
  b_r_introduction:         '…………', # 【简介】
  b_r_point_event:          '…………', # 【时间点发生的事件】
  b_r_sets:                 00001,
}

书中角色的设定
book_role_sets:
{
  b_r_s_id:                 < 主键 >,
  b_r_s_label:              兵器,
  b_r_s_type:               string, # ( array | string ) 数据类型
  b_r_s_values:             冰雪霜华, # [ 苍冷的心跳, 黎明的哀歌 ]
}

书中的设定 # 地理位置 / 武器 / 宠物 /
book_sets:
{
  b_s_id:                 < 主键 >,
  b_s_title:              标题,
  b_s_introduction:       简介,
  b_s_labels:             [名称, 等级, 形态, 级别, 排行, 所属], # 字段 第一个必然是名称
  b_s_type:               string, # ( array | string ) 数据类型
  b_s_items:              [ 名称 ], #  冰雪霜华, 苍冷的心跳, 黎明的哀歌
}

书中的设定 - 字段 # 武器的名字，武器的介绍
book_set_labels:
{
  b_s_i_id:                 < 主键 >,
  b_s_i_name:               名字,
  b_s_i_type:               string, # ( array | string ) 数据的显示类型
  b_s_i_introduction:       介绍, #
}

书中的设定 - 具体值 # 武器的名字，武器的介绍
book_set_items:
{
  b_s_i_id:                 < 主键 >,
  b_s_i_name:               名字,
  b_s_i_type:               string, # ( array | string ) 数据的显示类型
  b_s_i_introduction:       介绍, #
}

时间点事件：
time_point_event:
{
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
  word_similar:             [w_02, elusive, beautiful, evil], #【近义词】 差自身表
  word_think_words:         [think_01, think_02, think_03, think_04], #【联想词】 from think_words
}

联想词：
think_words:
{
  think_id:                 < 主键 >,
  think_level:              1, #【关系级别】 （ 1 …… 9 ）
  think_words:              [w_01, w_04, w_05] #【联想词】 同一级别可以有多个 from words
}







武器：等级，形态，级别，排行，所属。
宠物：形态，等级，名称，潜力，归属，技能，种族，种族技能。

{name: '武器', labels: [1, 2, 3, 4, 5], values: [凤尾狮身虎爪, 10, null, null, null]}
{name: '宠物', labels: [1, 2, 3, 4, 5], values: [凤尾狮身虎爪, 10, null, null, null]}

[{id: 1, lable: '形态'}, {id: 2, lable: '等级'}, ]






