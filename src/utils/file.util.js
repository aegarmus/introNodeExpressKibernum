import fs from 'fs/promises' // File System -> Módulo nativo de node que permite gestionar archivos

export class FilesUtils {
    static async readFile(pathFile) {
        try {
            const data = await fs.readFile(pathFile) //Esto trae el archivo
            return JSON.parse(data)
        } catch (error) {
            console.error('[ERROR] no se pudo leer el archivo', error)
            throw new Error('Error al leer el arhivo', error)
        }
    }
}
