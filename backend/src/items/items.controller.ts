import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import {
  FindByIdDto,
  CreateDto,
  DeleteDto,
  UpdateBodyDto,
  UpdateIdDto,
} from './dto';
import { ItemResponse } from './responseMappers/item.response';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOkResponse({ type: [ItemResponse] })
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.itemsService.findAll({});
  }

  @Get(':id')
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async findById(@Param() params: FindByIdDto) {
    const { id } = params;
    return await this.itemsService.findById(id);
  }

  @Post()
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async create(@Body() body: CreateDto) {
    return await this.itemsService.create(body);
  }

  @Put(':id')
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async update(@Param() params: UpdateIdDto, @Body() body: UpdateBodyDto) {
    const { id } = params;
    return await this.itemsService.update(id, body);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async delete(@Param() params: DeleteDto) {
    const { id } = params;
    return await this.itemsService.delete(id);
  }
}
