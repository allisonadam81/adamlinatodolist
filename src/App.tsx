
import * as React from 'react';
import ListContainer from './ListContainer';
import ListItemForm from './ListItemForm';
import ListItem from './ListItem';


type Props = {}

type AppState = {
  todoList: string[] | []
}

class App extends React.Component<{}, AppState>{
  constructor(props: {}){
    super(props)
    this.state = {
      todoList: [],

    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask (task: string){
    const todoList = [...this.state.todoList];
    todoList.push(task);
    this.setState({ ...this.state, todoList });
  }

  deleteTask (i: number) {
    const todoList = [...this.state.todoList];
    todoList.splice(i, 1);
    this.setState({ ...this.state, todoList });
  }

  render() {

    return (
      <>
        <ListItemForm
          addTask={this.addTask}
        />
        <ListContainer
          todoList={this.state.todoList}
          deleteTask={this.deleteTask}
        />
      </>
    );
  }
}

export default App;
