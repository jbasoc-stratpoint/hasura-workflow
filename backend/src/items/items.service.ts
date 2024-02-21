import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemsRepository } from 'src/__common__/repositories/items.repository';
import { IItems } from 'src/__common__/interfaces';
import { IService } from 'src/__common__/interfaces/services/__service.interface';


@Injectable()
export class ItemsService implements IService<IItems> {
  constructor(private readonly itemsRepository: ItemsRepository) { }

  public async findById(id: number): Promise<IItems> {
    const item = await this.itemsRepository.findById(id);

    if (!item) {
      throw new NotFoundException('Item not found.');
    }

    return item;
  }

  public async findAll(query: Partial<IItems>): Promise<IItems[]> {
    const items = await this.itemsRepository.findAll(query);

    return items;
  }

  public async create(body: Partial<IItems>): Promise<IItems> {
    return await this.itemsRepository.create(body);
  }

  public async update(id: number, body: Partial<IItems>): Promise<IItems> {
    return await this.itemsRepository.update(id, body);
  }

  public async delete(id: number): Promise<IItems> {
    return await this.itemsRepository.destroy(id);
  }
}
