# 📦 CepHub

**CepHub** é um microserviço de borda desenvolvido em **NestJS** que fornece uma camada intermediária para consulta de CEPs brasileiros. Ele primeiro verifica se o CEP está salvo localmente no banco de dados e, se não estiver, busca na API externa [ViaCEP](https://viacep.com.br/) e salva o resultado na base interna, otimizando a performance e reduzindo dependência externa.

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Axios](https://axios-http.com/)
- [Swagger](https://swagger.io/) (documentação automática)

---

## ⚙️ Funcionalidades

- ✅ Validação e normalização de CEPs
- ✅ Consulta local no banco de dados
- ✅ Fallback automático para API ViaCEP
- ✅ Salvamento automático do retorno da API externa
- ✅ Listagem de todos os CEPs armazenados
- ✅ Documentação via Swagger

---

## 🔗 Rotas disponíveis

### `GET /ceps`
Retorna todos os CEPs armazenados localmente.

### `GET /ceps/:cep`
Consulta um CEP. Primeiro na base local, e se não existir, consulta na API externa e salva localmente.

---

## 🛠️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/CepHub.git
cd CepHub

👨‍💻 Autor
Desenvolvido com 💻 por Julio Junior
