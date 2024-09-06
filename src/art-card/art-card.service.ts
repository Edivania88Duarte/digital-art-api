import { Injectable } from '@nestjs/common';
import { ArtCardDto } from '../dto/art-card.dto';
import { ArtCardDAO } from '../dao/ArtCard.dao';

@Injectable()
export class ArtCardService {
  constructor(private readonly artCardDAO: ArtCardDAO) {}

  findAll(): ArtCardDto[] {
    return this.artCardDAO.findAll();
  }

  findOne(id: number): ArtCardDto | null {
    return this.artCardDAO.findOne(id); // Atualize o método `findOne` no DAO
  }

  create(newArtCard: Omit<ArtCardDto, 'id' | 'createdAt'>): ArtCardDto{
    return this.artCardDAO.create(newArtCard);
  }

  update(id: number, updateArtCard: Omit<ArtCardDto, 'id' | 'createdAt'>): ArtCardDto | null {
    return this.artCardDAO.update(id, updateArtCard);
  }

  delete(id: number): boolean {
    return this.artCardDAO.delete(id);
  }
}
