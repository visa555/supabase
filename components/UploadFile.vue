<template>
  <div>
    <div>
      <img
        v-if="imageDisplay"
        :src="imageDisplay"
        style="height: 150px; width: 150px"
      />
      <div
        v-else
        class="avatar no-image"
        style="height: 150px; width: 150px"
      ></div>
    </div>
    <div>
      <input type="file" accept="image/*" @change="uploadAvatar" />
    </div>
  </div>
</template>

<script>
  import supabase from '~/lib/supabaseClient'
  export default {
    name: 'UploadFile',
    props: {
      previewUrl: {
        type: String,
        default: '',
      },
      height: {
        type: Number,
        required: false,
        default: 250,
      },
      width: {
        type: Number,
        required: false,
        default: 250,
      },
    },
    data() {
      return {
        imageDisplay: null,
      }
    },
    mounted() {
      if (this.previewUrl) {
        this.downloadImage(this.previewUrl)
      } else {
        this.imageDisplay = null
      }
    },
    methods: {
      uploadAvatar(event) {
        try {
          if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select an image to upload.')
          } else {
            // manipulate file upload
            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            // const { error } = await supabase.storage
            //   .from('avatars')
            //   .upload(filePath, file)
            // if (error) {
            //   throw error
            // }
            this.imageDisplay = URL.createObjectURL(file)
            console.log(filePath)
            this.$emit('onUpload', filePath, file)
          }
        } catch (error) {
          alert(error)
        }
      },

      async downloadImage(path) {
        try {
          const { data, error } = await supabase.storage
            .from('avatars')
            .download(path)
          if (error) {
            throw error
          } else {
            this.imageDisplay = URL.createObjectURL(data)

            // console.log('image', url)
          }
        } catch (error) {
          console.log('download', error)
        }
      },
    },
  }
</script>

<style lang="scss" scoped></style>
