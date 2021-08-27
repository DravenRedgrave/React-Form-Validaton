import React,{useState} from 'react';
import FomrSignup from './FomrSignup';
import FormSuccess from './FornSuccess';
import './Form.css';

function Form() {

  const [isSubmitting,setIsSubmitting] = useState(false)

  function submitForm() {
    setIsSubmitting(true)
  }

    return (
      <>

        <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
            <img src="img/img-2.svg" className="form-img"></img>
          </div>
          {!isSubmitting ? (<FomrSignup submitForm={submitForm}/>) : (<FormSuccess/>)}
        </div>

        </>
    )
}

export default Form
