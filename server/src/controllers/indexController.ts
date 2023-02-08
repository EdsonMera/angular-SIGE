import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.send('API is /api/games');
    }
}

export const indexController = new IndexController();
