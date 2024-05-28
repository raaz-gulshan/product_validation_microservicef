// product-validation.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ProductValidationService } from './product_validation.service';

@Controller('product-validation')
export class ProductValidationController {
  constructor(private readonly productValidationService: ProductValidationService) {}

  @Post('validate')
  async validateProducts(@Body() products: any[]): Promise<any[]> {
    return this.productValidationService.validateProducts(products);
  }
}
