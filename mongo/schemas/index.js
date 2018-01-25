
// 书
import { Book } from './book'

// 阵营
import { Camp } from './camp'

// 地理
import { Geography } from './geography'

// 妖兽
import { Monster } from './monster'

// 角色
import { Role } from './role'

// 阵营
import { Rule } from './rule'

// 用户
import { User } from './user'

const statics = {
  fetch: function (cd) {
    return this
      .find({})
      .sort('mate.updateAt')
      .exec(cd)
  },
  findById: function(id, cd) {
    return this
      .findOne({_id: id})
      .exec(cd)
  }
};


Book.statics = statics;
Camp.statics = statics;
Geography.statics = statics;
Monster.statics = statics;
Role.statics = statics;
Rule.statics = statics;
User.statics = statics;

export {
  Book,
  Camp,
  Geography,
  Monster,
  Role,
  Rule,
  User,
}