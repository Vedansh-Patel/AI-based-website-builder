// Basic seed script placeholder for Prisma
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function main() {
  await db.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: { email: 'demo@example.com', name: 'Demo User' }
  })
  console.log('Seed completed')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => process.exit())
