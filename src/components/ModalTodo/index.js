import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../config/redux/action';

const ModalTodo = (props) => {
  const dataId = useSelector(state => state.dataId);
  const dispatch = useDispatch();
  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    props.onHide();
  }

  const handleUpdateTodo = (id, status) => {
    dispatch(updateTodo ({
      id: id,
      status: status
    }))
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {
        dataId !== null && dataId.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {data.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  {data.description}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-secondary" onClick={() => handleUpdateTodo(data.id, data.status === 0 ? 1 : 0)}>Update</Button>
                {data.status !== 1 && <Button className="btn btn-danger" onClick={() => handleDeleteTodo(data.id)}>Delete</Button>}
              </Modal.Footer>
            </React.Fragment>
          )
        })
      }
    </Modal>
  )
}

export default ModalTodo;
