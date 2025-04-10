import { Router } from 'express';
import { UserService } from '../services/UserService';
import { authenticate } from '../../middlewares/auth';
import { validate } from '../../middlewares/validate';
import { registerUserSchema, loginUserSchema } from '../../validation/userValidation';

const router = Router();
const service = new UserService();

/**
 * @swagger
 * /users/get:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       401:
 *         description: Não autorizado
 */
router.get('/get', authenticate, async (req, res) => {
    const users = await service.getAll();
    res.json(users);
});

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Cadastrar novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: João da Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuário criado
 *       400:
 *         description: Erro de validação
 */
router.post('/register', validate(registerUserSchema), async (req, res) => {
    try {
        const user = await service.register(req.body.name, req.body.email, req.body.password);
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login do usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       400:
 *         description: Erro de autenticação
 */
router.post('/login', validate(loginUserSchema), async (req, res) => {
    try {
        const result = await service.login(req.body.email, req.body.password);
        res.json(result);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
