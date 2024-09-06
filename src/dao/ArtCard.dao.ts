import { Injectable } from '@nestjs/common';
import { ArtCardDto } from '../dto/art-card.dto';

@Injectable()
export class ArtCardDAO {
  private artCards: ArtCardDto[] = [];
  private idCounter = 1;

  findAll(): ArtCardDto[] {
    return this.artCards;
  }

  findOne(id: number): ArtCardDto | null {
    return this.artCards.find(card => card.id === id) || null;
  }

  create(newArtCard: Omit<ArtCardDto, 'id' | 'createdAt'>): ArtCardDto {
    const artCard: ArtCardDto = {
      id: this.idCounter++,
      createdAt: new Date(),
      ...newArtCard,
    };
    this.artCards.push(artCard);
    return artCard;
  }

  update(id: number, updateArtCard: Omit<ArtCardDto, 'id' | 'createdAt'>): ArtCardDto | null {
    const index = this.artCards.findIndex(card => card.id === id);
    if (index !== -1) {
      const updatedCard: ArtCardDto = {
        id,
        createdAt: this.artCards[index].createdAt,
        ...updateArtCard,
      };
      this.artCards[index] = updatedCard;
      return updatedCard;
    }
    return null;
  }

  delete(id: number): boolean {
    const index = this.artCards.findIndex(card => card.id === id);
    if (index !== -1) {
      this.artCards.splice(index, 1);
      return true;
    }
    return false;
  }
}
