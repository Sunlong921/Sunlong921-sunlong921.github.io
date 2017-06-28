/*事件处理*/
import {
	BANNER_SHOW,
	BANNER_HIDE,
	HIDE_LOADING,
	SHOW_LOADING,
	HIDE_BG,
	SHOW_BG,
	GETSCROLLT

} from './type'

const state={
	bannershow:true,
	loading:false,
	bgshow : false,
	scrollT :0
};

const mutations={
	/*banner*/

	[BANNER_SHOW](state){
		state.bannershow=true;
	},
	[BANNER_HIDE](state){
		state.bannershow=false;

	},
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	/*背景*/
	[HIDE_BG](state){
		state.bgshow=false;
	},
	[SHOW_BG](state){
		state.bgshow=true;
	},
	[GETSCROLLT](state,payload){

		state.scrollT = payload.amount
		//alert(state.scrollT)
	}
};

const getters={
	bannershow(state){
		return state.bannershow;
	},
	loading(state){
		return state.loading;
	},
	bgshow(state){
		return state.bgshow;
	},
	scrollT(state){
		return state.scrollT
	}

};

export default{
	state,
	mutations,
	getters
}