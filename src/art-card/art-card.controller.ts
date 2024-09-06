import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ArtCardService } from './art-card.service';
import { ArtCardDto } from '../dto/art-card.dto';

@Controller('art-cards')
export class ArtCardController {
  constructor(private readonly artCardService: ArtCardService) {}

 
  @Get()
  findAll(): ArtCardDto[] {
    return this.artCardService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: number): ArtCardDto {
    const artCard = this.artCardService.findOne(+id); 
    if (!artCard) {
      throw new NotFoundException(`ArtCard com ID ${id} não encontrado`);
    }
    return artCard;
  }


  @Post()
  create(@Body() newArtCard: Omit<ArtCardDto, 'id' | 'createdAt'>): ArtCardDto {
    return this.artCardService.create(newArtCard);
  }


  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateArtCard: Omit<ArtCardDto, 'id' | 'createdAt'>,
  ): ArtCardDto {
    const updated = this.artCardService.update(+id, updateArtCard);
    if (!updated) {
      throw new NotFoundException(`ArtCard com ID ${id} não encontrado`);
    }
    return updated;
  }


  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    const success = this.artCardService.delete(+id);
    if (!success) {
      throw new NotFoundException(`ArtCard com ID ${id} não encontrado`);
    }
    return { message: `ArtCard com ID ${id} foi deletado` };
  }
}