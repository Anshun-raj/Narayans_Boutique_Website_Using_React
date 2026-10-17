import { useState } from "react";
import "../Style/Contact.css";
function Contact()
{
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [age, setAge] = useState();
     const [rate, setRate] = useState();
     const [msg, setMsg] = useState("");

    function collectData(e)
    {
        console.log(name,email,age,rate,msg);
        e.preventDefault();
    }
    function summitMsg()
    {
        alert("Data has been Submitted");
    }
    return(
        <div className="contact">
           <h2>Contact Us</h2>
           <div className="contactData">
              <form action="" method="get" onSubmit={collectData}>
                 <input type="text" name="name" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/>
                 <input type="email" name="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                 <input type="number" name="age" placeholder="enter your age" min={18} max={50} onChange={(e)=>setAge(e.target.value)}/>
                 <select name="rate" onChange={(e)=>setRate(e.target.value)}>
                  <option>select rating</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <input type="text" name="msg" placeholder="enter your message" max={200} onChange={(e)=>setMsg(e.target.value)}/>
                <button className="btn5" onClick={summitMsg}>Submit Now</button>
              </form>
           </div>
        </div>
    )
}
export default Contact;