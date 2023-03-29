import { create } from '@lyrasearch/lyra';
import { allBlogs, allNotes } from 'contentlayer/generated';

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
