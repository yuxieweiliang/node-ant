import mongoose from 'mongoose';

const Schema = mongoose.Schema;



// 阵营
const CampSchema = Schema({
  justice: {

  },
  evil: {

  }
});

export const Camp = mongoose.model('Camp', CampSchema);
