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
  user_birthday:            生日,
  user_name:                实名, #【真是姓名】
  user_nickname:            昵称, #【昵称】
  user_collect_books:       [收藏的书], #
  user_follow_authors:      [关注的作者], #
  user_role:                角色, # 普通用户，作家，编辑，管理员，小组成员
  user_auth:                权限, #
}

架构：
architecture:
{
  archite_id:               < 主键 >,
  archite_name:             架构名称, #
  archite_author:           作者, # 这里是架构的归属
  archite_editor:           编辑, # 只有这里有的人，才可以编辑
  archite_background:       背景, #
  archite_datetime:         时间点, #
  archite_ranking:          排行榜, #
}

书： # 创建一本书的同时，就会创建一个架构
book:
{
  book_id:                  < 主键 >, # 书号
  book_name:                书名, #
  book_author:              作者, # ID 这里是作品的归属 & 可以做一个外键
  user_signature:           署名, # 签名
  book_introduction:        简介,
  book_title_message:       扉页寄语,
  book_type:                作品状态, # 驻站， 签约， 未签约， 公众作品
  book_authhorization:      授权级别,
  edited_group:             责编分组,
  book_volumes:             章节,
  book_classify:            分类,
  book_subscribe:           订阅,
  book_tags:                标签,
  book_collection:          收藏,
  book_contribution_fee:    稿费,
  book_chapter_fee:         章节费, # subscribe 订阅
  book_status:              作品状态, # 草稿：draft, 发布：release，销毁：destroy
  book_editor:              [编辑], # 只有这里有的人，才可以编辑
  book_role:                [角色], #
  book_sets:                [设定], #
  book_architecture:        架构, # ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
  book_create_time:         创建时间, # ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
}

分类：
book_classify:
{
  book_c_id:              < 主键 >,
  book_c_name:            名字,
}

编辑组：
edited_group:
{
  book_e_g_id:              < 主键 >,
  book_e_g_name:            名字,
  book_e_g_member:          成员,
}

书中角色：
roles:
{
  role_id:                   < 主键 >,
  role_name:                 名字,
  role_portrait:             头像, # url/xxx.jpeg
  role_image:                形象, # url/xxx.jpeg
  role_age:                  年龄,
  role_sex:                  性别,
  role_birthday:             生日,
  role_identity:             身份, # 主角，女一号，路人甲
  role_character:            性格, #
  role_introduction:         简介, #
  role_point_event:          时间点发生的事件, #
  role_sets:                 [书中角色的设定],
}

书中角色的设定 # { b_r_s_label: 兵器, b_r_s_type: string, b_r_s_values: 苍冷的心跳 }
role_sets:
{
  r_s_id:                 < 主键 >,
  r_s_label:              标题, # 兵器 阵营：camp 武器：weapons
  r_s_type:               string, # ( array | string ) 数据类型
  r_s_values:             冰雪霜华, # [ 苍冷的心跳, 黎明的哀歌 ]
}

书中的设定 # 地理位置 / 武器 / 宠物 /
settings:
{
  set_id:                 < 主键 >,
  set_title:              标题,
  set_introduction:       简介,
  set_templates:           [名称, 介绍, 等级, 形态, 级别, 排行, 所属], # 字段 第一个必然是名称
  set_items:              [ 排行的列表 ], #
}

书中的设定 - 字段 # 武器的名字，武器的介绍
set_templates:
{
  set_t_id:                 < 主键 >,
  set_t_name:               名字,
  set_t_type:               string, # ( array | string ) 数据的显示类型
  set_t_explain:            explain, # 针对当前字段的介绍，以及类型介绍等
}

书中的设定 - 具体值 # 武器的名字，武器的介绍
set_items:
{
  set_i_id:                 < 主键 >,
  set_i_values:             [具体的值], #
}

书中的设定 - 具体值 # 武器的名字，武器的介绍
set_values:
{
  set_v_id:                 < 主键 >,
  set_v_value:              值, # 冰雪霜华, 苍冷的心跳, 黎明的哀歌
  set_v_type:               string, # ( array | string |  section ) 数据的显示类型
  set_v_introduction:       介绍, #
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














{
  sets: [1, 2, 3, 4]
}

[
  {_id: 1, key: 名称, value: '', type: ''},
  {_id: 2, key: 重量, value: '', type: ''},
  {_id: 3, key: 长短, value: '', type: ''},
  {_id: 4, key: 粗细, value: '', type: ''},
]














