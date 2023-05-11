import styles from './listItem.module.scss';
import CheckBox from '../../atoms/checkBox/checkBox';
import Title from '../../atoms/title/title';
import IconButton from '../../atoms/iconButton/iconButton';
import { useDrag, useDrop } from 'react-dnd';
import React, { useRef } from 'react';

const ListItem = ({
  index,
  isCompleted,
  title,
  icon,
  checkCallback,
  iconButtonCallback,
  moveListItemCallback,
}) => {
  const [, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItemCallback(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const onCheckBoxChecked = (value) => {
    checkCallback(value);
  };

  return (
    <div className={styles.listItem} ref={dragDropRef}>
      <div className={styles.checkBoxContainer}>
        <CheckBox checkBoxValue={isCompleted} setCheckBoxValue={onCheckBoxChecked} />
      </div>
      <div className={styles.titleContainer}>
        <Title>{title}</Title>
      </div>
      <div className={styles.closeButtonContainer}>
        <IconButton icon={icon} buttonClickedHandler={iconButtonCallback} />
      </div>
    </div>
  );
};

export default ListItem;
