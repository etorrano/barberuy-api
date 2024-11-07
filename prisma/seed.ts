import { PrismaClient } from "@prisma/client";
import { UserRole } from "../src/auth/auth.model";
import { Days } from "../src/workshifts/workshift.model";
const prisma = new PrismaClient();
async function main() {
  const carlos = await prisma.user.upsert({
    where: { email: "carlos@barber.uy" },
    update: {},
    create: {
      email: "carlos@barber.uy",
      name: "Carlos",
      password: "123",
      role: UserRole.STAFF,
      staff: {
        create: {
          workshifts: {
            create: [
              {
                days: [
                  Days.MONDAY,
                  Days.TUESDAY,
                  Days.WEDNESDAY,
                  Days.THURSDAY,
                  Days.FRIDAY,
                ] as Days[],
                startTime: "09:00",
                endTime: "18:00",
              },
            ],
          },
        },
      },
    },
  });

  const salesPoint = await prisma.salesPoint.create({
    data: {
      name: "BarberUY Parque Batlle",
      street: "Bvar. Artigas",
      streetNumber: "2024",
      company: {
        create: {
          name: "BarberUY",
          companyName: "BarberUY S.A.",
          RUT: 12345678,
          business: {
            create: {
              name: "Servicios Tecnológicos",
              key: "ServTec 21",
            },
          },
        },
      },
    },
  });

  const alicia = await prisma.user.upsert({
    where: { email: "alicia@barber.uy" },
    include: {
      admin: true,
    },
    update: {},
    create: {
      email: "alicia@barber.uy",
      name: "Alice",
      password: "123",
      role: UserRole.ADMIN,
      admin: {
        create: {
          salesPoints: {
            connect: [{ id: salesPoint.id }],
          },
        },
      },
    },
  });

  const service = await prisma.service.create({
    data: {
      key: "Servicio_1",
      name: "Corte Bigote",
      cost: 200,
      duration: 1000 * 60 * 5,
      salespoints: { connect: [salesPoint] },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
