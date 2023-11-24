const fs = require("fs");
const path = require("path");

module.exports = {
  getData: (pathJson) => {
    const filePath = path.join(__dirname, pathJson);
    const jsonParseado = JSON.parse(
      fs.readFileSync(filePath, { encoding: "utf-8" })
    );
    return jsonParseado;
  },
  seveData: (paramToSave, pathToSave) => {
    const filePath = path.join(__dirname, pathToSave);
    const paramStringify = JSON.stringify(paramToSave, null, 4);
    fs.writeFileSync(filePath, paramStringify);
  },
};
