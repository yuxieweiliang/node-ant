import mongoose, { Schema } from 'mongoose';


// 阵营
const CampSchema = Schema({
  justice: {

  },
  evil: {

  }
});

export const Camp = mongoose.model('Camp', CampSchema);
