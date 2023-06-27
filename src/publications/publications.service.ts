import { Injectable } from '@nestjs/common';
import { Publication } from './models/publication.model';

@Injectable()
export class PublicationsService {
  async findAll(): Promise<Publication[]> {
    // To be implemented
    return [];
  }
}
