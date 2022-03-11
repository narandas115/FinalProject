import React from 'react'
import './T_Cat.css'
import topData from '../Topics.json' 
import { Link } from 'react-router-dom'
import {Row,Button} from 'react-bootstrap'
import Footer from '../../Layout/Footer'
// import { useParams } from 'react-router-dom'

const T_Cat = () => {
    return (
        <>
        
           <h1>Our Populer Courses</h1> 
           
           <ul>
               {
                   topData.Topics.map((top)=>
                   
                   <li key={top.t_id}>
                       {top.t_name}<br/>
                     <Link to={`/subcat/${top.t_id}`}>
                     
                    <Button className='my_btn'>Go to preview</Button></Link>
                       
                   </li>
                   )
               }
           </ul>
           <div className='Fpage'><Footer/></div>
        </>
    )
}

export default T_Cat


