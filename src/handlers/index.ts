import { Request, Response } from 'express';
import User from "../models/User";
import { hashPassword } from '../utils/auth';

export const createAccount = async (req: Request, res: Response) => {
    const { email, password } = req.body; 

    const userExists = await User.findOne({ email });

    if (userExists) {
        const error = new Error('There is already a user registered with that email.')
        return res.status(409).json({ error: error.message })
    }
    
    // res.send('Desde register, lo envia res.send !... ');
    console.log('Desde register !... ');
    console.log(req.body);

    // We can select between this two seentes for create and insert data:
    // Only one sentence:
    //await User.create(req.body);

    // Or with two senteces:
    const user = new User(req.body);
    user.password = await hashPassword(password);
    await user.save();

    res.status(201).send('The register was created successfully!...');
}