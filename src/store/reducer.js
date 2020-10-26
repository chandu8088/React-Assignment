const initialState={
    isLogin:false
}
const reducer =(state=initialState , action)=>{
    if(action.type==='LOGIN'){
        return{
            isLogin:true
        }
    }
    if(action.type==='LOGOUT'){
        return{
            isLogin:false
        }
    }
    return state;
};
export default reducer