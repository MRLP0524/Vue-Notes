//引入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	/*
		notes:存储note项
		activeNote:当前正在编辑的note项
	*/
	notes:[],
	activeNote:{}
}

const mutations = {
	//ADD_NOTE添加一个note项
	ADD_NOTE(state){
		const newNote = {
			/*
				text:默认文字内容
				favorite:收藏
			*/
			text:"new Note",
			favorite:false
		}

		state.notes.push(newNote)
		state.activeNote = newNote
	},
	EDIT_NOTE(state,text){

		state.activeNote.text = text
	},
	SET_ACTIVE_NOTE(state,note){

		state.activeNote = note
	},
	TOGGLE_FAVORITE(state){

		state.activeNote.favorite = !state.activeNote.favorite
	},
	DELETE_NOTE(state){

		for (var i=0; i<state.notes.length; i++){
			if (state.notes[i] == state.activeNote){
				state.notes.splice(i, 1)
			}
		}
		state.activeNote = state.notes[0]
	}
}

const actions = {
	/*
		actions处理函数接受一个 context 对象
		{
		  state,     // 等同于 store.state, 若在模块中则为局部状态
		  rootState, // 等同于 store.state, 只存在于模块中
		  commit,    // 等同于 store.commit
		  dispatch,  // 等同于 store.dispatch
		  getters    // 等同于 store.getters
		}
	*/
	addNote({commit}){

		commit('ADD_NOTE')
	},
	editNote({commit},text){

		commit("EDIT_NOTE",text)
	},
	updateActiveNote({commit},note){
		commit('SET_ACTIVE_NOTE',note)
	},
	toggleFavorite({commit}){
		commit('TOGGLE_FAVORITE')
	},
	deleteNote({commit}){
		commit('DELETE_NOTE')
	}
}
const getters = {
	/*
		Getters 接受 state 作为其第一个参数
		state => state.notes为箭头函数等价于：
		function (state){
			return state.notes
		}
	*/
	notes: state => state.notes,
    activeNote: state => state.activeNote
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})







