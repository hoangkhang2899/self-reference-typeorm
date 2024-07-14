import { Injectable } from '@nestjs/common';
import { CreateSelfDto } from './dto/create-self.dto';
import { UpdateSelfDto } from './dto/update-self.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Self } from './entities/self.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SelfService {
  constructor(
    @InjectRepository(Self)
    private readonly selfRepository: Repository<Self>,
  ) {}
  async create(dto: Self) {
    const result = await this.selfRepository.save(dto);
    return result;
  }

  async findAll() {
    const result = await this.selfRepository.find({
      relations: {
        self_childs: true,
      },
    });
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} self`;
  }

  update(id: number, updateSelfDto: UpdateSelfDto) {
    return `This action updates a #${id} self`;
  }

  remove(id: number) {
    return `This action removes a #${id} self`;
  }
}
