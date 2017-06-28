//import 数据 from ''	这里面可以获取数据
//注册事件
import * as types from './type'

export default{

	/*banner*/
	BANNER_SHOW:({commit})=>{
	    console.log(types.BANNER_SHOW)
		commit(types.BANNER_SHOW);
	},
    BANNER_HIDE:({commit})=>{
		commit(types.BANNER_HIDE);
	},
/*loading*/
HIDE_LOADING:({commit})=>{
		commit(types.HIDE_LOADING)
	},
SHOW_LOADING:({commit})=>{
		commit(types.SHOW_LOADING)
	},
/*背景黑色*/
SHOW_BG:({commit})=>{
	commit(types.SHOW_BG)
},
HIDE_BG:({commit})=>{
	commit(types.HIDE_BG)
},
GETSCROLLT:({commit,state})=>{
	//console.log(state)
	commit(types.GETSCROLLT)
}

}
