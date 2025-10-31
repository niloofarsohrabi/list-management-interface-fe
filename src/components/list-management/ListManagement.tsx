import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import type { ListItem } from '../../types/types';
import { generateList } from '../../data/mockData';
import noContent from '../../../assets/images/no-content.png';
import EditDialog from '../edit-dialog/EditDialog';
import DeleteItemDialog from '../delete-item-dialog/DeleteItemDialog';
import ListManagementItem from '../list-management-item/ListManagementItem';

import styles from './ListManagement.module.css';

const ListManagement: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [deleteItemId, setDeleteItemId] = useState<string | undefined>(
    undefined,
  );
  const [editDialogData, setEditDialogData] = useState<ListItem | undefined>(
    undefined,
  );

  const onDeleteItem = (id: string) => {
    setDeleteItemId(id);
  };
  const onConfrimDelete = () => {
    if (!deleteItemId) return;
    setListItems((prev) => prev.filter((item) => item.id !== deleteItemId));
    setDeleteItemId(undefined);
  };
  const onEditItem = (item: ListItem) => {
    setIsEditDialogOpen(true);
    setEditDialogData(item);
  };
  const onAddItem = () => {
    setIsAddDialogOpen(true);
  };
  const onCreateItem = (title: string, subtitle: string) => {
    const newItem = {
      id: uuidv4(),
      date: Date.now(),
      title: title,
      subtitle: subtitle,
    };
    setListItems((prevState) => [newItem, ...prevState]);
    setIsAddDialogOpen(false);
  };
  const onSubmitItem = (title: string, subtitle: string) => {
    if (!editDialogData) return;
    setListItems((prevState) =>
      prevState.map((item) =>
        item.id === editDialogData.id
          ? { ...item, title, subtitle, date: Date.now() }
          : item,
      ),
    );
    setIsEditDialogOpen(false);
    setEditDialogData(undefined);
  };

  useEffect(() => {
    setListItems(generateList(2));
  }, []);

  return (
    <div className={styles.listManagement}>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.itemLength}>{listItems.length}</div>
          <Typography className={styles.title}>List Managements</Typography>
        </div>
        <Button
          startIcon={<AddIcon />}
          onClick={onAddItem}
          variant="contained"
          color="primary"
          size="small"
        >
          Add
        </Button>
      </div>

      {listItems.length === 0 ? (
        <div className={styles.noContent}>
          <img src={noContent} className={styles.noContentImage} />
          <Typography className={styles.noContentText}>
            There are no items. Please add a new item.
          </Typography>
        </div>
      ) : (
        listItems.map((item) => (
          <ListManagementItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
          />
        ))
      )}

      <EditDialog
        mode="add"
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onSave={onCreateItem}
      />
      <EditDialog
        mode="edit"
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        item={editDialogData}
        onSave={onSubmitItem}
      />
      <DeleteItemDialog
        open={Boolean(deleteItemId)}
        onClose={() => setDeleteItemId(undefined)}
        onDeleteConfrim={onConfrimDelete}
      />
    </div>
  );
};

export default ListManagement;
