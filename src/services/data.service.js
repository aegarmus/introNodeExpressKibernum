import { FilesUtils } from "../utils/file.util.js";


export class DataService {

    static async readData() {
        try {
            const PATH = './src/data/data.json'
            console.log(`[INFO] comienza a leer archivo ubicado en ${PATH}`)

            const data = await FilesUtils.readFile(PATH)
            console.log(`[DEBUG] data recopilada: ${data}`)

            return data
        } catch (error) {
            console.error('[ERROR] no se pudo leer la data del usuario', error)
            throw new Error('Error no pudimos leer la data del usuario', error)
        }
    }
}