import { useEffect, useState } from 'react';
import { TextField, DialogContent, Button } from '@mui/material';
import CommonDialog from '../../common/dialog/CommonDialog';

import styles from './EditDialog.module.css';

interface EditDialogProps {
  mode: 'add' | 'edit';
  open: boolean;
  item?: { title: string; subtitle: string };
  onClose: () => void;
  onSave: (title: string, subtitle: string) => void;
}

const EditDialog: React.FC<EditDialogProps> = ({
  mode,
  open,
  item,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const initialTitle = item?.title ?? '';
  const initialSubtitle = item?.subtitle ?? '';

  const isNumericOnly = (value: string) => /^\d+$/.test(value.trim());

  const isFormValid =
    title.trim().length > 0 &&
    subtitle.trim().length > 0 &&
    !isNumericOnly(title) &&
    !isNumericOnly(subtitle) &&
    (mode === 'add' ||
      title.trim() !== initialTitle.trim() ||
      subtitle.trim() !== initialSubtitle.trim());

  useEffect(() => {
    if (mode === 'edit' && item) {
      setTitle(item.title);
      setSubtitle(item.subtitle);
    } else {
      setTitle('');
      setSubtitle('');
    }
  }, [mode, item, open]);

  return (
    <CommonDialog
      open={open}
      onClose={onClose}
      title={mode === 'add' ? 'Create Modal' : 'Edit Modal'}
      actions={
        <div className={styles.actionsWrapper}>
          <Button
            className={styles.closeButton}
            onClick={onClose}
            variant="contained"
            color="primary"
            size="small"
          >
            Close
          </Button>
          <Button
            className={styles.actionButton}
            onClick={() => onSave(title.trim(), subtitle.trim())}
            variant="contained"
            color="primary"
            size="small"
            disabled={!isFormValid}
          >
            {mode === 'add' ? 'Create' : 'Submit'}
          </Button>
        </div>
      }
      content={
        <DialogContent className={styles.dialogContent}>
          <TextField
            required
            fullWidth
            size="small"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!title.trim() || isNumericOnly(title)}
            helperText={
              !title.trim()
                ? 'Title cannot be empty'
                : isNumericOnly(title)
                  ? 'Title cannot be only numbers'
                  : ''
            }
          />
          <TextField
            required
            fullWidth
            size="small"
            label="Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            error={!subtitle.trim() || isNumericOnly(subtitle)}
            helperText={
              !subtitle.trim()
                ? 'Subtitle cannot be empty'
                : isNumericOnly(subtitle)
                  ? 'Subtitle cannot be only numbers'
                  : ''
            }
          />
        </DialogContent>
      }
    />
  );
};

export default EditDialog;
