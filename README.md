# API
Projeto criado para o teste técnico da [Mutant](https://mutantbr.com/).

## Tecnologias
- NodeJS
- ExpressJS
- Redis
- Axios

## Executando o projeto
1. Criar um arquivo .env com base no arquivo example.env
    ### Exemplo do arquivo
    ```
    PORT=3000
    NODE_ENV=development
    REDIS_EXPIRES=3600000
    REDIS_URL=redis://test_mutant_redis
    ```

    - `PORT`: Porta do servidor
    - `NODE_ENV`: Ambiente da aplicação
    - `REDIS_EXPIRES`: Tempo (em millisegundos) de expiração padrão do redis
    - `REDIS_URL`: URL do redis (URL deve ser igual ao nome do container, no caso `redis://test_rankmyapp_redis`)

2. Executar o projeto

    `docker-compose up`

## Documentação
Todas as rotas e exemplos da API estão na rota [localhost:3000/swagger](localhost:3000/swagger).

## Tem alguma dúvida ou sugestão?
Manda no [meu e-mail](mailto:wrickee@gmail.com)! xD
