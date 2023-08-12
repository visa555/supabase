<template>
  <div class="main-container">
    <div v-if="preview">
      <div>
        <div class="mb-10">
          <v-btn
            :to="{
              name: 'admin-schedule-id-edit',
              params: { id },
            }"
            color="blue-grey"
            class="white--text"
          >
            Edit
            <v-icon right dark>edit</v-icon>
          </v-btn>
          <v-btn
            :to="{ name: 'admin-schedule' }"
            class="ma-2"
            outlined
            color="indigo"
          >
            Back
          </v-btn>
        </div>
        <h1>{{ preview.title }}</h1>
        <span
          >Created Date
          {{ $dayjs(preview.created_at).format('DD MMMM YYYY HH:MM:ss') }}</span
        >
      </div>
      <div v-html="preview.content"></div>
    </div>
  </div>
</template>

<script>
import * as schedule from '~/util/schedule'
export default {
  data() {
    return {
      preview: null,
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    this.getSchedule(this.id)
  },
  methods: {
    async getSchedule(id) {
      const { data } = await schedule.get(id)
      this.preview = data[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 991px !important;
  margin: 60px auto 30px;
}
</style>
