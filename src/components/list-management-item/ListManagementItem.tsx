import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import type { ListItem } from '../../types/types';

import styles from './ListManagementItem.module.css';

interface ListManagementItemProps {
  item: ListItem;
  onDeleteItem: (id: string) => void;
  onEditItem: (item: ListItem) => void;
}

const ListManagementItem: React.FC<ListManagementItemProps> = ({
  item,
  onDeleteItem,
  onEditItem,
}) => {
  const { id, date, subtitle, title } = item;

  return (
    <div key={`item--${id}`} className={styles.item}>
      <div className={styles.dateRow}>
        <CalendarMonthIcon className={styles.calendarIcon} />
        <span className={styles.dateText}>
          {new Date(date).toLocaleString()}
        </span>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.texts}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>

        <div className={styles.actions}>
          <IconButton size="small" onClick={() => onDeleteItem(id)}>
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
          <IconButton size="small" onClick={() => onEditItem(item)}>
            <EditSquareIcon fontSize="small" color="primary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ListManagementItem;
