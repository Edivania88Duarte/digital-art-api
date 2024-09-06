import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtCardModule } from './art-card/art-card.module';

@Module({
  imports: [ArtCardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
