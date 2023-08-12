<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              v-model="schedule.title"
              placeholder="Enter event title"
              hide-details
              outlined
              class="mb-4"
            ></v-text-field>
            <quillEditor
              id="editor-container"
              ref="editorContainer"
              v-model="schedule.content"
              :options="editorOption"
            />
            <v-switch
              v-model="period"
              inset
              :label="period ? 'Period' : 'One Day'"
            ></v-switch>
            <DialogDueDate v-model="schedule.date_start" />
            <div class="mt-4">
              <DialogDueDate v-if="period" v-model="schedule.date_end" />
            </div>
            <v-switch
              v-model="schedule.status"
              inset
              :label="schedule.status ? 'Open' : 'Close'"
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="handleCreate">Send</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import * as schedule from '~/util/schedule'
import * as supabase from '~/util/supabase'
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      period: false,
      schedule: {
        title: null,
        date_start: null,
        date_end: null,
        content: null,
        status: true,
      },
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
  created() {},
  mounted() {
    this.editor = this.$refs.editorContainer.quill
    this.schedule.date_start = this.$dayjs().format('YYYY-MM-DD')
    this.editor.on('text-change', function (delta, oldDelta, source) {
      console.log('Content has changed!')
    })
    const self = this
    this.editor.getModule('toolbar').addHandler('image', function () {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.click()

      // Listen upload local image and save to server
      input.onchange = async () => {
        const file = input.files[0]

        // file type is only image.
        if (/^image\//.test(file.type)) {
          const fileExt = file.name.split('.').pop()
          const fileName = `${Math.random()}.${fileExt}`

          const result = await supabase.uploadImage('upload', fileName, file)
          const imageUrl = `https://saxbolqnrebzucafckam.supabase.co/storage/v1/object/public/upload/${fileName}`
          self.insertToEditor(imageUrl)

          // console.log('test', self.editor.getSelection())
          console.log('file', result)

          // saveToServer(file);
        } else {
          console.warn('You could only upload images.')
        }
      }
    })
  },
  methods: {
    insertToEditor(imageUrl) {
      // push image url to rich editor.
      const range = this.editor.getSelection()
      this.editor.insertEmbed(range.index, 'image', imageUrl)
      this.editor.setSelection(999999)
    },
    // selectLocalImage() {
    //   console.log('upload')
    //   const input = document.createElement('input')
    //   input.setAttribute('type', 'file')
    //   input.click()

    //   // Listen upload local image and save to server
    //   input.onchange = () => {
    //     const file = input.files[0]

    //     // file type is only image.
    //     if (/^image\//.test(file.type)) {
    //       console.log('file', file)
    //       // saveToServer(file);
    //     } else {
    //       console.warn('You could only upload images.')
    //     }
    //   }
    // },
    async uploadFile(filePath, file) {
      try {
        const { error } = await supabase.uploadImage('upload', filePath, file)
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error)
      }
    },
    async handleCreate() {
      if (!this.period) {
        this.schedule.date_end = this.schedule.date_start
      }
      const { error } = await schedule.insert(this.schedule)
      if (!error) {
        console.log('ok')
        this.$router.replace({ name: 'admin-schedule' })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#editor-container {
  height: 375px;
  margin-bottom: 60px;
}
</style>
