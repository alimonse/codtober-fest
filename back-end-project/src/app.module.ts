import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaModule } from 'pizza/pizza.module';
import { PizzaEntity } from 'pizza/pizza.entity';

@Module({
  imports: [
    PizzaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 32769,      
      username: 'alimonse',
      password: '1234',
      database: 'pizza',
    //  dropSchema: true,
      entities: [PizzaEntity],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
