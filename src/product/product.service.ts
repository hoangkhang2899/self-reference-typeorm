import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: TreeRepository<Product>,
  ) {}
  async create(dto: Product) {
    const result = await this.productRepository.save(dto);
    return result;
  }

  async findAll() {
    const result = await this.productRepository.findTrees();
    return result;
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    const result = await this.productRepository.findDescendantsTree(product);
    return result;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
