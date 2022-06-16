let themeToggleReducer=(state='light',action)=>{
    switch(action.type){
      case 'THEME_DARK':
        return 'dark'
        case 'THEME_LIGHT':
        return 'light'
        default:
          return state
    }
   
   }
export default themeToggleReducer   