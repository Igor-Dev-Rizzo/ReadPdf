const fs = require("fs");
const pdfparse = require("pdf-parse");

const arquivoPdf = fs.readFileSync("test.pdf");

pdfparse(arquivoPdf)
  .then(function (data) {
    console.log(data.text);
  })
  .catch(function (error) {
    console.log(error);
  });
