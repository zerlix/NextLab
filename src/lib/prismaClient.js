// lib/prismaClient.js
import { PrismaClient } from '@prisma/client';

// Singleton-Muster für PrismaClient, um mehrere Instanzen zu verhindern
const globalForPrisma = global;

// Wenn noch keine Prisma-Instanz existiert, wird eine neue erstellt
globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();

// In der Entwicklungsumgebung (nicht 'production') wird die bestehende Instanz beibehalten
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = globalForPrisma.prisma;
}

// Exportiere die Prisma-Instanz
export const prisma = globalForPrisma.prisma;

