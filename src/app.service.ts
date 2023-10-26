import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchHistory } from './db/entity/search.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(SearchHistory)
    private searchRepository: Repository<SearchHistory>,
  ) {}

  async get(): Promise<SearchHistory[]> {
    return await this.searchRepository.find();
  }

  async save(text: string): Promise<SearchHistory> {
    return await this.searchRepository.save({ text });
  }
}
