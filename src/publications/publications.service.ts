import { Injectable } from '@nestjs/common';
import { Publication } from './models/publication.model';
import { publications } from '../../data/publications';

@Injectable()
export class PublicationsService {
  async findAll(): Promise<Publication[]> {
    return publications;
  }
}
