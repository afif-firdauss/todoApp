import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../config/redux/action';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = () => {
    if (title && description !== '') {
      dispatch(addTodo ({
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        title: title,
        description: description,
        status: 0,
        createdAt: new Date(),
      }))
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill the form')
    }
  }

  return (
    <div className="flex-column d-flex w-25" style={{gap: '10px'}}>
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit}>Add Todo</Button>
    </div>
  )
}

export default AddTodo;
