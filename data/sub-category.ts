export const subCategory = [
  {
    id: 'general',
    categoryId: 'food',
    name: 'General',
  },
  {
    id: 'font',
    categoryId: 'design',
    name: 'Font',
  },
  {
    id: 'tools',
    categoryId: 'design',
    name: 'Tools',
  },
  {
    id: 'ui-ux',
    categoryId: 'design',
    name: 'UI/UX',
  },
  {
    id: 'javascript',
    categoryId: 'programing',
    name: 'Javascript',
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
