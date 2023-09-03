import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnnonceModule } from './annonce/annonce.module';
import { PrismaModule } from './prisma/prisma.module';
import { AnnoncesModule } from './annonces/annonces.module';
import { ContactsModule } from './contacts/contacts.module';
import { ImagesModule } from './images/images.module';
import { HorairesModule } from './horaires/horaires.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    AnnonceModule,
    PrismaModule,
    AnnoncesModule,
    ContactsModule,
    ImagesModule,
    HorairesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
