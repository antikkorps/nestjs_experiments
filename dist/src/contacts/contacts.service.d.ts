import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContactDto: CreateContactDto): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        purpose: string;
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        purpose: string;
        message: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        purpose: string;
        message: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        purpose: string;
        message: string;
    }>;
}
