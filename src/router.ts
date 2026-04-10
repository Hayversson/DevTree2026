import { Router } from 'express';
import { createAccount } from './handlers';

const router = Router();

// Routing for authentication and register:
router.post('/auth/register', createAccount);

export default router;