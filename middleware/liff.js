export default async function ({ app, $config }) {
  try {
    await app.$liffInit()
    // const profile = await app.$user.getLineProfile()
    // if (profile) {
    // const isLineFriend = await app.$liffIsFriend()
    // const isInClient = await app.$liff.isInClient()

    // if (!isLineFriend && isInClient) {
    //   return (window.location = `https://line.me/R/ti/p/${$config.lineBotBasicID}`)
    // } else {
    //   const user = await app.$user.get()
    //   if (user && user.isLineFriend !== isLineFriend) {
    //     await app.$user.updateLineFriendStatus(isLineFriend)
    //   }
    // }
    // }
  } catch (error) {
    // LIFF init failed
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
