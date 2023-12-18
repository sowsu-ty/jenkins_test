import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IconikModule } from './domains/iconik/iconik.module';
import { AuthModule } from './domains/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AssetsModule } from './domains/assets/assets.module';

@Module({
  imports: [IconikModule, AuthModule, AssetsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
