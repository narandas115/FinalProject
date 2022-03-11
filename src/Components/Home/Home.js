import React from 'react'
import FooterPage from '../../Layout/Footer'
import Upper from '../../Layout/Upper'
import SubCat from '../../Topics/T_SubCat/T_SubCat'
import './Home.css'


function Home() {
    return (
        <div className="banner_area" >
            {/* <div class="container"> */}
                <img  class="banner_bg"src={"../../../image/banner.jpg"} alt="banner" />
                <img  class="banner_bg2"src={"../../../image/oft.jpg"} alt="oft" />
                <div class="fea_content">
                    <div class="row">
                        <div>
                           
                        </div>
                    </div>
                </div>
               
            {/* </div> */}
            {/* <Upper/> */}
            {/* <div className='car'><SubCat/></div> */}
            <FooterPage/>
            
        </div>
    )
}

export default Home
