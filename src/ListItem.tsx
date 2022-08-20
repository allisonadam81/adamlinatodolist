import * as React from 'react';

type ListItemProps = {
  text: string,
  i: number,
  deleteTask: (i: number) => void
}

type ButtonClick = React.MouseEvent<HTMLButtonElement, MouseEvent>;

const ListItem: React.FC<ListItemProps> = ({ text, i, deleteTask }) => {
  
  const clickHandle = (e: ButtonClick) => {
    e.preventDefault();
    deleteTask(i);
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={clickHandle}>Line Beana's Delete Button-ina</button>
    </div>
  )
}

export default ListItem