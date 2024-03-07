import { Controller, Get, Post, Delete, Put, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { StoresService } from './stores.service';
import { FindByIdDto, CreateDto, DeleteDto, UpdateBodyDto, UpdateIdDto } from './dto';
import { ItemResponse } from './responseMappers/store.response';

@Controller('stores')
export class StoresController {
  constructor(private readonly storeService: StoresService) { }

  @Get()
  @ApiOkResponse({ type: [ItemResponse] })
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.storeService.findAll({})
  }

  @Get(':id')
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async findById(@Param() params: FindByIdDto) {
    const { id } = params;
    return await this.storeService.findById(id);
  }

  @Post()
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async create(@Body() body: CreateDto) {
    return await this.storeService.create(body);
  }

  @Put(':id')
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async update(@Param() params: UpdateIdDto, @Body() body: UpdateBodyDto) {
    const { id } = params;
    return await this.storeService.update(id, body);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ItemResponse })
  @HttpCode(HttpStatus.OK)
  async delete(@Param() params: DeleteDto) {
    const { id } = params;
    return await this.storeService.delete(id);
  }
}
