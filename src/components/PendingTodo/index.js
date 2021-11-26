import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getTodo } from '../../config/redux/action';
import ModalTodo from '../ModalTodo';

const PendingTodo = () => {
  const [modalShow, setModalShow] = React.useState(false);  
  const { data } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleModal = (id) => {
    dispatch(getTodo(id));
    setModalShow(true);
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center text-warning">Pending</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map(data => {
                if (data.status === 0) {
                  return (
                    <tr key={data.id} onClick={() => handleModal(data.id)} className="pointer">
                      <td>{data.title}</td>
                    </tr>
                  )
                }
              })
          }
        </tbody>
      </Table>
      
      <ModalTodo
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default PendingTodo
