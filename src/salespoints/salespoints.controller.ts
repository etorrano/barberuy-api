import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalespointsService } from './salespoints.service';
import { CreateSalespointDto } from './dto/create-salespoint.dto';
import { UpdateSalespointDto } from './dto/update-salespoint.dto';

@Controller('salespoints')
export class SalespointsController {
  constructor(private readonly salespointsService: SalespointsService) {}

  @Post()
  create(@Body() createSalespointDto: CreateSalespointDto) {
    return this.salespointsService.create(createSalespointDto);
  }

  @Get()
  findAll() {
    return this.salespointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salespointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalespointDto: UpdateSalespointDto) {
    return this.salespointsService.update(+id, updateSalespointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salespointsService.remove(+id);
  }
}
