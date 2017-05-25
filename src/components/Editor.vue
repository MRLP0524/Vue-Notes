<template>
  <div id="note-editor">
    <textarea v-bind:value="activeNoteText" v-on:input="editNote" class="form-control"></textarea>
  </div>
</template>

<script>
export default {
  computed:{
    activeNoteText(){
      return this.$store.getters.activeNote.text
    }
  },
  methods:{
  	editNote(e){
  		this.$store.dispatch('editNote',e.target.value)
  	}
  }
}
</script>
<style type="text/css">  
#note-editor {
  height: 100%;
  margin-left: 380px;
}

#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}
</style>
