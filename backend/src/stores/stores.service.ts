import { Injectable, NotFoundException } from '@nestjs/common';
import { StoresRepository } from 'src/__common__/repositories/stores.repository';
import { IStores } from 'src/__common__/interfaces';

@Injectable()
export class StoresService {
  constructor(private readonly storesRepository: StoresRepository) { }

  public async findById(id: number): Promise<IStores> {
    const item = await this.storesRepository.findById(id);

    if (!item) {
      throw new NotFoundException('Item not found.');
    }

    return item;
  }

  public async findAll(query: Partial<IStores>): Promise<IStores[]> {
    const items = await this.storesRepository.findAll(query);

    return items;
  }

  public async create(body: Partial<IStores>): Promise<IStores> {
    return await this.storesRepository.create(body);
  }

  public async update(id: number, body: Partial<IStores>): Promise<IStores> {
    return await this.storesRepository.update(id, body);
  }

  public async delete(id: number): Promise<IStores> {
    return await this.storesRepository.destroy(id);
  }
}
