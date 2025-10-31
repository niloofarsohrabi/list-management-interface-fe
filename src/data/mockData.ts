import { v4 as uuidv4 } from 'uuid';
import type { ListItem } from '../types/types';

export const generateList = (count: number = 20): ListItem[] => {
  return new Array(count).fill('').map((_, index) => {
    return {
      id: uuidv4(),
      date: Date.now() + index * 1000,
      title: `Item ${index}`,
      subtitle: `Subtitle Item ${index}`,
    };
  });
};
