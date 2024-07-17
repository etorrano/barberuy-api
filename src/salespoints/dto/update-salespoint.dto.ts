import { PartialType } from '@nestjs/swagger';
import { CreateSalespointDto } from './create-salespoint.dto';

export class UpdateSalespointDto extends PartialType(CreateSalespointDto) {}
