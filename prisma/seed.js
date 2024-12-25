const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'tony.stark@marvel.com', name: 'Tony Stark (Iron Man)' },
      { email: 'steve.rogers@marvel.com', name: 'Steve Rogers (Captain America)' },
      { email: 'natasha.romanoff@marvel.com', name: 'Natasha Romanoff (Black Widow)' },
      { email: 'thor.odinson@marvel.com', name: 'Thor Odinson' },
      { email: 'bruce.banner@marvel.com', name: 'Bruce Banner (Hulk)' },
      { email: 'clint.barton@marvel.com', name: 'Clint Barton (Hawkeye)' },
      { email: 'wanda.maximoff@marvel.com', name: 'Wanda Maximoff (Scarlet Witch)' },
      { email: 'peter.parker@marvel.com', name: 'Peter Parker (Spider-Man)' },
      { email: 'tchalla@marvel.com', name: 'T’Challa (Black Panther)' },
      { email: 'carol.danvers@marvel.com', name: 'Carol Danvers (Captain Marvel)' },
      { email: 'scott.lang@marvel.com', name: 'Scott Lang (Ant-Man)' },
      { email: 'hope.vandyne@marvel.com', name: 'Hope Van Dyne (Wasp)' },
      { email: 'stephen.strange@marvel.com', name: 'Stephen Strange (Doctor Strange)' },
      { email: 'sam.wilson@marvel.com', name: 'Sam Wilson (Falcon)' },
      { email: 'bucky.barnes@marvel.com', name: 'Bucky Barnes (Winter Soldier)' },
      { email: 'loki.laufeyson@marvel.com', name: 'Loki Laufeyson' },
      { email: 'nick.fury@marvel.com', name: 'Nick Fury' },
      { email: 'phil.coulson@marvel.com', name: 'Phil Coulson' },
      { email: 'gamora@marvel.com', name: 'Gamora' },
      { email: 'peter.quill@marvel.com', name: 'Peter Quill (Star-Lord)' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });