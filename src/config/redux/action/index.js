import Api from '../../api'

export const getTodolist = () => {
  return dispatch => {
    Api.getTodolist()
      .then(res => {
        dispatch({
          type: 'GET_TODOLIST',
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getTodo = (id) => {  
  return dispatch => {  
      return dispatch({  
          type: 'GET_TODO',  
          payload: id  
      });  
  }  
};  

export const addTodo = (data) => {  
  return dispatch => {  
      return dispatch({  
          type: 'ADD_TODO',  
          payload: data  
      });  
  }  
};  

export const updateTodo = (data) => {  
  return dispatch => {  
      return dispatch({  
          type: 'UPDATE_TODO',  
          payload: data 
      });  
  }  
}; 

export const deleteTodo = (id) => {  
  return dispatch => {  
      return dispatch({  
          type: 'DELETE_TODO',  
          payload: id  
      });  
  }  
};  