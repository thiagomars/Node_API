import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers['authorization'];

    if (typeof authHeader !== 'string') {
        res.status(401).json({ error: 'Token não fornecido' });
        return;
    }

    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : authHeader;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token inválido' });
    }
};
