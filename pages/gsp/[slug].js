import { useRouter } from 'next/router'
export default function GspPage(props) {
  const router = useRouter()
  const { defaultLocale, isFallback, query } = router
  console.log(query.slug)


  if(query.slug === 'test'){
    window.location.replace('/404')
  }
  return (
    <div>testwe</div>
  )


}
