import { PrismaClient } from '@prisma/client'
import { Percent } from 'lucide-react'

declare global {
    var prisma:PrismaClient | undefined
}

export const client = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = client