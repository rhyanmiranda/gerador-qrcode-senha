import prompt from "prompt"
import promptSchemaMain from "./prompts-schema/schema-main.js"
import createQRcode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

async function main(){
  prompt.get(promptSchemaMain, async (err, choose) => {
    if(err) console.log(err.message)

    if(choose.select == 1) await createQRcode()
    
    if(choose.select == 2) await createPassword()

  })

  prompt.start()
}

main()
