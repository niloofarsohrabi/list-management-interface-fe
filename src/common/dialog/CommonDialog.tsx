import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import type { ActionButton } from '../../types/types';

import './CommonDialog.css';

interface CommonDialogProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  actions?: ActionButton[];
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
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {actions && actions.length > 0 && (
          <DialogActions>
            {actions.map((action, idx) => (
              <Button
                key={idx}
                onClick={action.onClick}
                color={action.color || 'primary'}
                variant={action.variant || 'text'}
                disabled={action.disabled}
              >
                {action.label}
              </Button>
            ))}
          </DialogActions>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
