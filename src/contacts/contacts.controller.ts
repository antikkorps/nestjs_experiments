import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { jwtGuard } from '../auth/guard';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // endpoint contacts/new
  @Post('new')
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  // endpoint contacts/all
  @UseGuards(jwtGuard)
  @Get('all')
  findAll() {
    return this.contactsService.findAll();
  }

  //endpoint contacts/:id
  @UseGuards(jwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(+id);
  }
  @UseGuards(jwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(+id);
  }
}
