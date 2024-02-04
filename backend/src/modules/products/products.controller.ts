import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}
    
    @Get()
    async getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get(':id')
    async getProductById(@Param() id: String){
        return this.productService.getProductById(Number(id));
    }

    @Post()
    async createProduct(@Body() product: Product){
       return this.productService.createProduct(product);
    }

    @Put(':id')
    async updateProduct(@Param() id: String, @Body() product: Product){
        return this.productService.updateProduct(Number(id), product);
    }

    @Delete(':id')
    async deleteProduct(@Param() id: String){
        return this.productService.deleteProduct(Number(id));
    }
}
