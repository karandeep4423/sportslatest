import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sport:{
    type:String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location:{
    type:String,
    required: true,
  },
  date:{
    type:String,
    required:true,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  numberOfPlayer:{
    type: Number,
    required: true,
  },
  imageData:{
    type:String,
  },
  comments: [
    {
      comment: {
        type: String,
        required: true,
      },
      postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  joinEvent: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },  
  ],


});
export default mongoose.model("Event", EventSchema);
