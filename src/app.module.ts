import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connection } from './db/connection';
import { SearchHistory } from './db/entity/search.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(connection),
    TypeOrmModule.forFeature([SearchHistory]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
