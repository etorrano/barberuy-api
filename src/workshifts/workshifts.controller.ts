import { WorkshiftEntity } from "./entities/workshift.entity";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { WorkshiftsService } from "./workshifts.service";
import { CreateWorkshiftDto } from "./dto/create-workshift.dto";
import { UpdateWorkshiftDto } from "./dto/update-workshift.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@Controller("workshifts")
@ApiTags("workshifts")
export class WorkshiftsController {
  constructor(private readonly workshiftsService: WorkshiftsService) {}

  @Post()
  @ApiCreatedResponse({ type: WorkshiftEntity })
  create(@Body() createWorkshiftDto: CreateWorkshiftDto) {
    return this.workshiftsService.create(createWorkshiftDto);
  }

  @Get()
  @ApiOkResponse({ type: WorkshiftEntity, isArray: true })
  findAll() {
    return this.workshiftsService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: WorkshiftEntity })
  findOne(@Param("id") id: string) {
    return this.workshiftsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: WorkshiftEntity })
  update(
    @Param("id") id: string,
    @Body() updateWorkshiftDto: UpdateWorkshiftDto
  ) {
    return this.workshiftsService.update(+id, updateWorkshiftDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: WorkshiftEntity })
  remove(@Param("id") id: string) {
    return this.workshiftsService.remove(+id);
  }
}
