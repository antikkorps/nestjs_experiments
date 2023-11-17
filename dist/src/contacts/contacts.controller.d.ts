import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        purpose: string;
        message: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        purpose: string;
        message: string;
    }>;
}
