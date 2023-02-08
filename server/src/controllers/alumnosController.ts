import { Request, Response } from 'express';

import pool from '../database';

class AlumnosController {
    
    public async list (req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM ALUMNO');
        res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ALUMNO WHERE ID_ALUMNO = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({text: "The game doesn't exists"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO Alumnos set ?', [req.body]);
        res.json({message: 'Game Saved'});

    }

    public async update(req: Request, res: Response): Promise<void>{
        //res.json({text: 'updating a game ' + req.params.id });
        const { id } = req.params;
        await pool.query('UPDATE Alumnos set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The game was updated'});
    }


    public async delete(req: Request, res: Response): Promise<void> {
        //res.json({text: 'deleting a game ' + req.params.id });
        const { id } = req.params;
        await pool.query('DELETE FROM Alumnos WHERE id = ?', [id]);
        res.json({message: "The game was deleted"});
    }
}

const alumnosController = new AlumnosController();
export default alumnosController;