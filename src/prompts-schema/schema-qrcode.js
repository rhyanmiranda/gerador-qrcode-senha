import chalk from "chalk";

const promptSchemaQRcode = [
  {
    name: "link",
    description: chalk.yellow(
      "Digite o link para gerar o QRCode: "
    )
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha como sera gerado o QRCODE : 1- normal ou 2- terminal"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic(
      "Escolha somente entre 1 e 2"
    ),
    required: true
  }
]

export default promptSchemaQRcode