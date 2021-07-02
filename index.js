const program = require("commander");
const { guardarSaludo } = require("./utilidades/archivos");
const chalk = require("chalk");

program.option("-n, --nombre <nombre>", "Nombre para saludar");
program.parse();

const options = program.opts();

if (options.nombre) {
  guardarSaludo(options.nombre);
} else {
  console.log(chalk.yellow("No se ha recibido ningún nombre"));
  process.exit(1);
}
