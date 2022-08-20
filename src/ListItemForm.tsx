import * as React from 'react'
import { useState } from 'react';

type ListItemFormProps = {
  addTask: (task: string) => void
}

export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type OnFormSubmit = React.FormEvent<HTMLFormElement>;

const ListItemForm: React.FC<ListItemFormProps> = ({ addTask }) => {
  
  // maybe do an onchange for the input field.
  const [task, setTask] = useState<string>('');

  const handler = (e: OnChangeEvent ) => {
    setTask(e.target.value);
  }

  const onSubmit = (e: OnFormSubmit) => {
    e.preventDefault();
    console.log(task)
    addTask(task);
    setTask('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={task} onChange={handler}></input>
      <button type='submit' >Lina Beana's Button-ina</button>
    </form>

  )
}

export default ListItemForm