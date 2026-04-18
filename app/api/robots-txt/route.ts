import { NextResponse } from 'next/server';

const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://rendiriz.com';

const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'anthropic-ai',
  'Claude-Web',
  'Google-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'Applebot-Extended',
];

function block(userAgent: string): string {
  return [
    `User-agent: ${userAgent}`,
    'Allow: /',
    'Disallow: /api/',
    'Content-Signal: ai-train=no, search=yes, ai-input=no',
  ].join('\n');
}

export async function GET() {
  const lines: string[] = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Content-Signal: ai-train=no, search=yes, ai-input=no',
    '',
    ...AI_BOTS.map((bot) => block(bot) + '\n'),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ];

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
