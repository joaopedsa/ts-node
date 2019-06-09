import { Request, Response } from 'express'

import User from '../schemas/User'

class userController {

    public async index (req: Request,res: Response): Promise<Response> {
        const users = await User.find();
        return res.json(users);
    }

    public async test (req: Request,res: Response): Promise<Response> {
        return res.json({ test: 'Teste' });
    }
    
}

export default new userController()