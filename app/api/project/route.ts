import { NextResponse } from 'next/server';
import { project } from '@/data/project';

export async function GET() {
  const data = JSON.stringify(project);

  return NextResponse.json({ data });
}
