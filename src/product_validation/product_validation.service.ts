// product-validation.service.ts
import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ProductValidationService {
  constructor(private readonly httpService: HttpService) {}

  async validateProducts(products: any[]): Promise<any[]> {
    const validatedProducts = [];

    for (const product of products) {
      const productDetails = await this.getProductDetails(product.id);

      // Add your validation logic here
      if (productDetails.valid) {
        validatedProducts.push(product);
      }
    }

    return validatedProducts;
  }

  async getProductDetails(productId: string): Promise<any> {
    const response = await this.httpService.get(`http://your-other-service.com/products/${productId}`).toPromise();
    return response.data;
  }
}
