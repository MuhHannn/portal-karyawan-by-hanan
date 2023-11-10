import mongoose from "mongoose";

export const connectionDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/karyawan', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }) 
    } catch (error) {
        console.log(error);
    }
  
  };