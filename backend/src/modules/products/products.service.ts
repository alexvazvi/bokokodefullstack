import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  private categoryType: string[] = ["people", "food", "landmarks", "pets", "premium", "cities", "nature"]
  private OrderByValues: string[] = ['price', 'name', 'category'];

  
  constructor(private prismaService: PrismaService) {}

  getAllProducts(category?: string, orderBy?: string): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where: category ? { category: category } : {},
      orderBy: orderBy && this.OrderByValues.includes(orderBy) ? { [orderBy]: 'asc' } : {},
    });
  }

  getProductById(id: number): Promise<Product> {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  createProduct(data: Product): Promise<Product> {
    return this.prismaService.product.create({
      data,
    });
  }

  updateProduct(id: number, data: Product): Promise<Product> {
    return this.prismaService.product.update({
      where: {
        id,
      },
      data,
    });
  }

  deleteProduct(id: number) {
    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
