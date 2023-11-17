import { PrismaService } from '../prisma/prisma.service';
import { CreateHoraireDto } from './dto/create-horaire.dto';
import { UpdateHoraireDto } from './dto/update-horaire.dto';
export declare class HorairesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createHoraireDto: CreateHoraireDto): Promise<{
        id: number;
        jourDeLaSemaine: string;
        ouvertureAm: boolean;
        openingAm: string;
        closingAm: string;
        ouverturePm: boolean;
        openingPm: string;
        closingPm: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        jourDeLaSemaine: string;
        ouvertureAm: boolean;
        openingAm: string;
        closingAm: string;
        ouverturePm: boolean;
        openingPm: string;
        closingPm: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HoraireClient<{
        id: number;
        jourDeLaSemaine: string;
        ouvertureAm: boolean;
        openingAm: string;
        closingAm: string;
        ouverturePm: boolean;
        openingPm: string;
        closingPm: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateHoraireDto: UpdateHoraireDto): import(".prisma/client").Prisma.Prisma__HoraireClient<{
        id: number;
        jourDeLaSemaine: string;
        ouvertureAm: boolean;
        openingAm: string;
        closingAm: string;
        ouverturePm: boolean;
        openingPm: string;
        closingPm: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HoraireClient<{
        id: number;
        jourDeLaSemaine: string;
        ouvertureAm: boolean;
        openingAm: string;
        closingAm: string;
        ouverturePm: boolean;
        openingPm: string;
        closingPm: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
