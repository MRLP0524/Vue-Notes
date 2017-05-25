webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(21);
//引入vue及vuex



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])

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

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	state,
	mutations,
	actions,
	getters
}));









/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Toolbar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NoteList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NoteList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_NoteList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Editor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Editor__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Toolbar: __WEBPACK_IMPORTED_MODULE_0__components_Toolbar___default.a,
    NoteList: __WEBPACK_IMPORTED_MODULE_1__components_NoteList___default.a,
    Editor: __WEBPACK_IMPORTED_MODULE_2__components_Editor___default.a
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    activeNoteText: function activeNoteText() {
      return this.$store.getters.activeNote.text;
    }
  },
  methods: {
    editNote: function editNote(e) {
      this.$store.dispatch('editNote', e.target.value);
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: 'all'
    };
  },

  computed: {
    notes: function notes() {
      if (this.show == 'all') {
        return this.$store.getters.notes;
      } else if (this.show == 'favorites') {
        return this.$store.getters.notes.filter(function (note) {
          return note.favorite;
        });
      }
    },
    activeNote: function activeNote() {
      return this.$store.getters.activeNote;
    }
  },
  methods: {
    updateActiveNote: function updateActiveNote(note) {
      console.log(note);
      this.$store.dispatch('updateActiveNote', note);
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    activeNote: function activeNote() {
      return this.$store.getters.activeNote;
    }
  },
  methods: {
    addOne: function addOne() {
      this.$store.dispatch('addNote');
    },
    toggleFavorite: function toggleFavorite() {
      this.$store.dispatch('toggleFavorite');
    },
    deleteNote: function deleteNote() {
      this.$store.dispatch('deleteNote');
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuex_store__ = __webpack_require__(3);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_2__vuex_store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "notes-list"
    }
  }, [_c('div', {
    attrs: {
      "id": "list-header"
    }
  }, [_c('h2', [_vm._v("Notes")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group btn-group-justified",
    attrs: {
      "role": "group"
    }
  }, [_c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-default",
    class: {
      active: _vm.show == 'all'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.show = 'all'
      }
    }
  }, [_vm._v("\n          All Notes\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-default",
    class: {
      active: _vm.show == 'favorites'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.show = 'favorites'
      }
    }
  }, [_vm._v("\n          Favorites\n        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.notes), function(item) {
    return _c('a', {
      staticClass: "list-group-item",
      class: {
        active: _vm.activeNote == item
      },
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.updateActiveNote(item)
        }
      }
    }, [_c('h4', {
      staticClass: "list-group-item-heading"
    }, [_vm._v("\n          " + _vm._s(item.text) + "\n        ")])])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "note-editor"
    }
  }, [_c('textarea', {
    staticClass: "form-control",
    domProps: {
      "value": _vm.activeNoteText
    },
    on: {
      "input": _vm.editNote
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "toolbar"
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-plus",
    on: {
      "click": _vm.addOne
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "glyphicon glyphicon-star",
    class: {
      starred: _vm.activeNote.favorite
    },
    on: {
      "click": _vm.toggleFavorite
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "glyphicon glyphicon-remove",
    on: {
      "click": _vm.deleteNote
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('toolbar'), _vm._v(" "), _c('note-list'), _vm._v(" "), _c('editor')], 1)
},staticRenderFns: []}

/***/ })
],[8]);
//# sourceMappingURL=app.f74c2bfed6b9808de25b.js.map