import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
export const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()
console.log(db.data)

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= {}

