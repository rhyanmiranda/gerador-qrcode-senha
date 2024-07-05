# QR Code Generator and Random Password Generator

Este é um projeto em Node.js que permite ao usuário escolher entre gerar um QR Code a partir de um link fornecido ou gerar uma senha aleatória. 

## Funcionalidades

1. Gerar um QR Code a partir de um link fornecido pelo usuário.
2. Gerar uma senha aleatória.

## Dependências

- [chalk](https://www.npmjs.com/package/chalk) - Biblioteca para estilização de texto no terminal.
- [prompt](https://www.npmjs.com/package/prompt) - Biblioteca para coleta de entradas do usuário no terminal.
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) - Biblioteca para geração de QR Codes no terminal.

## Instalação

1. Clone este repositório:
    ```sh
    git clone https://github.com/rhyanmiranda/gerador-qrcode-senha.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd gerador-qrcode-senha
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Execute o script principal:
    ```sh
    npm run dev
    ```
2. Siga as instruções no terminal:
    - Digite `1` para gerar um QR Code a partir de um link fornecido.
    - Digite `2` para gerar uma senha aleatória.
      
3. Se quiser alterar as configurações da geração de senha aletória:
    - Alterar as opções no arquivo .env

## Exemplo de Uso

```sh
$ node index.js
Escolha uma opção:
1. Gerar QR Code a partir de um link
2. Gerar senha aleatória


