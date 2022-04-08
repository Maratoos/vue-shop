import { ref } from 'vue'
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const signup = async (email, password) => {
  const error = ref(null)

  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)

  } catch(err) {
      error.value = err.message
  }

  return{error}
}
