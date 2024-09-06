import { Module } from '@nestjs/common';
import { ArtCardService } from './art-card.service';
import { ArtCardController } from './art-card.controller';
import { ArtCardDAO } from '../dao/ArtCard.dao';

@Module({
  providers: [ArtCardService, ArtCardDAO], 
  controllers: [ArtCardController]
})
export class ArtCardModule {}
