import mongoose, { Schema } from 'mongoose';


// 规则
const RuleSchema = Schema({
  // 正义
  justice: {

  },
  // 邪恶
  evil: {

  }
});
export const Rule = mongoose.model('Rule', RuleSchema);