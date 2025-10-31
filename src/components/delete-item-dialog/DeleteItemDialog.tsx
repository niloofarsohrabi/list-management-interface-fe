import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CommonDialog from '../../common/dialog/CommonDialog';

import styles from './DeleteItemDialog.module.css';

interface DeleteItemDialogProps {
  open: boolean;
  onClose: () => void;
  onDeleteConfrim: () => void;
}

const DeleteItemDialog: React.FC<DeleteItemDialogProps> = ({
  open,
  onClose,
  onDeleteConfrim,
}) => {
  return (
    <CommonDialog
      open={open}
      onClose={onClose}
      title="Delete Modal"
      content={
        <Box className={styles.content}>
          <ErrorIcon fontSize="large" color="error" />
          <Typography>Are you sure you want to delete this item?</Typography>
        </Box>
      }
      actions={
        <div className={styles.actionsWrapper}>
          <Button
            className={styles.closeButton}
            onClick={onClose}
            variant="contained"
            size="small"
          >
            Close
          </Button>
          <Button
            onClick={onDeleteConfrim}
            variant="contained"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </div>
      }
    />
  );
};

export default DeleteItemDialog;
