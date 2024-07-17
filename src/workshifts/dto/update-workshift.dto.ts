import { PartialType } from '@nestjs/swagger';
import { CreateWorkshiftDto } from './create-workshift.dto';

export class UpdateWorkshiftDto extends PartialType(CreateWorkshiftDto) {}
