import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTodo from '../../components/AddTodo';
import CompletedTodo from '../../components/CompletedTodo';
import PendingTodo from '../../components/PendingTodo';
import { getTodolist } from '../../config/redux/action';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodolist())
  }, [dispatch])
  
  return (
    <main>
      <div className="container">
        <div className="my-5 d-flex">
          <CompletedTodo/>
          <PendingTodo/>
        </div>
        <AddTodo/>
      </div>
    </main>
  )
}

export default Home;
