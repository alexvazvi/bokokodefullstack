import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  private categoryType: string[] = [
    'people',
    'food',
    'landmarks',
    'pets',
    'premium',
    'cities',
    'nature',
  ];
  private OrderByValues: string[] = ['price', 'name', 'category'];

  constructor(private prismaService: PrismaService) {}

  async getAllProducts(
    category?: string,
    orderBy?: string,
    orderByDirection?: string,
    page?: number,
    itemsPerPage?: number,
  ): Promise<{
    products: Product[];
    totalCount: number;
    actualPage: number;
    totalPages: number;
    itemsPerPage: number;
  }> {
    // Para el paginador
    const totalCount = await this.prismaService.product.count({
      where: category ? { category: category } : {},
    });

    const totalPages = Math.ceil(totalCount / itemsPerPage );
    const actualPage = page;
    const skip = (actualPage - 1) * itemsPerPage ;

    const products = await this.prismaService.product.findMany({
      where: category ? { category: category } : {},
      orderBy:
        (orderBy && this.OrderByValues.includes(orderBy))
          ? {
              [orderBy]: 'asc',
            }
          : {},
      skip: skip,
      take: itemsPerPage,
    });

    return { products, totalCount, actualPage, totalPages, itemsPerPage };
  }

  async getProductById(id: number): Promise<Product> {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async createProduct(data: Product): Promise<Product> {
    return this.prismaService.product.create({
      data,
    });
  }

  async updateProduct(id: number, data: Product): Promise<Product> {
    return this.prismaService.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteProduct(id: number) {
    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
