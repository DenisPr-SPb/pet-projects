import Button from '../ui/Button.jsx';
import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri';

export default function TodosActions(props) {
  const {resetTodos, deleteCompletedTodos, completedTodo} = props;

  return (
      <>
        <Button title={'Reset todos'} onClick={resetTodos}>
          <RiRefreshLine/>
        </Button>
        <Button title={'Clear completed todos'} onClick={deleteCompletedTodos} disabled={!completedTodo}>
          <RiDeleteBin2Line/>
        </Button>
      </>
  )
}