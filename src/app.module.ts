import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobController } from "./job.controller";

@Module({
  imports: [],
  controllers: [AppController,JobController],
  providers: [AppService],
})
export class AppModule {}
