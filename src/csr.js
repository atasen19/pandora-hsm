import openssl from 'openssl-nodejs'
import { execSync } from 'child_process'

async function generateCSR () {
  execSync('touch pandora.csr')
  try {
    openssl('req -nodes -new -days 365 -sha256 -config engine.conf -engine pkcs11 -keyform engine -key slot_81 -out pandora.csr')
  } catch (error) {
    console.error(error)
  }
}

export { generateCSR }
