export const turnDark=()=>{
    return{
        type:'THEME_DARK'
    }

}
export const turnLight=()=>{
  return{
      type: 'THEME_LIGHT'
  }
}
export const loginSuccess=()=>{
    return {
        type:'LOGIN_SUCCESS'
    }
}
export const logout=()=>{
    return {
        type:'LOGOUT'
    }
}
export const increment=(num)=>{
    return {
        type:'INCREMENT',
        payload: num
    }
}
export const decrement=()=>{
    return {
        type: 'DECREMENT'
    }
}