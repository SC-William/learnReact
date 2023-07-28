
import BannerSection from '@/component/banner/bannerSection'
import classes from './index.module.css'
import AdminDashboard from './admin/adminDashboard'

function Home(){
  return(
    <div className={classes.section}>
      <BannerSection/>
    </div>
  )
}
export default Home