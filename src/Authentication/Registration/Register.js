import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap'
import'./Register.css'
import Footer from '../../Layout/Footer';

const ValidateForm=(formValue)=>{
    const errors={};
    const reg_exp=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const reg_exppass=/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$/
    if(!formValue.username){
        errors.username="Please enter your name";
    }else if(formValue.username.length<5){
        errors.username="minlength5";
    }if(!formValue.mobile){
        errors.mobile="Please enter valid Mobile number";
    }else if(formValue.mobile.length<10){
        errors.mobile="minlength10";
    }if (!formValue.email){
        errors.email="Please enter your email";
    }else if(!reg_exp.test(formValue.email)){
        errors.email="Invalid Email";
    
    }
    if(!formValue.password){
        errors.password="Please enter your password"
    }else if(!reg_exppass.test(formValue.password)){
        errors.password="Required Strong password";
    }
    console.log("Error: ",errors);
    return errors;
};

const Register = () => {
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            username:'',
            email:'',
            mbile:'',
            password:''
        },
        validate:ValidateForm,
        onSubmit:(values)=>{
            console.log("Received values: ",values);
            axios.post('https://project-node-1.herokuapp.com/postUserData',values)
            .then(res=>{
                console.log("Axios Responce: ",res);
                navigate('/login_page');
                
            })
            .catch(err=>{
                console.log("Axios error: ",err);
            }) 
        
    }});
    
  return (
            <div className="reg">
            <div className="reg_bg">
            
            <h1 align="center">Register Your Self</h1>
                <form className="fbg" align="center" onSubmit={formik.handleSubmit}>
                <br />
               <input
                type="text"
                name="username"
                placeholder="Type Your Full Name"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.username && formik.errors.username ?
                (<span style={{color: 'red'}}>{formik.errors.username}</span>): null}

                <br/>
                <input
                type="text"
                name="mobile"
                placeholder="Type Your Mobile Number"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.mobile && formik.errors.mobile?
                (<span style={{color: 'red'}}>{formik.errors.mobile}</span>): null}

               <br />
               <input
                type="email"
                name="email"
                placeholder="Enter Your Valid Email id"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ?
                (<span style={{color: 'red'}}>{formik.errors.email}</span>): null}
                <br/>

                <input
                type="password"
                name="password"
                placeholder="Please Ender your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.password && formik.errors.password ?
                (<span style={{color: 'red'}}>{formik.errors.password}</span>): null}
                <br/>

                <button type="submit" color='Primary'
                disabled={!(formik.isValid && formik.dirty)}>Submit</button>
            </form>
            
            </div>
            <img className="img" src="../../../../image/gallery-banner.jpg" alt="gallery-banner"></img>
            <div className='Fpage'><Footer/></div>
            </div>
            
             
        );
};

export default Register;



