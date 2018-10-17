import mongoose, { Schema } from 'mongoose';
const GeographySchema = Schema({
  position: String
});

export const Geography = mongoose.model('Geography', GeographySchema);
