import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
    private repo = new UserRepository();

    async register(name: string, email: string, password: string) {
        const exists = await this.repo.findByEmail(email);
        if (exists) throw new Error('Email já cadastrado');

        const hashed = await bcrypt.hash(password, 10);
        return this.repo.create({ name, email, password: hashed });
    }

    async login(email: string, password: string) {
        const user = await this.repo.findByEmail(email);
        if (!user) throw new Error('Usuário não encontrado');

        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error('Senha inválida');

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
        return { user, token };
    }

    async getAll() {
        return this.repo.findAll();
    }

    async getById(id: string) {
        return this.repo.findById(id);
    }

    async update(id: string, data: any) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        return this.repo.update(id, data);
    }

    async delete(id: string) {
        return this.repo.delete(id);
    }
}
