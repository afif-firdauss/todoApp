const initialState = {
  data: [],
  dataId: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOLIST':
      return {
        ...state,
        data: action.payload,
      };
    case 'GET_TODO':
      return {
        ...state,
        dataId: state.data.filter(todo => todo.id === action.payload),
      };
    case 'ADD_TODO':    
      return {    
        ...state,    
        data: state.data.concat(action.payload)    
      };    
    case 'UPDATE_TODO':    
      return {    
        ...state,    
        data: state.data.map((content, i) => content.id === action.payload.id ? 
          { 
            ...content,
            status : action.payload.status,
          } : content )    
      };
    case 'DELETE_TODO':    
      return {    
        ...state,    
        data: state.data.filter(item => item.id !== action.payload)    
      };      
    default:
      return state;
  }
}

export default reducer;
