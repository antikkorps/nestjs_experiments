import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Delete,
  UseInterceptors,
  UseGuards,
  UploadedFile,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { jwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { multerOptions } from './options/multer.options';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // route: images/upload
  @UseGuards(jwtGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg, image/png' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @GetUser('id') userId: number,
    @Body() createImageDto: CreateImageDto,
  ) {
    const { AnnonceId } = createImageDto;
    const ImageDto: CreateImageDto = {
      name: file.originalname,
      url: file.path,
      featuredImage: false,
      AnnonceId: AnnonceId,
    };
    return this.imagesService.create(userId, ImageDto);
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}
