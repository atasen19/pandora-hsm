import { generateKeyPair } from '../src/generator.js'
import { generateCSR } from '../src/csr.js'

const { keys, session } = await generateKeyPair()
const csr = await generateCSR()
