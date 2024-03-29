export const subCategory = [
  {
    id: 'general',
    categoryId: 'food',
    name: 'General',
  },
  {
    id: 'place',
    categoryId: 'food',
    name: 'Place',
  },
  {
    id: 'font',
    categoryId: 'design',
    name: 'Font',
  },
  {
    id: 'home',
    categoryId: 'design',
    name: 'Home',
  },
  {
    id: 'tools',
    categoryId: 'design',
    name: 'Tools',
  },
  {
    id: 'workspace',
    categoryId: 'design',
    name: 'Workspace',
  },
  {
    id: 'ui-ux',
    categoryId: 'design',
    name: 'UI/UX',
  },
  {
    id: 'ai',
    categoryId: 'programing',
    name: 'AI',
  },
  {
    id: 'algorithm',
    categoryId: 'programing',
    name: 'Algorithm',
  },
  {
    id: 'angular',
    categoryId: 'programing',
    name: 'Angular',
  },
  {
    id: 'devops',
    categoryId: 'programing',
    name: 'DevOps',
  },
  {
    id: 'javascript',
    categoryId: 'programing',
    name: 'Javascript',
  },
  {
    id: 'model',
    categoryId: 'programing',
    name: 'Model',
  },
  {
    id: 'tailwind',
    categoryId: 'programing',
    name: 'Tailwind',
  },
  {
    id: 'typescript',
    categoryId: 'programing',
    name: 'Typescript',
  },
  {
    id: 'tools',
    categoryId: 'programing',
    name: 'Tools',
  },
  {
    id: 'information',
    categoryId: 'traveling',
    name: 'Information',
  },
  {
    id: 'place',
    categoryId: 'traveling',
    name: 'Place',
  },
  {
    id: 'chart',
    categoryId: 'visualization',
    name: 'Chart',
  },
  {
    id: 'tableau',
    categoryId: 'visualization',
    name: 'Tableau',
  },
];

export function findSubCategory(value: string) {
  return subCategory.find((sub) => sub.id === value);
}
