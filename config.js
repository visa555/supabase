const configs = {
  development: {
    // Dev
    liffId: '1657877721-XaMGq5N2',
    //   firebaseConfig: {
    //     apiKey: 'AIzaSyBfE6sPOWizaLSWfh0NAvidhfn7AwhgERg',
    //     authDomain: 'fireweb-3cfe0.firebaseapp.com',
    //     databaseURL:
    //       'https://fireweb-3cfe0-default-rtdb.asia-southeast1.firebasedatabase.app',
    //     projectId: 'fireweb-3cfe0',
    //     storageBucket: 'fireweb-3cfe0.appspot.com',
    //     messagingSenderId: '52890140169',
    //     appId: '1:52890140169:web:9ac8ca04c11bb6a88982d8',
    //   },
  },
  staging: {
    // Dev
    liffId: '1657877721-EVnYpRx8',
  },
  production: {
    // Dev
    liffId: '1657877721-EVnYpRx8',
  },
}

const nodeEnv = process.env.NODE_ENV
module.exports = configs[nodeEnv]
