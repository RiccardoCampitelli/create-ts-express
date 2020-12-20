const path = require("path");

const fse = require("fs-extra");

const cli = (args) => {
  console.log(__dirname, __filename, process.cwd());
  const currentDir = process.cwd();

  const folderDir = path.join(__dirname, "..", "boilerplate");

  fse.copy(folderDir, currentDir, console.log);
};

export { cli };
