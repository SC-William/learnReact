import BannerBtn from './bannerBtn'
import BannerHeader from './bannerHeader'
import BannerImg from './bannerImage'
import classes from './bannerSection.module.css'
import BannerPara from './bannerpara'
import MainNavigation from '../layout/mainNavigation'

function BannerSection(){
    return(
        <div className={classes.section}>
            <div className={classes.sectionOne}>
            <BannerHeader/>
            <BannerPara/>
            <BannerBtn/>
            </div>
            <div className={classes.sectioTwo}>
             <BannerImg/>
            </div>
        </div>
    )
}
export default BannerSection