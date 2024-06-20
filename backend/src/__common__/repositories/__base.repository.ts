import { ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

export abstract class BaseRepository<TEntity> {
  protected readonly databaseService;

  constructor(protected readonly entityService) {
    this.databaseService = entityService;
  }

  public async create({ ...data }: Partial<TEntity>): Promise<TEntity> {
    const result = await this.databaseService
      .create({
        data,
      })
      .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Credentials incorrect');
          }
        }
        throw error;
      });

    return result;
  }

  public async findById(id: string | number): Promise<TEntity> {
    return await this.databaseService.findUnique({ where: { id } });
  }

  public async findByCondition({
    ...args
  }: Partial<TEntity>): Promise<TEntity> {
    return await this.databaseService.findFirst({
      where: { AND: { ...args } },
    });
  }

  public async findAll({ ...args }: Partial<TEntity> = {}): Promise<TEntity[]> {
    return await this.databaseService.findMany({ where: args });
  }

  public async findByIdV2(args) {
    return await this.databaseService.findUnique(args);
  }

  public async findByConditionV2(args) {
    return await this.databaseService.findFirst(args);
  }

  public async findAllV2(args) {
    return await this.databaseService.findMany(args);
  }

  public async aggregate(args) {
    return await this.databaseService.aggregate(args);
  }

  public async update(
    id: string | number,
    data: Partial<TEntity>,
  ): Promise<TEntity> {
    return await this.databaseService.update({
      where: { id },
      data,
    });
  }

  public async updateMany(
    { ...args }: Partial<TEntity>,
    data: Partial<TEntity>,
  ): Promise<TEntity> {
    return await this.databaseService.updateMany({
      where: {
        AND: {
          ...args,
        },
      },
      data,
    });
  }

  async softDelete(id: number): Promise<TEntity> {
    return await this.databaseService.update({
      where: id,
      data: {
        deletedAt: new Date(),
      },
    });
  }

  public async destroy(id: string | number): Promise<TEntity> {
    return await this.databaseService.delete({ where: { id } });
  }

  public destroySync(id: string): Promise<TEntity> {
    return this.databaseService.delete({ where: { id } });
  }
}
