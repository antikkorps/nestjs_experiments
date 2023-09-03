import { Module } from '@nestjs/common';
import { HorairesService } from './horaires.service';
import { HorairesController } from './horaires.controller';

@Module({
  controllers: [HorairesController],
  providers: [HorairesService],
})
export class HorairesModule {}
