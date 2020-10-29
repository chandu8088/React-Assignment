const initialState={
    isLogin:false,
    theme:'#8dc63f'
}
const reducer =(state=initialState , action)=>{
    
    switch(action.type){
        case 'LOGIN':return{
            isLogin:true,
            theme:'#8dc63f'
        }
        break;
        case 'LOGOUT':return{
            isLogin:false
        }
        break;
        case 'GREEN':return{
            theme:'#8dc63f'
        }
        break;
        case 'BLUE':return{
            theme:'#2db2ea'
        }
        break;
        case 'ORANGE':return{
            theme:'#fa5b0f'
        }
        break;
        case 'NAVY':return{
            theme:'#495d7f'
        }
        break;
        case 'YELLOW':return{
            theme:'#ffb400'
        }
        break;
        case 'PEACH':return{
            theme:'#fcab55'
        }
        break;
        case 'BEIGE':return{
            theme:'#bfa980'
        }
        break;
        case 'PURPLE':return{
            theme:'#917ae9'
        }
        break;
        case 'CELADON':return{
            theme:'#74aea1'
        }
        break;
        case 'PINK':return{
            theme:'#d64391'
        }
        break;
        case 'RED':return{
            theme:'#dd3737'
        }
        break;
        case 'BROWN':return{
            theme:'#784e3d'
        }
        break;
        case 'CHERRY':return{
            theme:'#911938'
        }
        break;
        case 'CYAN':return{
            theme:'#37b6bd'
        }
        break;
        case 'GREY':return{
            theme:'#808080'
        }
        break;
        case 'DARK':return{
            theme:'#404040'
        }
        break;
    }
    return state;
};
export default reducer