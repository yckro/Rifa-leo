const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

async function main() {
    // 1. Cria usuários
    const user1 = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'senhaSegura123',  // Lembre-se de hashear a senha antes de usá-la em produção
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            password: 'senhaSegura456',
        },
    });

    // 2. Cria rifas
    const raffle1 = await prisma.raffle.create({
        data: {
            title: 'Rifa do Carro',
            description: 'Sorteio de um carro novo.',
            price: 100.00,
            totalTickets: 1000,
            soldTickets: 0,
            drawDate: new Date('2024-12-25'),
        },
    });

    const raffle2 = await prisma.raffle.create({
        data: {
            title: 'Rifa da Moto',
            description: 'Sorteio de uma moto esportiva.',
            price: 50.00,
            totalTickets: 500,
            soldTickets: 0,
            drawDate: new Date('2024-11-15'),
        },
    });

    // 3. Cria bilhetes para os usuários
    await prisma.ticket.createMany({
        data: [
            {
                raffleId: raffle1.id,
                userId: user1.id,
                ticketNumber: 123,
            },
            {
                raffleId: raffle1.id,
                userId: user2.id,
                ticketNumber: 124,
            },
            {
                raffleId: raffle2.id,
                userId: user1.id,
                ticketNumber: 200,
            },
        ],
    });

    console.log('Seed criado com sucesso!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
