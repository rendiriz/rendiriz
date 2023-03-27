import { NextResponse } from 'next/server';
import { portfolio } from '@/data/portfolio';

export async function GET() {
  const data = JSON.stringify(portfolio);

  return NextResponse.json({ data });
}
