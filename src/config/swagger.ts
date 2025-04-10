// import swaggerJsdoc from 'swagger-jsdoc';

// const swaggerOptions = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'API de Usuários - Node + MongoDB',
//             version: '1.0.0',
//         },
//         servers: [
//             {
//                 url: 'http://localhost:3000/api',
//             },
//         ],
//     },
//     apis: ['./src/api/controllers/*.ts'],
// };

// export const swaggerSpec = swaggerJsdoc(swaggerOptions);


import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuários - Node + MongoDB',
            version: '1.0.0',
            description: 'Documentação da API com autenticação JWT',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Insira o token JWT no formato: Bearer {seu_token}',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/api/controllers/*.ts'], // ou conforme seu path real
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
