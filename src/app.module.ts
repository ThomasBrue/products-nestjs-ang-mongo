import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      // 'mongodb+srv://kaiserkarl:7Katzenaugen@cluster0.29by76y.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
      'mongodb+srv://kaiserkarl:U1Sb2xeUuO7WtySD@cluster0.29by76y.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
