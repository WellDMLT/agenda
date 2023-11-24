import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const servicos = await prisma.produtosEServicos.findMany()

    if(servicos.length === 0) {
     return  NextResponse.json('Sem dados', {status: 500})
    }

    return NextResponse.json(servicos)
  } catch (error) {
    NextResponse.json('Error', {status: 500})
  }
}