export const connection: any = {
  type: 'sqlite',
  database: ':memory:',
  name: 'default',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
