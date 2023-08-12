<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="computedDateFormatted"
        :max="$dayjs().format('YYYY-MM-DD')"
        label="Picker in dialog"
        append-icon="mdi-calendar"
        hide-details
        readonly
        outlined
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable locale="th">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="Save"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      date: null,
      modal: false,
    }
  },
  computed: {
    computedDateFormatted() {
      return this.$dayjs(this.date).format('DD MMMM BBBB')
    },
  },
  mounted() {
    if (this.value) {
      this.date = this.value
    } else {
      this.date = this.$dayjs().format('YYYY-MM-DD')
    }
  },
  methods: {
    Save() {
      this.$refs.dialog.save(this.date)
      this.$emit('input', this.date)
    },
  },
}
</script>

<style lang="scss" scoped></style>
