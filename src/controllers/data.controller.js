import { DataService } from "../services/data.service.js";

export class DataController {
    static async getAllData(req, res) {
        try {
            const data = await DataService.readData()

            res.status(200).json({
                message: 'Archivo leido con éxito',
                statusCode: 200,
                data
            })
        } catch (error) {
            res.status(404).json({
                message: 'No pudimos encontrar la data',
                statusCode: 404,
                error
            })
        }
    }

    static async create(req, res) {
        try {
            const data = await DataService.create(req.body)
            res.status(201).json({
                    message: 'Si se pudo burro',
                    statusCode: 201,
                    data
                }
            )
        } catch (error) {
            res.status(500).json({
                message: 'No se pudo crear la data',
                statusCode: 500,
                error
            })
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params

            const updatedData = await DataService.update(id, req.body)

            res.status(201).json({
                message: "Si se pudo burro",
                statusCode: 201,
                data: updatedData,
            });
        } catch (error) {
            res.status(500).json({
                message: "No se pudo actualizar la data",
                statusCode: 500,
                error,
            });
        }
    }
}