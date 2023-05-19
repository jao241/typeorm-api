import { Course } from '../courses/entities/course.entity';
import { Tag } from '../courses/entities/tag.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceTestOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'docker',
  database: 'dbtest',
  entities: [Course, Tag],
  migrations: ['dist/migrations/*.js'],
  logging: 'all',
};

const dataSource = new DataSource(dataSourceTestOptions);

export default dataSource;
