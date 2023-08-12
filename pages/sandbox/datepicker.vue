<template>
  <div>
    <v-card max-width="300">
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
            <DialogDueDate v-model="schedule.datestart" />
            <DialogDueDate v-if="schedule.period" v-model="schedule.dateend" />
            <v-switch
              v-model="schedule.status"
              inset
              :label="schedule.status ? 'Open' : 'Close'"
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="handleUpdate">Send</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      period: false,
      schedule: {
        title: null,
        datestart: null,
        dateend: null,
        status: true,
      },
    }
  },

  mounted() {},
  methods: {
    handleUpdate() {
      console.log('date', this.date)
    },
  },
}
</script>

<style lang="scss" scoped></style>
