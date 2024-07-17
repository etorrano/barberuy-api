import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffservicesService } from './staffservices.service';
import { CreateStaffserviceDto } from './dto/create-staffservice.dto';
import { UpdateStaffserviceDto } from './dto/update-staffservice.dto';

@Controller('staffservices')
export class StaffservicesController {
  constructor(private readonly staffservicesService: StaffservicesService) {}

  @Post()
  create(@Body() createStaffserviceDto: CreateStaffserviceDto) {
    return this.staffservicesService.create(createStaffserviceDto);
  }

  @Get()
  findAll() {
    return this.staffservicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffservicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffserviceDto: UpdateStaffserviceDto) {
    return this.staffservicesService.update(+id, updateStaffserviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffservicesService.remove(+id);
  }
}
