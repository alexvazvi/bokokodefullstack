import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}
    
    @Get()
    async getAllProducts(@Query('category') category?: string, @Query('orderBy') orderBy?: string) {
        return this.productService.getAllProducts(category, orderBy);
      }

    @Get(':id')
    async getProductById(@Param('id') id: string){
        return this.productService.getProductById(Number(id));
    }

    @Post()
    async createProduct(@Body() product: Product){
       return this.productService.createProduct(product);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() product: Product){
        return this.productService.updateProduct(Number(id), product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string){
        return this.productService.deleteProduct(Number(id));
    }
}
