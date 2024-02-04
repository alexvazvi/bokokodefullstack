import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsController } from './modules/products/products.controller';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
