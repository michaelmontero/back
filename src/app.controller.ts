import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchHistory } from './db/entity/search.entity';

@Controller()
@ApiTags('Search')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiOperation({ summary: 'Save a search history' })
  save(@Body() data: any): Promise<SearchHistory> {
    return this.appService.save(data.text);
  }

  @Get()
  @ApiOperation({ summary: 'Return search' })
  get(): Promise<SearchHistory[]> {
    return this.appService.get();
  }
}
