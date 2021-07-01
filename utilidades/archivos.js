const chalk = require("chalk");
const fs = require("fs");

const guardarSaludo = (nombre) => {
  const saludo = `Hola, ${nombre}. Encantado de saludarte.`;
  fs.writeFile("./textos/saludo.txt", saludo, (err) => {
    if (err) {
      console.log(chalk.red.bold("Se ha producido un fallo"));
      process.exit(1);
    }
  });
};

exports.guardarSaludo = guardarSaludo;
