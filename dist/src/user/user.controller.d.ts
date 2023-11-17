import { UserService } from './user.service';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: User, email: string, role: string): {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        resetToken: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    };
    getAllUsers(): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        resetToken: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserById(userId: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        resetToken: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editUser(userId: string, dto: EditUserDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        resetToken: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(userId: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        resetToken: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
