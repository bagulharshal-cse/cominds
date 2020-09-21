import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from './configuration/configuration.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ConfigurationModule } from './configuration/configuration.module';
const configuration = new ConfigurationService(`${process.cwd()}/.env`);

@Module({
  imports: [
    MongooseModule.forRoot(configuration.get('MONGO_URI'), {
      useFindAndModify: false,
    }),
    UsersModule,
    CoursesModule,
    ConfigurationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
