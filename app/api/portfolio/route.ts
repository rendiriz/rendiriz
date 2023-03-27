import { NextResponse } from 'next/server';
import { portfolio } from '@/data/portfolio';

export async function GET() {
  const data = portfolio;

  return NextResponse.json({ data });
}
