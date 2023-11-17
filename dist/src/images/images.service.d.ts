import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ImagesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, createImageDto: CreateImageDto): Promise<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ImageClient<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateImageDto: UpdateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ImageClient<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
