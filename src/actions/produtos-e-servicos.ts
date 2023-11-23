'use client'
import {prisma} from '@/lib/prisma'

export async function getAll() {
  try {
    const servicos = await prisma.produtosEServicos.findMany()
    return servicos
  } catch (error) {
    throw error
  }
}