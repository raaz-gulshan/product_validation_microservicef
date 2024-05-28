// product-validation.module.ts
import { Module } from '@nestjs/common';
import { ProductValidationController } from './product_validation.controller';
import { ProductValidationService } from './product_validation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ProductValidationController],
  providers: [ProductValidationService],
})
export class ProductValidationModule {}
