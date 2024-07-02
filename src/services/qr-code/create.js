import prompt from "prompt"
import promptSchemaQRcode from "../../prompts-schema/schema-qrcode.js"
import handle from "./handle.js"


async function createQRcode(){
  prompt.get(promptSchemaQRcode, handle)

  prompt.start()
}

export default createQRcode
