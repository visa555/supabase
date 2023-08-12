<template>
  <div v-if="profile" class="full-hight">
    <v-card elevation="1" width="300">
      <v-card-title class="grey lighten-3">Customer Profile</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <UploadFile
              :preview-url="profile.avatar_url"
              @onUpload="updateAvatar"
            />
            <v-text-field
              v-model="profile.email"
              placeholder="Email"
            ></v-text-field>
            <v-text-field
              v-model="profile.full_name"
              placeholder="Fullname"
            ></v-text-field>
            <v-text-field
              v-model="profile.phone"
              placeholder="Phone"
            ></v-text-field>
            <v-text-field
              v-model="profile.website"
              placeholder="Website"
            ></v-text-field>

            <v-btn class="primary" @click="handleUpdate">Save</v-btn>
            <v-btn class="primary" @click="handleSignOut">Sign Out</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import * as supabase from '~/util/supabase'
export default {
  data() {
    return {
      profile: null,
      filePath: null,
      fileImage: null,
      oriFileImage: null,
    }
  },
  computed: {
    imageProfile() {
      return this.profile.avatar_url
    },
  },
  mounted() {
    this.getProfile()
  },

  methods: {
    updateAvatar(filePath, file) {
      this.filePath = filePath
      this.fileImage = file
      // this.profile.avatar_url = filePath
      // this.handleUpdate()
    },
    async getProfile() {
      this.profile = await supabase.getUser()
      if (this.profile.avatar_url) {
        this.oriFileImage = this.profile.avatar_url
      }
    },

    async handleUpdate() {
      if (this.fileImage) {
        await this.uploadAvatar(this.filePath, this.fileImage)
        await this.removeAvatar(this.oriFileImage)
      }

      const newData = {
        id: this.profile.id,
        full_name: this.profile.full_name,
        website: this.profile.website,
        phone: this.profile.phone,
        avatar_url: this.fileImage ? this.filePath : this.profile.avatar_url,
        updated_at: new Date(),
      }
      const { data, error } = await supabase.updateUser(newData)

      if (!error) {
        this.fileImage = null
        this.fileImage = null
        this.getProfile()
        console.log(data)
      }
    },
    async handleSignOut() {
      const { error } = await supabase.signOut()
      if (!error) {
        this.$router.replace({ name: 'login' })
      }
    },
    async uploadAvatar(filePath, file) {
      try {
        const { error } = await supabase.uploadImage('avatars', filePath, file)
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error)
      }
    },
    async removeAvatar(filePath) {
      console.log('filePath', filePath)
      const { error } = await supabase.deleteImage('avatars', [
        this.oriFileImage,
      ])

      if (error) {
        console.log(error)
      } else {
        console.log('remove image')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
