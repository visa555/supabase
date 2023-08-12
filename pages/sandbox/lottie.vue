<template>
  <div>
    <div class="container-500">
      <section
        data-aos="fade-in"
        data-aos-duration="200"
        data-aos-easing="ease-in-out-cubic"
        class="yourclass"
      >
        This should fade in
      </section>
      <h1 class="text-head animate__animated animate__bounce animate__delay-2s">
        Hello สวัสดี
      </h1>
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
    <lottie-player
      ref="lottie1"
      autoplay
      mode="normal"
      src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
      style="width: 320px"
    ></lottie-player>
  </div>
</template>

<script>
import 'animate.css'
export default {
  mounted() {
    // this.$refs.lottie1.addEventListener('complete', () => {
    //   alert('test')
    // })
  },
  methods: {
    test() {
      alert('ok')
    },
  },
}
</script>

<style lang="scss" scoped>
.paddingMax {
  padding-top: 700px;
}
</style>
