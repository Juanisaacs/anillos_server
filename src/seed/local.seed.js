const mongoose = require("mongoose");
const mongoDb = "mongodb+srv://root:root@cluster0.xw6wv.mongodb.net/anillos2?retryWrites=true&w=majority";
const LocalSchema = require("../api/local/local.models");
const locals = [
    {
     "id":1,
     "name":"Mordor",
     "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060786/Lord%20of%20the%20Ring/download_nj8an6.jpg"

    },
    {
     "id":2,
     "name":"la comarca",
     "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060935/Lord%20of%20the%20Ring/images_vgbvbv.jpg"
    },
    {
     "id":3,
     "name":"gondor",
     "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060982/Lord%20of%20the%20Ring/images_rkh2t5.jpg"
    },
    {
     "id":4,
     "name":"isengard",
     "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643061066/Lord%20of%20the%20Ring/images_gfzayg.jpg"
    },
    {
     "id":5,
     "name":"minas tirith",
     "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643061125/Lord%20of%20the%20Ring/images_ub0baz.jpg"
    }
];
  
  const localDocuments = locals.map((local) => new LocalSchema(local));
  mongoose
    .connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      const allLocal = await LocalSchema.find();
      if (allLocal.length) {
        await LocalSchema.collection.drop();
      }
    })
    .catch((err) => console.log(`Error deleting Locals: ${err}`))
    .then(async () => {
      await LocalSchema.insertMany(localDocuments);
      console.log("Local successfully created");
    })
    .catch((err) => console.log(`Error creating Locals: ${err}`))
    .finally(() => mongoose.disconnect());