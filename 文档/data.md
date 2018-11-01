{
  role_name:                 名字,
  role_portrait:             头像, # url/xxx.jpeg
  role_age:                  年龄,
  role_sex:                  性别,
  role_identity:             身份, # 主角，女一号，路人甲
  role_character:            性格, #
  role_point_event:          时间点发生的事件, #
  role_sets: [{
      set_title: 契灵,
      set_introduction: 简介,
      set_templates: [{
          set_t_name: 名称,
          set_t_type: string,
          set_t_explain: null,
        },{
          set_t_name: 种族,
          set_t_type: string,
          set_t_explain: null,
        }
      ],
      set_items: [{
          set_i_id: 0,
          set_i_values: [
            { set_v_value: 蒂娜, },
            { set_v_value: 血族, },
          ],
        },{
          set_i_id: 1,
          set_i_values: [
            { set_v_value: 蒂娜, },
            { set_v_value: 血族, },
          ],
        },
      ],
    }
  ],
}