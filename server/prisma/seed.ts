import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()

async function main() {

    const user = await prisma.user.create({
        data:{
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            avatarUrl: 'https://github.com/lucas-mateus.png',
        }
    })

    const pool = await prisma.pool.create({
        data:{
            title: 'Bolao do Brasa',
            code: 'BRASA01',
            ownerId: user.id,

            participants:{
                create:{
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'DE',
            date: '2022-11-24T16:00:00.601Z'
        }
    })

    await prisma.game.create({
        data: {
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',
            date: '2022-11-26T16:00:00.601Z',


            
            guesses:{
                create:{
                    firstTeamPoints:4,
                    secondTeamPoints: 1,
                    
                    participant:{
                        connect:{
                            userId_poolId:{
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    })
    
}

main()