import AOS from 'aos'

export default ({ app }, inject) => {
  app.AOS = AOS.init({
    once: false,
  })
}
