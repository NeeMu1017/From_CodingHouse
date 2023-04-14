import React, { useState } from 'react';
import styles from "./Form.module.css";

const Form = () => {
    var invalidation = {
        username: "",
        email: "",
        passwrod: ""
        
    }
    const [formvalue, setFormvalue] = useState([invalidation]);
    const [formErrors,SetFromError] =useState({})

    function handalechange(e) {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
    }
    const validate = (values) => {
        const error = {};
        
        if (!values.username) {
            error.username = "Username is required!"
        }
        if (!values.email) {
            error.email = "emial is required!"
        }
        if (!values.passwrod) {
            error.passwrod = "password is required!"
        }
        return error
    }
    function handelsubmit(){
        console.log(formvalue);
        SetFromError(validate(formvalue))
    }

   

    
    return (
        <div className='container d-flex justify-content-center'>
            <div className={styles.container1}>


                <div >

                    <div className={styles.input_container}>
                        <h2 className=' d-flex justify-content-center'>Login</h2>
                        <label className='form-lable'>Name</label>
                        <input
                            type="text"
                            placeholder='Name'
                            className='form-control'
                            value={formvalue.username}
                            name='username'
                            onChange={handalechange}

                        />
                        <p>{formErrors.username}</p>
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            className='form-control'
                            placeholder='email'
                            value={formvalue.email}
                            name='email'
                            onChange={handalechange}
                             />
                        <p>{formErrors.email}</p>
                        <label htmlFor="">Password</label>
                        <input type="password"
                            className='form-control'
                            placeholder='Password'
                            value={formvalue.passwrod}
                            name='passwrod'
                            onChange={handalechange}
                            />
                        <p>{formErrors.passwrod}</p>
                       
                        <button className='btn btn-success mt-3 mb-3 form-control'
                        onClick={handelsubmit}
                        >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form