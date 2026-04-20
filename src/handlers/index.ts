import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import slug from 'slug';
import User from "../models/User";
import { hashPassword, checkPassword } from '../utils/auth';

export const createAccount = async (req: Request, res: Response) => {
    //Manage errors:
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password } = req.body; 

    const userExists = await User.findOne({ email });

    if (userExists) { //debería usarlo si ya tengo validadores en router?
        const error = new Error('There is already a user registered with that email.')
        return res.status(409).json({ error: error.message })
    }
    
    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({ handle });

    if (handleExists) {
        const error = new Error('There is already a user registered with that Username.')
        return res.status(409).json({ error: error.message })
    }

    console.log(req.body);

    // We can select between this two seentes for create and insert data:
    // Only one sentence:
    //await User.create(req.body);

    // Or with two senteces:
    const user = new User(req.body); //1
    user.password = await hashPassword(password);
    user.handle = handle;
    
    await user.save(); //2

    res.status(201).send('The register was created successfully!...');
}

export const login = async (req: Request, res: Response) => {
    //Managing errors:
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    //Check if the user exists:
    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error('There is no user registered with that email.')
        return res.status(404).json({ error: error.message })
    }

    //Check if the password is correct:
    const isPasswordCorrect = await checkPassword(password, user.password);
    console.log(isPasswordCorrect); 
    if (!isPasswordCorrect) {
        const error = new Error('The password is incorrect.')
        return res.status(401).json({ error: error.message })
    }

    res.json({ "msg" : "Login successful!" });
}