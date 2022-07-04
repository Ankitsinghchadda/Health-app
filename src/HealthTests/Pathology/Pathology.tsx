import React, { useState } from 'react'
import CircleImage from '../../components/CircleImage';
import Modal from '../../components/Modal';
import SquareCard from '../../components/SquareCards';
import './Pathology.css';

function Pathology() {
  const [show, setShow] = useState(false);

  async function showModal() {
     setShow(true);
  }

  async function hideModal() {
     setShow(false);
  }

  return (
    <div className='pathology'>
     <div className='pathology_banner'>
         <div className='banner_heading'>
             <div className='LabTin'>
               <div className='LAB'>LAB</div>
               <div className='TIN'>TIN</div>
               &nbsp;
             </div>
             <div className='DPath'>
                 Diagonostics <br /> Pathology
             </div>
             <br/>
         </div>
         <div className='book_test_form'>
            <h2>FULL BODY CHECK-UP</h2>
            <label>Name</label> 
            <input type='text' />
            <label>Mobile Number</label> 
            <input type='text' />
            <label>Pincode</label> 
            <input type='text' />
            <label>Choose a Package:</label>
               <select name="cars" id="cars">
               <option value="volvo">Volvo</option>
               <option value="saab">Saab</option>
               <option value="mercedes">Mercedes</option>
               <option value="audi">Audi</option>
               </select>
            <br />   
            <fieldset> 
            <input type='checkbox'/>
            <label>Terms And Conditions</label>
            </fieldset> 
            <br/>   
            <button className='myBtn' onClick={ async() => {
                await showModal();
            }}>
                BOOK NOW
            </button>
         </div>
     </div>   
     <div className='top_display'>
     <h2 className='top_text'>Get Yourself Checked</h2>
     <div className='icon_banner'>
       <CircleImage name="Hemogram" image="Image" />
       <CircleImage name="Liver Profile" image="Image" />
       <CircleImage name="Diabetes" image="Image" />   
       <CircleImage name="Lipid Profile" image="Image" />
       <CircleImage name="Thyroid Profile" image="Image" />
       <CircleImage name="Iron Deficiency" image="Image" />
       <CircleImage name="Thyroid Profile" image="Image" />
       <CircleImage name="Iron Deficiency" image="Image" />
     </div> 
     </div>
     <div className='package_display'>
       <h2 className='package_display_heading' >Our Health Packages</h2>
       <div className='package_cards'>
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." /> 
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
         <SquareCard heading="Basic Allergy Package" content="Book Regular Health Check-up Package- Aarogyam C Profile, a Basic Screening Preventive Health Check-up Profile including 64 tests." />
       </div>
     </div>
     <Modal show={show} handleClose={async() => {
         await hideModal()
     }}>
         <div className='modal_content'>
            <h2>Confirm Your Booking</h2>
            <div className='details'>
                <div>
                  <h4>Mobile Number: </h4>
                  <p>&nbsp;&nbsp;9893038464</p>   
                </div>
                <div>
                  <h4>Pincode: </h4>
                  <p>&nbsp;&nbsp;108007</p>   
                </div>
                <div>
                  <h4>Package Choosen: </h4>
                  <p>&nbsp;&nbsp;Jagdish Pratap Singh</p>   
                </div>
                <div>
                  <h4>Address:&nbsp;&nbsp; </h4>
                  <textarea></textarea>
                </div>
            </div>
         </div>
     </Modal>
    </div>
  )
}

export default Pathology