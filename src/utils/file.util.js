import fs from 'fs/promises' // File System -> Módulo nativo de node que permite gestionar archivos
import path from 'path'

export class FilesUtils {
    static async readFile(pathFile) {
        try {
            const data = await fs.readFile(pathFile, 'utf-8') //Esto trae el archivo
            return JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') return false

            console.error('[ERROR] no se pudo leer el archivo', error)
            throw new Error('Error al leer el arhivo', error)
        }
    }

    static async writeFile(pathFile, data) {
        try {
            await fs.writeFile(pathFile, JSON.stringify(data), 'utf-8')
        } catch (error) {
            console.error('[ERROR] no pudimos escribir el archivo')
            throw new Error('Error al escribir el archivo')
        }
    }

    static async pathEnsure(pathFile) {
        try {
            const file = path.dirname(pathFile)
            await fs.mkdir(file, { recursive: true }) // mkdir recursive true -> Revisar si la carpeta existe, si no la crea
        } catch (error) {
            console.error('[ERROR] error al asegurar la ruta', error)
            throw new Error(`Error al asegurar la ruta: ${error}`)
        }
    }
}
