import React, { useState } from 'react';
import Header from '../../atoms/header/header';
import SearchBar from '../../molecules/searchBar/searchBar';
import ListFooter from '../../molecules/listFooter/listFooter';
import ListItem from '../../molecules/listItem/listItem';
import Paragraph from '../../atoms/paragraph/paragraph';
import styles from './toDoList.module.scss';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { listSlice } from '../../../store/slices/listSlice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ToDoList = () => {
  const { addItem, checkItem, removeItem, removeCompleted, setItems } = listSlice.actions;
  const [filter, setFilter] = useState('All');

  const dispatch = useDispatch();
  const itemsState = useSelector((state) => state.listReducer);
  const addItemCallback = (title, isCompleted) => {
    dispatch(addItem({ title: title, isCompleted: isCompleted }));
  };

  const checkItemCallback = (id, isCompleted) => {
    dispatch(checkItem({ id: id, isCompleted: isCompleted }));
  };

  const removeItemCallback = (id) => {
    dispatch(removeItem({ id: id }));
  };

  const removeCompletedCallback = () => {
    dispatch(removeCompleted());
  };

  const itemFiltration = (item) => {
    if (filter === 'All') {
      return true;
    }

    if (filter === 'Completed') {
      return item.isCompleted;
    }

    if (filter === 'Active') {
      return !item.isCompleted;
    }
  };

  const setFilterCallback = (value) => {
    setFilter(value);
  };

  const moveToDoListItem = (dragIndex, hoverIndex) => {
    const dragItem = itemsState.list[dragIndex];
    const hoverItem = itemsState.list[hoverIndex];
    const updatedList = [...itemsState.list];
    updatedList[dragIndex] = hoverItem;
    updatedList[hoverIndex] = dragItem;
    dispatch(setItems({ list: updatedList }));
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <Header headerText="TODO" />
      </div>

      <div className={styles.searchBarContainer}>
        <SearchBar callBack={addItemCallback} />
      </div>

      <div>
        <DndProvider backend={HTML5Backend}>
          {itemsState.list
            .filter((item) => itemFiltration(item))
            .map((item, index) => (
              <div className={styles.listItemContainer} key={item.id}>
                <ListItem
                  index={index}
                  id={item.id}
                  isCompleted={item.isCompleted}
                  checkCallback={(isCompleted) => checkItemCallback(item.id, isCompleted)}
                  title={item.title}
                  icon={<FaTimes />}
                  iconButtonCallback={() => removeItemCallback(item.id)}
                  moveListItemCallback={moveToDoListItem}
                />
              </div>
            ))}
        </DndProvider>

        <div className={styles.listFooterContainer}>
          <ListFooter
            clearCompletedCallBack={removeCompletedCallback}
            itemsLeft={itemsState.list.filter((item) => !item.isCompleted).length}
            setFilterCallback={setFilterCallback}
          />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Paragraph text="Drag and drop to reorder list" />
      </div>
    </div>
  );
};

export default ToDoList;
