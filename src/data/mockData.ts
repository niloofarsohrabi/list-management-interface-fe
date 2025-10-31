import { v4 as uuidv4 } from 'uuid';
import type { ListItem } from '../types/types';

export const generateList = (count: number = 20): ListItem[] => {
  const items: ListItem[] = [];

  for (let i = 1; i <= count; i++) {
    items.push({
      id: uuidv4(),
      date: Date.now() + i * 1000,
      title: `Item ${i}`,
      subtitle: `Subtitle Item ${i}`,
    });
  }

  return items;
};
