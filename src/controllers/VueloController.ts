import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import { VueloModel } from "../modelsNOSQL/Vuelo";

export default class VueloController extends AbstractController {
    //Singleton
    private static _instance: VueloController;
    public static get instance(): VueloController {
        return this._instance ||
            (this._instance = new this("Vuelo"));
    }

    protected initRoutes(): void {
        this.router.get('/listarVuelos',
            this.getListarVuelos.bind(this));
        this.router.post('/crearVuelo',
            this.postCrearVuelo.bind(this));
    }

    private async getListarVuelos(req: Request, res: Response): Promise<void> {
        try {
            const vuelos = await VueloModel.find().sort({ createdAt: -1 });
            res.status(200).json(vuelos);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    private async postCrearVuelo(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await VueloModel.create(req.body);
            res.status(200).json({ message: "Registro de vuelo exitoso" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
