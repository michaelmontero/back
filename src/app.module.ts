import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connection } from './db/connection';

@Module({
  imports: [TypeOrmModule.forRoot(connection)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
