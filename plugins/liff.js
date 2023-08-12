// import NPM version LIFF JS SDK
import liff from '@line/liff'

export default ({ $config, store }, inject) => {
  // You can access liff object as this.$liff by inject()
  inject('liff', liff)
  inject('liffInit', () => {
    return new Promise((resolve) => {
      liff
        .init({ liffId: '1657877721-XaMGq5N2' })
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('LIFF init succeeded.')
          if (!liff.isLoggedIn()) {
            console.log('not login')
            liff.login()
          } else {
            console.log('logged in')
            liff
              .getProfile()
              .then((profile) => {
                // if (process.env.NODE_ENV === 'development') {
                //   profile.userId = 'Soilmate443f79109bbbf19927ad40d13011'
                // }
                // store.commit('setLineProfile', profile)
                store.commit('liff/SET_PROFILE', profile)

                resolve(profile)
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('LIFF get profile failed.')
                return Promise.reject(error)
              })
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('LIFF init failed.')
          return Promise.reject(error)
        })
    })
  })
}
