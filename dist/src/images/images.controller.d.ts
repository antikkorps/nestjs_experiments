/// <reference types="multer" />
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(userId: number, createImageDto: CreateImageDto): Promise<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }>;
    uploadFile(file: Express.Multer.File, userId: number, createImageDto: CreateImageDto): Promise<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ImageClient<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateImageDto: UpdateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ImageClient<{
        id: number;
        name: string;
        url: string;
        featuredImage: boolean;
        AnnonceId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
