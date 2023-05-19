import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CoursesModule } from '../../src/courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceTestOptions } from '../../src/db/data-source-test';
import { CreateCourseDto } from '../../src/courses/dto/create-course.dto';

describe('Courses: /courses', () => {
  let app: INestApplication;

  const course: CreateCourseDto = {
    name: 'NestJS com TypeORM',
    description: 'Criando API Restfull com NestJS',
    tags: [
      'nestjs',
      'typeorm',
      'nodejs',
      'typescript'
    ]
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoursesModule, TypeOrmModule.forRoot(dataSourceTestOptions)],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Get All Courses /courses', () => {
    return request(app.getHttpServer())
      .get('/courses')
      .expect(HttpStatus.OK);
  });

  // it('Create POST /courses', () => {
  //   return request(app.getHttpServer())
  //     .post('/courses')
  //     .send(course)
  //     .expect(HttpStatus.CREATED)
  // });
});
