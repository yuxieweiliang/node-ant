import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GeographySchema = Schema({
  position: String
});

export const Geography = mongoose.model('Geography', GeographySchema);
