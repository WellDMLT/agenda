import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const servicos = await prisma.produtosEServicos.findMany()
    return NextResponse.json(servicos)
  } catch (error) {
    NextResponse.json('Error', {status: 500})
  }
}