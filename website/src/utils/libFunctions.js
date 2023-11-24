const db = require("../database/models");
const funciones = require("./functions");

module.exports = {
  firstLetterUpperCase: (query) => {
    const upperCaseInput = query.charAt(0).toUpperCase() + query.slice(1);
    return upperCaseInput;
  },
  indexOne: (productId, products) => {
    const index = products.findIndex((prod) => {
      /*retorna el indice del elemento que cumple esa condicion*/
      return productId == prod.productId;
    });
    return index;
  },
  countImagesActives: (imagesInDb) => {
    let countImagesActives = 0;
    for (let i = 0; i < imagesInDb.length; i++) {
      if (imagesInDb[i].active == 1) {
        countImagesActives++;
      }
    }
    return countImagesActives;
  },

  dataImages: (files) => {
    //files me devuelve un array de objetos con todos los datos de las fotos de multer
    //creo la estructura que hay en mi db y le asigno los datos que van llegando por multer
    const array = [];
    for (let file of files) {
      const obj = {};
      (obj.filename = file.filename),
        (obj.format = funciones.extractFormat(file.path)),
        (obj.active = 1);
      array.push(obj);
    }
    return array;
  },
  materialAndSize: async () => {
    const data = [];
    const sizes = await db.Size.findAll({
      raw: true,
      nest: true,
    });
    const materials = await db.Material.findAll({
      raw: true,
      nest: true,
    });
    data.push(sizes);
    data.push(materials);
    return data;
  },
};
