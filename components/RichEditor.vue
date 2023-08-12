<template>
  <div>
    <quillEditor
      id="editor-container"
      ref="editorContainer"
      v-model="content"
      :options="editorOption"
    />
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      content: null,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['link', 'image'],
          ],
        },
      },
      editor: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
