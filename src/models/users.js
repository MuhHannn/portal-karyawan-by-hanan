import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    token: {
      type: String,
      default:'',
    }
  });

  let userModel;
  // fix overwrite user
  if (mongoose.models.Workers) {
    userModel = mongoose.model('Workers');
  } else {
    userModel = mongoose.model('Workers', userSchema);
  }

export default userModel