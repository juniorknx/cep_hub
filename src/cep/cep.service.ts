import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { validateCep } from './utils/validatecep';
import axios from 'axios';

@Injectable()
export class CepService {
    constructor(private readonly prisma: PrismaService) { }
    private readonly logger = new Logger(CepService.name);

    async findOne(cep: string) {
        const cepNumber = validateCep(cep)
        const localCep = await this.prisma.cep.findUnique({
            where: {
                cep: cepNumber,
            },
        })

        if (localCep) {
            this.logger.log(`[LOCAL] CEP ${cepNumber} encontrado na base de dados.`);
            return localCep;
        }

        const { data } = await axios.get(
            `${process.env.VIACEP_API}/${cepNumber}/json/`
        );

        if (data.erro) {
            throw new NotFoundException('Cep não encontrado na base externa.')
        }

        const newCep = await this.prisma.cep.create({
            data: {
                cep: cepNumber,
                logradouro: data.logradouro,
                complemento: data.complemento,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf,
                ibge: data.ibge,
                gia: data.gia,
                ddd: data.ddd,
                siafi: data.siafi,
            }
        });

        this.logger.log(`[SALVO] CEP ${cepNumber} salvo na base de dados após consulta externa.`)

        return newCep;
    }

    async findAll() {
        const cep = this.prisma.cep.findMany()
        return cep;
    }
}
