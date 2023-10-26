export const connection: any = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  schema: process.env.POSTGRES_DEFAULT_SCHEMA,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: true, // Enable for tech meeting porpuse...
  entities: [
    `${__dirname}/entity/*.entity{.ts,.js}`,
    `${__dirname}/../auth-guard/db/entity/*.entity{.ts,.js}`,
  ],
};
