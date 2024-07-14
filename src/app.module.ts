import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelfModule } from './self/self.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'api.tuanvurental.vn',
      port: 5432,
      username: 'postgres',
      password: 'am6CnBvruToVtWRz',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SelfModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
