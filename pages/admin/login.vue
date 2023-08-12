<template>
  <div class="full-hight">
    <v-card elevation="1" width="300">
      <v-card-title class="grey lighten-3">Member Signin</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field v-model="email" placeholder="Email"></v-text-field>
            <v-text-field
              v-model="password"
              placeholder="Password"
            ></v-text-field>
            <p>Register | Forgot password</p>
            <v-btn class="primary" @click="handleLogin">Login</v-btn>
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
      email: null,
      password: null,
    }
  },
  methods: {
    async handleLogin() {
      const { data, error } = await supabase.login(this.email, this.password)

      if (!error && data) {
        console.log(data)
        // this.$router.replace({ name: 'supabase-profile' })
      } else {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
