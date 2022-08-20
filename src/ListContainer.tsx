import * as React from 'react';
import ListItem from './ListItem';

type ListContainerProps = {
  todoList: string[] | [],
  deleteTask: (i: number) => void
}

const ListContainer: React.FC<ListContainerProps> = ({ todoList, deleteTask }) => {

  return (
    <div>
      {todoList.map((todo, i) => <ListItem text={todo} i={i} key={`todoList${todo}`} deleteTask={deleteTask} /> )}
    </div>
  )
}



export default ListContainer;