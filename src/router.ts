import { Router } from 'express';
import User from './models/User';

const router = Router();

// Routing for authentication and register:
router.post('/auth/register', async (req, res) => {
    console.log('Desde register!...');
    console.log(req.body);

    // We can select between this two seentes for create and insert data:
    
    // Only one sentence:
    //await User.create(req.body);

    // or with two sentences:
    const user = new User(req.body);
    await user.save();

    res.send({ msg: 'User registered successfully!' });
});

export default router;