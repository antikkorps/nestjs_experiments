import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnnonceModule } from './annonce/annonce.module';

@Module({
  imports: [AuthModule, UserModule, AnnonceModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
