import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ppqita:santri@ppqitadb.4jtlspc.mongodb.net/portal-karyawan",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
