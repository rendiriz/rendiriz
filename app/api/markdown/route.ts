import { NextRequest, NextResponse } from 'next/server';
import { allBlogs, allNotes, allBookmarks } from 'contentlayer/generated';
import { removeSlug } from '@/libs/removeSlug';
import { site } from '@/libs/site';

function mdResponse(content: string): NextResponse {
  const tokens = Math.ceil(content.length / 4);
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
    },
  });
}

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') ?? '/';

  // Homepage
  if (path === '/') {
    const content = [
      `# ${site.title}`,
      '',
      site.description,
      '',
      '## Sections',
      '',
      '- [Blog](/blog)',
      '- [Notes](/note)',
      '- [Bookmarks](/bookmark)',
      '- [Work](/work)',
    ].join('\n');
    return mdResponse(content);
  }

  // Blog post: /blog/<slug>
  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = allBlogs.find(
      (p) => removeSlug(p._raw.flattenedPath) === slug,
    );
    if (post) {
      const content = `# ${post.title}\n\n${post.body.raw}`;
      return mdResponse(content);
    }
  }

  // Blog list: /blog
  if (path === '/blog') {
    const lines = ['# Blog', ''];
    for (const post of allBlogs) {
      const slug = removeSlug(post._raw.flattenedPath);
      lines.push(`- [${post.title}](/blog/${slug})`);
    }
    return mdResponse(lines.join('\n'));
  }

  // Note post: /note/<slug>
  const noteMatch = path.match(/^\/note\/([^/]+)$/);
  if (noteMatch) {
    const slug = noteMatch[1];
    const post = allNotes.find(
      (p) => removeSlug(p._raw.flattenedPath) === slug,
    );
    if (post) {
      const content = `# ${post.title}\n\n${post.body.raw}`;
      return mdResponse(content);
    }
  }

  // Note list: /note
  if (path === '/note') {
    const lines = ['# Notes', ''];
    for (const post of allNotes) {
      const slug = removeSlug(post._raw.flattenedPath);
      lines.push(`- [${post.title}](/note/${slug})`);
    }
    return mdResponse(lines.join('\n'));
  }

  // Bookmark post: /bookmark/<slug>
  const bookmarkMatch = path.match(/^\/bookmark\/([^/]+)$/);
  if (bookmarkMatch) {
    const slug = bookmarkMatch[1];
    const post = allBookmarks.find(
      (p) => removeSlug(p._raw.flattenedPath) === slug,
    );
    if (post) {
      const content = `# ${post.title}\n\n${post.body.raw}`;
      return mdResponse(content);
    }
  }

  // Bookmark list: /bookmark
  if (path === '/bookmark') {
    const lines = ['# Bookmarks', ''];
    for (const post of allBookmarks) {
      const slug = removeSlug(post._raw.flattenedPath);
      lines.push(`- [${post.title}](/bookmark/${slug})`);
    }
    return mdResponse(lines.join('\n'));
  }

  // Work
  if (path === '/work') {
    const content = ['# Work', '', 'Projects and portfolio by Rendi Riz.'].join(
      '\n',
    );
    return mdResponse(content);
  }

  return new NextResponse('Not found', { status: 404 });
}
