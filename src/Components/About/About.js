import React from 'react'
import Footer from '../../Layout/Footer'
import './About.css'


function About() {
    return (

            <div class="bg">
        <img  class="banner_bg"src={"../../../image/gallery-banner.jpg"} alt="gallery-banner" />
      <div class="title blw">
      
         <h2 color='white'>About</h2>
         <h4>WEBHACK ACADEMY</h4>
      </div>
      <div class="row align-items-center abt-top">
         <div class="col-md-6 about-cont">
            <div class="space-inn">
               <p><em>“Webhack Technology Solutions Private Limited (CMMI Level 3)”</em> is one of the reputed software development organisation also providing a training vertical named <em>Webshack Academy.</em> Webhack been awarded by the Indian government with <em>“Pride of India” , “Fastest 500 Asia Pacific Award 2014 (by Thailand Govt.)”</em> as well as <em>“Best IT Place To Work”.</em> For eminent work in Web development and design along with Mobile Apps development,Webhack holds good ranking in international business. We claim 94% client retention with more than 1000+ satisfied clients around the globe.</p>
               <div class="logo-inn">
               
               </div>
            </div>
         </div>
         <div class="col-md-6 about-img">
         <img  class="banner_bg"src={"../../../image/FP/gal-5.jpg"} alt="gal-5" />
         </div>
      </div>
      <div class="row align-items-center abt-btm">
         <div class="col-md-6 about-img ps-relative">
             <div>
                <img  class="banner_bg"src={"../../../image/FP/gal-2.jpg"} alt="gal-2" />
            </div>
         </div>
         <div class="col-md-6 about-cont">
            <div class="space-inn">
               <h2>Why Webhack Academy</h2>
               <p>With international portfolio and hands-on experience, selective developers of Webshack extending their knowledge to train the young IT aspirants. Webhack Academy agenda is to setup your professional strengths, so that one can write in his/her CV ….</p>
               <ul class="aft">
                                    <li>I am proficient in ______;</li>
                                    <li>I have developed expertise in ______;</li>
                                    <li>I have done projects in the field of ______;</li>
                                    <li>I have a certification in ______;</li>
                                    <li>I have a sound knowledge of ______;</li>
                                 </ul>
            </div>
         </div>
      </div>
      <Footer/>
   </div>
    )
}

export default About
