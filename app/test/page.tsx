import { auth } from "@/auth"

const page = async() => {

    const session = await auth()
    console.log('my ses', JSON.stringify(session))


  return (
    <div>
      
    </div>
  )
}

export default page
