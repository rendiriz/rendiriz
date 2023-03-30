export const category = [
  {
    id: 'food',
    name: 'Food',
  },
  {
    id: 'design',
    name: 'Design',
  },
  {
    id: 'programing',
    name: 'Programing',
  },
  {
    id: 'visualization',
    name: 'Visualization',
  },
];

export function findCategory(value: string) {
  return category.find((cat) => cat.id === value);
}
