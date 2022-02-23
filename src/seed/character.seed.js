const mongoose = require("mongoose");
const mongoDb = "mongodb+srv://root:root@cluster0.xw6wv.mongodb.net/anillos2?retryWrites=true&w=majority";
const CharacterSchema = require("../api/characters/character.models");
const characters =[
    {
        
        "name": "Legolas",
        "origin": "Council of Elrond in Rivendell",
        "arma":"arco",
        "tipo": "elfo",
        "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643059848/Lord%20of%20the%20Ring/legolas_mxz0zy.jpg"
         
    },
    {
        
        "name": "golum",
        "origin": "la comarca",
        "arma": "doble personalidad",
        "tipo": "mediano",
        "image": "https://res.cloudinary.com/dn0bflwpm/image/upload/v1643059968/Lord%20of%20the%20Ring/download_fusrmu.jpg"
    },
    {
      
        "name":"aragorn",
        "origin": "gondor",
        "arma": "espada",
        "tipo": "humano",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060061/Lord%20of%20the%20Ring/download_oz0nfg.jpg"

    },
    {
        
        "name":"frodo",
        "origin": "la comarca",
        "arma": "espada",
        "tipo": "mediano",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060117/Lord%20of%20the%20Ring/download_iw4r5d.jpg"

    },
    {
        
        "name":"gimli",
        "origin": "las montañas azules",
        "arma": "hacha",
        "tipo": "enano",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060212/Lord%20of%20the%20Ring/download_lcs7eq.jpg"

    },
    {
       
        "name":"saurom",
        "origin": "creacion de arda",
        "arma": "espiritu",
        "tipo": "elfo",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060285/Lord%20of%20the%20Ring/download_opaqbw.jpg"
    },
    {
       
        "name":"saruman",
        "origin": "isengar",
        "arma":"mago",
        "tipo": "humano",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060392/Lord%20of%20the%20Ring/download_n09ww6.jpg"
    },
    {
       
        "name":"boromir",
        "origin": "gondor",
        "arma":"espada",
        "tipo":"humano",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060456/Lord%20of%20the%20Ring/download_pjsajh.jpg"
    },
    {
       
        "name":"arwen",
        "origin": "minas tirith",
        "arma":"arco",
        "tipo": "elfo",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060545/Lord%20of%20the%20Ring/download_ppoi51.jpg"
    },
    {
        
        "name":"orco",
        "origin": "Mordor",
        "arma":"espada",
        "tipo": "elfo",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060629/Lord%20of%20the%20Ring/download_bj2zuf.jpg"
    },
    {
        
        "name":"gandalf",
        "origin":"Mordor",
        "arma":"mago",
        "tipo": "humano",
        "image":"https://res.cloudinary.com/dn0bflwpm/image/upload/v1643060702/Lord%20of%20the%20Ring/download_sb5taj.jpg"
    }
];
  
  const characterDocuments = characters.map((character) => new CharacterSchema(character));
  mongoose
    .connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      const allCharacter = await CharacterSchema.find();
      if (allCharacter.length) {
        await CharacterSchema.collection.drop();
      }
    })
    .catch((err) => console.log(`Error deleting Characters: ${err}`))
    .then(async () => {
      await CharacterSchema.insertMany(characterDocuments);
      console.log("Character successfully created");
    })
    .catch((err) => console.log(`Error creating Characters: ${err}`))
    .finally(() => mongoose.disconnect());