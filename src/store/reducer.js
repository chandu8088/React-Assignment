const initialState={
    isLogin:false,
    theme:'#8dc63f'
}
const reducer =(state=initialState , action)=>{
    
    switch(action.type){
        
        case 'LOGIN_ASYNC':return{
            isLogin:true,
            theme:'#8dc63f'
            
        }
        
        case 'LOGOUT':return{
            isLogin:false
        }
        
        case 'CHANGE':return{
            theme:action.value
        }
       
        
       
        default : //null
    }

    
    return state;
};
export default reducer