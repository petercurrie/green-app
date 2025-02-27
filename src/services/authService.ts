import { UserType } from "@/types/types";
export async function handleLogin(data: UserType) {
  try {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const user = await response.json()
    if (response.status !== 200) {
      throw new Error(user.message)
    }
    return user
  } catch(error) {
    console.error(error)
  }

}

export async function handleSignup(data: UserType) {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const newUser = await response.json()
    if (response.status !== 201) {
      throw new Error(newUser.message)
    }
    return newUser
  } catch(error) {
    console.error(error)
  }
}

