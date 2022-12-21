import { DataSource } from 'typeorm';
import { root } from "./paths";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: `${root}/data/test.sqlite`,
  entities: [ ],
  logging: true
});