import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAllProducts(
    @Query('category') category?: string,
    @Query('orderBy') orderBy?: string,
    @Query('orderByDirection') orderByDirection?: string,
    @Query('page') page?: number,
    @Query('itemsPerPage') itemsPerPage?: number,
  ) {
    return this.productService.getAllProducts(
      category,
      orderBy,
      orderByDirection,
      Number(page || 1),
      Number(itemsPerPage || 6),
    );
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }

  @Post()
  createProduct(@Body() product: Product) {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: Product) {
    return this.productService.updateProduct(Number(id), product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(Number(id));
  }
}
