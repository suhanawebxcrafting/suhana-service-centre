import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
// import { authOptions } from '../auth/[...nextauth]/route' // Not needed if we use simple check

export async function GET(req) {
  try {
    // In production, add session check here
    const orders = await prisma.xeroxOrder.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}

export async function PATCH(req) {
  try {
    const { id, status } = await req.json()
    const updatedOrder = await prisma.xeroxOrder.update({
      where: { id },
      data: { status },
    })
    return NextResponse.json(updatedOrder)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}
