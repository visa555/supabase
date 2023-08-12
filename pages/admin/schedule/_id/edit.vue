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
            ></v-text-field>
            <v-switch
              v-model="period"
              inset
              :label="period ? 'Period' : 'One Day'"
            ></v-switch>
            <DialogDueDate v-model="schedule.date_start" />
            <div class="mt-4">
              <DialogDueDate v-if="period" v-model="schedule.date_end" />
            </div>
            <quillEditor v-model="schedule.content" />
            <v-switch
              v-model="schedule.status"
              inset
              :label="schedule.status ? 'Open' : 'Close'"
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :to="{ name: 'admin-schedule' }"
          class="ma-2"
          outlined
          color="indigo"
        >
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" class="white--text" @click="handleUpdate"
          >Save</v-btn
        >
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
        status: true,
      },
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  async mounted() {
    // this.schedule.date_start = this.$dayjs().format('YYYY-MM-DD')
    await this.getSchedule(this.id)
  },
  methods: {
    async getSchedule(id) {
      const { data } = await schedule.get(id)
      this.schedule = data[0]
      if (this.schedule.date_start !== this.schedule.date_end) {
        this.period = true
      }
      console.log(this.schedule)
    },
    async handleUpdate() {
      if (!this.period) {
        this.schedule.date_end = this.schedule.date_start
      }
      const { error } = await schedule.update(this.schedule)
      if (!error) {
        console.log('ok')
        this.$router.replace({ name: 'admin-schedule' })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
