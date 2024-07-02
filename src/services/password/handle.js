import permittedCharacters from "./utils/permitted-characters.js"

async function handle (err, result){
  if(err) console.log(err.message)
    
  let characters = []
  let password = ""

  const passwordLength = process.env.PASSWORD_LENGTH
  
  characters = await permittedCharacters()

  for(let i = 0; i < passwordLength; i++){
    const index = Math.floor(Math.random() * characters.length) // sortear entre os elementos presentes
    password += characters[index]
  }

  return password
}

export default handle