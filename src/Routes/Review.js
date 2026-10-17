import { useState } from "react";
import reviewImg1 from "../Images/review1.jpg";
import reviewImg2 from "../Images/review2.jpg";
import reviewImg3 from "../Images/review3.jpg";
import "../Style/Review.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";


function Review()
{
    const[isCall1,setCall1]=useState(false);
    const[isCall2,setCall2]=useState(false);
    const[isCall3,setCall3]=useState(false);
    function Calling1()
    {
        setCall1(!isCall1);
        alert("Calling John..");
    }
    function Calling2() {
    setCall2(!isCall2);
    alert("Calling Diana..");
    }
    function Calling3() {
    setCall3(!isCall3);
    alert("Calling Gaga..");
    }
    return(
         <div className="team">
      <h1>Our Team</h1>
      <div className="teamData">
        <div className="teamDataCard">
          <img src={reviewImg1} alt="" />
          <h3>John Lacy</h3>
          <div className="socialIcon">
            <AiFillFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
          <button onClick={Calling1} className="btn6">
            {isCall1 ? "Calling John..." : "Contact Now"}
          </button>
        </div>
        <div className="teamDataCard">
          <img src={reviewImg2} alt="" />
          <h3>Daina Bryan</h3>
          <div className="socialIcon">
            <AiFillFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
          <button onClick={Calling2} className="btn6">
            {isCall2 ? "Calling Diana..." : "Contact Now"}
          </button>
        </div>
        <div className="teamDataCard">
          <img src={reviewImg3} alt="" />
          <h3>Lady Gaga</h3>
          <div className="socialIcon">
            <AiFillFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
          <button onClick={Calling3} className="btn6">
            {isCall3 ? "Calling Lady..." : "Contact Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Review;