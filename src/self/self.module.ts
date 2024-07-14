import { Module } from '@nestjs/common';
import { SelfService } from './self.service';
import { SelfController } from './self.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Self } from './entities/self.entity';
import { SelfChild } from './entities/self-child.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Self, SelfChild])],
  controllers: [SelfController],
  providers: [SelfService],
})
export class SelfModule {}
