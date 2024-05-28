import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductValidationController } from './product_validation/product_validation.controller';
import { ProductValidationService } from './product_validation/product_validation.service';
import { ProductValidationModule } from './product_validation/product_validation.module';

@Module({
  imports: [ProductValidationModule],
  controllers: [AppController, ProductValidationController],
  providers: [AppService, ProductValidationService],
})
export class AppModule {}
