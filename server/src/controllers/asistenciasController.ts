import { Request, Response } from 'express';

import pool from '../database';

class UsuariosController {
    
    public async list (req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM ASISTENCIA JOIN ALUMNO ON ASISTENCIA.ID_ALUMNO=ALUMNO.ID_ALUMNO');
        res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; 
        const games = await pool.query('SELECT * FROM USUARIO WHERE ID_USUARIO = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({text: "El usuario no existe"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO Usuarios set ?', [req.body]);
        res.json({message: 'Usuario guardado'});

    }

    public async update(req: Request, res: Response): Promise<void>{
        //res.json({text: 'updating a game ' + req.params.id });
        const { id } = req.params;
        await pool.query('UPDATE Usuarios set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Usuario actualizado'});
    }


    public async delete(req: Request, res: Response): Promise<void> {
        //res.json({text: 'deleting a game ' + req.params.id });
        const { id } = req.params;
        await pool.query('DELETE FROM Usuarios WHERE id = ?', [id]);
        res.json({message: "Usuario eliminado"});
    }
}

const usuariosController = new UsuariosController();
export default usuariosController;