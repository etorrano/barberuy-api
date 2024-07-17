import { PartialType } from '@nestjs/swagger';
import { CreateStaffserviceDto } from './create-staffservice.dto';

export class UpdateStaffserviceDto extends PartialType(CreateStaffserviceDto) {}
