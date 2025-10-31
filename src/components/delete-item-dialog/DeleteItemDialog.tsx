import type React from 'react';
import { DialogContentText } from '@mui/material';
import CommonDialog from '../../common/dialog/CommonDialog';

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
      actions={[
        {
          label: 'Delete',
          onClick: () => onDeleteConfrim(),
          color: 'error',
          variant: 'contained',
        },
      ]}
      content={
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
      }
    />
  );
};

export default DeleteItemDialog;
