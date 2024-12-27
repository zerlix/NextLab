const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Passwort, das für alle Benutzer gesetzt wird
  const password = '123';  // Testpasswort

  // Passwort mit bcrypt hashen
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.createMany({
    data: [
      { email: 'zerlix@marvel.com', name: 'zerlix', password: hashedPassword },
      { email: 'steve.rogers@marvel.com', name: 'Steve Rogers (Captain America)', password: hashedPassword },
      { email: 'natasha.romanoff@marvel.com', name: 'Natasha Romanoff (Black Widow)', password: hashedPassword },
      { email: 'thor.odinson@marvel.com', name: 'Thor Odinson', password: hashedPassword },
      { email: 'bruce.banner@marvel.com', name: 'Bruce Banner (Hulk)', password: hashedPassword },
      { email: 'clint.barton@marvel.com', name: 'Clint Barton (Hawkeye)', password: hashedPassword },
      { email: 'wanda.maximoff@marvel.com', name: 'Wanda Maximoff (Scarlet Witch)', password: hashedPassword },
      { email: 'peter.parker@marvel.com', name: 'Peter Parker (Spider-Man)', password: hashedPassword },
      { email: 'tchalla@marvel.com', name: 'T’Challa (Black Panther)', password: hashedPassword },
      { email: 'carol.danvers@marvel.com', name: 'Carol Danvers (Captain Marvel)', password: hashedPassword },
      { email: 'scott.lang@marvel.com', name: 'Scott Lang (Ant-Man)', password: hashedPassword },
      { email: 'hope.vandyne@marvel.com', name: 'Hope Van Dyne (Wasp)', password: hashedPassword },
      { email: 'stephen.strange@marvel.com', name: 'Stephen Strange (Doctor Strange)', password: hashedPassword },
      { email: 'sam.wilson@marvel.com', name: 'Sam Wilson (Falcon)', password: hashedPassword },
      { email: 'bucky.barnes@marvel.com', name: 'Bucky Barnes (Winter Soldier)', password: hashedPassword },
      { email: 'loki.laufeyson@marvel.com', name: 'Loki Laufeyson', password: hashedPassword },
      { email: 'nick.fury@marvel.com', name: 'Nick Fury', password: hashedPassword },
      { email: 'phil.coulson@marvel.com', name: 'Phil Coulson', password: hashedPassword },
      { email: 'gamora@marvel.com', name: 'Gamora', password: hashedPassword },
      { email: 'peter.quill@marvel.com', name: 'Peter Quill (Star-Lord)', password: hashedPassword },
    ],
  });

  console.log('Testdaten wurden erfolgreich hinzugefügt!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
