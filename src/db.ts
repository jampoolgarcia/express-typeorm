import { DataSource } from 'typeorm';
import { root } from "./paths";
import { User } from './models/user.entity';

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: `${root}/data/test.sqlite`,
  entities: [ User ],
  logging: true
});