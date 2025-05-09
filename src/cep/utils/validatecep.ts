import { BadRequestException } from "@nestjs/common";

export function validateCep(cep: string): string {
    const cleanCep = cep?.replace(/\D/g, '');
    if (cleanCep?.length !== 8) {
        throw new BadRequestException('CEP inválido. Deve conter exatamente 8 dígitos.');
    }
    return cleanCep;
}
