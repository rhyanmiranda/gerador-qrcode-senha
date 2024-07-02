import chalk from "chalk"

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Selecione 1 ( para gerar QRCode ) ou 2 ( para gerar uma senha segura )"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic(
      "Escolha somente entre 1 e 2"
    ),
    required: true
  },
]

export default promptSchemaMain