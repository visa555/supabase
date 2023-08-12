import supabase from '~/lib/supabaseClient'

export function login(email, password) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  })
}
export async function getUser() {
  try {
    const {
      data: { user, error },
    } = await supabase.auth.getUser()

    if (error) {
      throw error
    }
    if (user) {
      const { data } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single()
      if (data) {
        // this.profile = { ...data, email: user.email }
        // if (this.profile.avatar_url) {
        //   this.oriFileImage = this.profile.avatar_url
        // }
        return { ...data, email: user.email }
      }
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
export function updateUser(data) {
  return supabase.from('profiles').upsert(data).select()
}

export function signOut() {
  return supabase.auth.signOut()
}
export function uploadImage(folder, filePath, file) {
  return supabase.storage.from(folder).upload(filePath, file)
}
export function deleteImage(folder, fileList) {
  return supabase.storage.from(folder).remove(fileList)
}
