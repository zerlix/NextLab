import { useRouter } from 'next/router'

export default function Test() {
  const router = useRouter()
  
  return <p>Post: {router.query.slug}</p>

}