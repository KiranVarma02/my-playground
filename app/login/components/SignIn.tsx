import { signIn, auth } from "@/auth"
 
export default async function SignIn() {
  // const session = await auth()

  // console.log('session--->', session)
      
  // if (!session?.user) return null

  return (
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
  )
} 