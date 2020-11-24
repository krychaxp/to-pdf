const PDFMerger = require("pdf-merger-js");
const fs = require("fs");
const path = require("path");
var merger = new PDFMerger();

(async () => {
  console.log(process.cwd())
  fs.readdirSync(path.join(process.cwd(),"pdf-s")).forEach((v) => {
    merger.add(path.join(process.cwd(),"pdf-s", v));
  });
  await merger.save("merged-pdf.pdf"); //save under given name
})();
