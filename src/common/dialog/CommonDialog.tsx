import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import styles from './CommonDialog.module.css';

interface CommonDialogProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  actions: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClose: () => void;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  open,
  title,
  content,
  actions,
  maxWidth = 'md',
  onClose,
}) => {
  return (
    <Dialog open={open} maxWidth={maxWidth} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <div className={styles.divider} />
      <DialogContent>{content}</DialogContent>
      <div className={styles.divider} />
      <DialogActions className={styles.dialogActions}>{actions}</DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
