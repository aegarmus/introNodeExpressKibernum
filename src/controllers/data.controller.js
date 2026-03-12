import { DataService } from "../services/data.service.js";

export class DataController {
    static async getAllData(req, res) {
        try {
            const data = await DataService.readData()
            console.log(data)

            res.status(200).json({
                message: 'Archivo leido con éxito',
                statusCode: 200,
                data
            })
        } catch (error) {
            res.status(500).json({
                message: 'No pudimos leer el archivo',
                statusCode: 500,
                error
            })
        }
    }
}