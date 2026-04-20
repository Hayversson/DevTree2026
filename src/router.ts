import { Router } from 'express';
import { body } from 'express-validator';
import { createAccount, login } from './handlers';

const router = Router();

// Routing for authentication and register:
router.post('/auth/register', [
    body('handle')
        .notEmpty()
        .withMessage('The handle should not be empty'),
    body('name')
        .notEmpty()
    .withMessage('The name should not be empty'),
    body('email')
        .isEmail()
        .withMessage('email is not valid'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
], createAccount);

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('email is not valid'),
    body('password')
        .notEmpty()
        .withMessage('Password should not be empty'),
    login);
    

export default router;