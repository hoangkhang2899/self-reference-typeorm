import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SelfService } from './self.service';
import { CreateSelfDto } from './dto/create-self.dto';
import { UpdateSelfDto } from './dto/update-self.dto';
import { Self } from './entities/self.entity';

@Controller('self')
export class SelfController {
  constructor(private readonly selfService: SelfService) {}

  @Post()
  create(@Body() dto: Self) {
    return this.selfService.create(dto);
  }

  @Get()
  findAll() {
    return this.selfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.selfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSelfDto: UpdateSelfDto) {
    return this.selfService.update(+id, updateSelfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.selfService.remove(+id);
  }
}
