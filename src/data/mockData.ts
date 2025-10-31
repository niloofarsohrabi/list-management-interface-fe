import { v4 as uuidv4 } from 'uuid';
import type { ListItem } from '../types/types';

export const generateList = (count = 20): ListItem[] =>
  Array.from({ length: count }, (_, index) => ({
    id: uuidv4(),
    date: Date.now() + index * 1000,
    title: `Item ${index}`,
    subtitle: `Subtitle Item ${index}`,
  }));
