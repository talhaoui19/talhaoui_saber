import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const models = mongoose.models;

const postSchema = new Schema({
  titleAr: {
    type: String,
    required: true,
  },
  titleEn: {
    type: String,
    required: true,
  },
  contentAr: {
    type: String,
    required: true,
  },
  contentEn: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const PostModal = models.Post || mongoose.model("Post", postSchema);

