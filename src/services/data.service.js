import { User } from "../models/User.js";
import { FilesUtils } from "../utils/file.util.js";


export class DataService {
    static #pathFile = './src/data/data.json'
    static async readData() {
        try {
            console.log(`[INFO] comienza a leer archivo ubicado en ${this.#pathFile}`)

            const data = await FilesUtils.readFile(this.#pathFile)
            console.log(`[DEBUG] data recopilada con éxito`)

            return data
        } catch (error) {
            console.error('[ERROR] no se pudo leer la data del usuario', error)
            throw new Error('Error no pudimos leer la data del usuario', error)
        }
    }

    static async create(data) {
        try {
            console.log(`[INFO] comienza a leer archivo ubicado en ${this.#pathFile}`)
            await FilesUtils.pathEnsure(this.#pathFile)
            console.log(`[DEBUG] ruta asegurada`)

            const userData = User.create(data)

            console.log(`[INFO] leyendo data previa`)
            const previewData = await FilesUtils.readFile(this.#pathFile)
            console.log(`[INFO] data previa leida`, previewData);
            if(!previewData) {
                const dataFinal = [ userData.toObject() ]
                await FilesUtils.writeFile(this.#pathFile, dataFinal)
                return userData.toUserObject()
            }

            const updatedData = [...previewData, userData.toObject()]

            await FilesUtils.writeFile(this.#pathFile, updatedData)
            console.log(`[INFO] data creada con éxito`);
            return userData.toUserObject()
        } catch (error) {
            console.error('[ERROR] no pudimos crear el archivo', error)
            throw new Error('Error al crear el archivo')
        }
    }

    static async update(id, newData) {
        try {
            const previewData = await FilesUtils.readFile(this.#pathFile)
            const indexData = previewData.findIndex(data => data.id === id)

            if(indexData === -1) throw new Error('No pudimos encontrar la data')
            
            const dataUpdated = User.create({ ...newData, id })

            previewData[indexData] = dataUpdated.toObject()

            await FilesUtils.writeFile(this.#pathFile, previewData)
            return dataUpdated.toUserObject()
        } catch (error) {
            console.error("[ERROR] no pudimos actualizar el archivo", error);
            throw new Error("Error al actualizar el archivo");
        }
    }
}