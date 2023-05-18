import React, {  useState } from 'react'
import './midfold.css';


const Midfold = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChangeHandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const SubmissionMessage = () => (
    <div className="submission-message">
      <h3>Thank you for your submission!</h3>
      <p>We appreciate your feedback.</p>
    </div>
  );






  const validateForm = () => {
    const newErrors = {};

    if (!data.fname) {
      newErrors.fname = 'First Name is required';
    }

    if (!data.lname) {
      newErrors.lname = 'Last Name is required';
    }

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!data.number) {
      newErrors.number = 'Contact Number is required';
    }

    if (!data.company) {
      newErrors.company = 'Company is required';
    }

    if (!data.state) {
      newErrors.state = 'State is required';
    }

    if (!data.describe) {
      newErrors.describe = 'Please select an option';
    }

    if (!data.Distributor) {
      newErrors.Distributor = 'Please select a preferred distributor';
    }

    if (!data.additional) {
      newErrors.additional = 'Additional Information is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
        
        setIsSubmitted(true);
  
        setData({
            fname: '',
            lname: '',
            email: '',
            number: '',
            company: '',
            state: '',
            describe: '',
            Distributor: '',
            additional: ''
          });

          setErrors({});
      } else {
       
        setIsSubmitted(false);
      }
  };

  return (
    <div className='contact' >
      <div>
            <h2>Connect with us</h2>
            <h5 style={{fontFamily:"Aktifoa-light"}}>for outstanding protective overlaminates</h5>
        </div>
        <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="fname">First Name</label>
                <input value={data.fname} type="text" onChange={onChangeHandler} name='fname' />
                {errors.fname && <span style={{fontSize:"12px",color:"red"}}>*{errors.fname}</span>}
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="lname">Last Name</label>
                <input type="text"  value={data.lname} onChange={onChangeHandler} name='lname' />
                {errors.lname && <span style={{fontSize:"12px",color:"red"}}>*{errors.lname}</span>}
            </div>
        </div>
        <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="email">Email</label>
                <input type="email"  value={data.email} onChange={onChangeHandler} name='email'/>
                {errors.email && <span style={{fontSize:"12px",color:"red"}}>*{errors.email}</span>}
            </div>
            <div  style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="number">Contact Number</label>
                <input type="number"  value={data.number} onChange={onChangeHandler} name='number' />
                {errors.number && <span style={{fontSize:"12px",color:"red"}}>*{errors.number}</span>}
            </div>
        </div>
        <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="company">Company</label>
                <input type="text"  value={data.company} onChange={onChangeHandler} name='company'/>
                {errors.company && <span style={{fontSize:"12px",color:"red"}}>*{errors.company}</span>}
            </div>
            <div  style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="lname">State</label>
                <select name="state" onChange={onChangeHandler}>
                    <option value="YourState">California</option>
                    <option value="New jersey">New Jersey</option>
                    <option value="Texas">Texas</option>
                    <option value="Florida">Florida</option>
                </select>
                {errors.state && <span style={{fontSize:"12px",color:"red"}}>*{errors.state}</span>}
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="describe">How would you describe yourself?</label>
            <select name="describe" className='select' onChange={onChangeHandler}>
                <option value="Aerotect">Aerotect</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full stack Developer">Full stack Developer</option>
            </select>
            {errors.describe && <span style={{fontSize:"12px",color:"red"}}>*{errors.describe}</span>}
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="Distributor">Preferred Distributor:</label>
            <select name="Distributor" className='select' onChange={onChangeHandler}>
                <option value="">Default</option>
                <option value="Rita">Rita</option>
                <option value="Sam">Sam</option>
                <option value="John">John</option>
            </select>
            {errors.Distributor && <span style={{fontSize:"12px",color:"red"}}>*{errors.Distributor}</span>}
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="describe">Additional Information</label>
            <textarea name="additional"  value={data.additional} onChange={onChangeHandler} cols="20" rows="5"></textarea>
            {errors.additional && <span style={{fontSize:"12px",color:"red"}}>*{errors.additional}</span>}
        </div>
        <div>
            <input type="checkbox" onChange={onChangeHandler} style={{all:"revert"}} name="add" id="check" />
            <label htmlFor="check">I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
        </div>
        <div style={{"textAlign":"center"}}>
            <button className='btn' onClick={submitHandler}>
            Submit  
            <i className="fa-solid fa-arrow-right btnarrow"></i>
            </button>
        </div>

        <div className="contact-container">
      {isSubmitted && <SubmissionMessage />}
    
        
        <div style={{ textAlign: 'center' }}>
        
        </div>
      </div>
    </div>

    
  );
};

export default Midfold;

