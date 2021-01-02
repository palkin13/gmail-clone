import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";



function SendMail() {

  const {register , handleSubmit , errors} = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add(
      {
         to : formData.to,
         subject : formData.subject,
         message : formData.message,
         timestamp : firebase.firestore.FieldValue.serverTimestamp()
      }
    );
    dispatch(closeSendMessage());
  };
  

 

return(
<div className="sendMail">
  <div className="sendMail_header">
    <h3>New Message..</h3>
    <CloseIcon
     onClick = {() => dispatch(closeSendMessage())}
     className="sendMail_close"/>
  </div> 

  <form onSubmit={handleSubmit(onSubmit)}>

    <input type ="email" 
    placeholder="To" 
    name="to" 
    ref={register( { required : true })}
    />

{errors.to && <p className="sendMail_error">To is Required!</p>}

    <input type ="text" 
    placeholder="Subject" 
    name="subject"
    ref={register( { required : true })}
    />

{errors.subject && <p className="sendMail_error">Subject is Required!</p>}

    <input type ="text" 
    placeholder="Message.." 
    className="sendMail_message" 
    name="message" 
    ref={register( { required : true })}
    />

{errors.message && <p className="sendMail_error">Message is Required!</p>}

    <div className="sendMail_options">
 
    <Button className="sendMail_button"
     variant="contained" 
     color="primary"
     type="submit">
      Send
     </Button>
    </div>

   </form>
  




  
</div>
);
}

export default SendMail;