import { Module } from '@nestjs/common';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CepController],
  providers: [CepService, PrismaService]
})
export class CepModule {}
