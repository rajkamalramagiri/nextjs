
import Link from 'next/link'
import {useRouter} from 'next/router'
function Home(){
  const router=useRouter();
  const handleClick=()=>{
    console.log('placing order')
    router.push('/product')
    // replace will set the replace prop true while we press back button it will go to home page
    // router.replace('/product')


  }
  return(
  <div>
    <h2>Home Page</h2>
<Link href='/blog'>
  <a>Blog</a>
</Link>
<Link href='/product'>
<a>
  Products</a></Link>
  <button onClick={handleClick}>
    Place order
  </button>
  
  </div>
  )
  
}

export default Home


