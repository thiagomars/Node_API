import { UserModel } from '../models/User';

export class UserRepository {
    async findAll() {
        return UserModel.find();
    }

    async findById(id: string) {
        return UserModel.findById(id);
    }

    async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    async create(data: { name: string, email: string, password: string }) {
        return UserModel.create(data);
    }

    async update(id: string, data: Partial<{ name: string, email: string, password: string }>) {
        return UserModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return UserModel.findByIdAndDelete(id);
    }
}
