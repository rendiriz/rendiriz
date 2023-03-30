import { create } from '@lyrasearch/lyra';
import { allBlogs, allNotes, allBookmarks } from 'contentlayer/generated';

export const instanceBlog = async () => {
  return await create({
    schema: {
      title: 'string',
      date: 'string',
      url: 'string',
    },
    defaultLanguage: 'english',
  });
};

export const instanceNote = async () => {
  return await create({
    schema: {
      title: 'string',
      date: 'string',
      url: 'string',
    },
    defaultLanguage: 'english',
  });
};

export const instanceBookmark = async () => {
  return await create({
    schema: {
      category: 'string',
      subCategory: 'string',
      kind: 'string',
      title: 'string',
      link: 'string',
      date: 'string',
      url: 'string',
    },
    defaultLanguage: 'english',
  });
};

export const makeDataBlog = () => {
  const documents: any[] = [];

  allBlogs.forEach((d) => {
    documents.push({
      title: d.title,
      date: d.date,
      url: d.url,
    });
  });

  return { documents };
};

export const makeDataNote = () => {
  const documents: any[] = [];

  allNotes.forEach((d) => {
    documents.push({
      title: d.title,
      date: d.date,
      url: d.url,
    });
  });

  return { documents };
};

export const makeDataBookmark = () => {
  const documents: any[] = [];

  allBookmarks.forEach((d) => {
    documents.push({
      category: d.category,
      subCategory: d.subCategory,
      kind: d.kind,
      title: d.title,
      link: d.link ? d.link : null,
      date: d.date,
      url: d.url,
    });
  });

  return { documents };
};
