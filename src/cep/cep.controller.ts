import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('ceps')
export class CepController {
    constructor(private readonly cepService: CepService) { }

    @Get(':cep')
    async getCep(@Param('cep') cep: string) {
        return this.cepService.findOne(cep);
    }

    @Get()
    findAll() {
        return this.cepService.findAll();
    }
}
