export interface IService<TEntity> {
  findById(id: number): Promise<TEntity>;
  findAll(query: Partial<TEntity>): Promise<TEntity[]>;
  create(body: Partial<TEntity>): Promise<TEntity>;
  update(id: number, body: Partial<TEntity>): Promise<TEntity>;
  delete(id: number): Promise<TEntity>;
}
