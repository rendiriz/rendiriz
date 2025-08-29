import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `posts/blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `posts/note/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    category: {
      type: 'string',
      description: 'Comma separated categories',
      required: false,
    },
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const Bookmark = defineDocumentType(() => ({
  name: 'Bookmark',
  filePathPattern: `posts/bookmark/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    subCategory: {
      type: 'string',
      description: 'The sub category of the post',
      required: true,
    },
    kind: {
      type: 'string',
      description: 'The type of the post',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    link: {
      type: 'string',
      description: 'The link of the post',
      required: false,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blog, Note, Bookmark],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
