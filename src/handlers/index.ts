import { Request, Response } from 'express';
import User from "../models/User";

export const createAccount = async (req: Request, res: Response) => {
    const { email } = req.body; 

    const userExists = User.findOne({ email });

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
    await user.save();

    res.status(201).send('The register was created successfully!...');
}