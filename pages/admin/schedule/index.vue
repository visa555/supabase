<template>
  <div>
    <div class="container-500">
      <h1 class="text-head">Hello สวัสดี</h1>
      <p class="text-body">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution
      </p>
      <p class="text-body">
        <strong class="text-accend">เพลซแพนด้าลอจิสติกส์ซีรีส์คอนเซปต์</strong>
        วอเตอร์ซูชิวิทย์เรตติ้งซาร์ดีน โปรเจ็กเตอร์เซาท์ออเดอร์เทควันโดรันเวย์
        รีทัชไฮแจ็คคอลัมนิสต์ โบรชัวร์เบอร์เกอร์ช็อคเวิลด์ธุรกรรม
        เอ็นจีโอติวเตอร์จอหงวน แอ๊บแบ๊วแมคเคอเรล ปัจเจกชนกฤษณ์
        แล็บตุ๊กราสเบอร์รี จตุคามเวิร์กอิกัวนาโปรดักชั่น เฝอดยุคโปรดักชั่นราเมน
        วอฟเฟิลเมคอัพ ไกด์ปาสคาลอัตลักษณ์สต็อกอุปการคุณ นรีแพทย์ยาวีช็อค
        เคลื่อนย้าย บรรพชนเซ็นเซอร์ซิลเวอร์สไปเดอร์
      </p>
    </div>
    <v-btn
      to="schedule/create"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Create New
      <v-icon right dark>add</v-icon>
    </v-btn>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Date</th>
            <th width="50"></th>
            <th width="50"></th>
            <th width="50"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in schedules" :key="item.id">
            <td>
              {{ item.title }}
            </td>
            <td>{{ dateSchedule(item) }}</td>
            <td>
              <nuxt-link
                :to="{
                  name: 'admin-schedule-id-preview',
                  params: { id: item.id },
                }"
              >
                <v-icon>visibility</v-icon>
              </nuxt-link>
            </td>
            <td>
              <nuxt-link
                :to="{
                  name: 'admin-schedule-id-edit',
                  params: { id: item.id },
                }"
              >
                <v-icon right>edit</v-icon>
              </nuxt-link>
            </td>
            <td>
              <v-btn icon @click="handleDelete(item.id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import * as schedule from '~/util/schedule'
export default {
  data() {
    return {
      schedules: null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    this.getSchedule()
  },
  methods: {
    dateSchedule(item) {
      if (item.date_start !== item.date_end) {
        return `${this.$dayjs(item.date_start).format(
          'DD MMMM BBBB'
        )} - ${this.$dayjs(item.date_end).format('DD MMMM BBBB')}`
      } else {
        return `${this.$dayjs(item.date_start).format('DD MMMM BBBB')}`
      }
    },
    async getSchedule() {
      // const query = {
      //   date_start: '2023-05-12',
      // }
      // const { data } = await schedule.search(query)
      const { data } = await schedule.gets()
      this.schedules = data
    },
    async handleDelete(id) {
      const { error } = await schedule.remove(id)
      if (error) {
        this.displayDialogError('Cannot delete this item.')
      } else {
        this.displayDialogSuccess('Deleted')
        await this.getSchedule()
      }
    },
    displayDialogSuccess(message) {
      this.$swal({
        toast: false,
        position: 'center',
        showConfirmButton: true,
        confirmButtonText: `Ok`,
        icon: 'success',
        title: 'เรียบร้อย',
        text: message,
      })
    },
    displayDialogError(errorMessage) {
      this.$swal({
        toast: false,
        position: 'center',
        showConfirmButton: true,
        confirmButtonText: `Ok`,
        icon: 'warning',
        title: 'เกิดข้อผิดพลาด',
        text: errorMessage,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
