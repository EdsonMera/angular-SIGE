import { Router } from 'express';
import asistenciasController from '../controllers/asistenciasController';

class AsistenciasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',asistenciasController.list);
        this.router.get('/:id',asistenciasController.getOne);
        this.router.post('/',asistenciasController.create);
        this.router.put('/:id',asistenciasController.update);
        this.router.delete('/:id',asistenciasController.delete);
    }
}

const asistenciasRoutes = new AsistenciasRoutes();
export default asistenciasRoutes.router;