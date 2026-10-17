import { useState } from "react";
import "../Style/Home.css";
function Home()
{
    const[details,setDetails]=useState(false);
    return(
        <div className="home">
           <div className="homeInfo">
               <h2>"Clothes mean nothing until someone lives in them"</h2>
               {details?<p>"Fuga sapiente labore,vel veritatis id tenetur porro at alias?Voluptas laudantium rerum necessitatibus accusamus omnis corrupti excepturi,pariatur mollitia earum,nihil quasi odio! Nihil perferendis tempora veniam numquam unde nemo ullam repellendus laborum maxime vitae pariatur quo,beatae dolor rem cupiditate vel eaque officiis atque accusamus.Illo nisi repellendus ducimus dolor minima quasi magnam, cupiditate perferendis fugit et maxime ipsa sequi corporis natus voluptates optio pariatur adipisci sint eligendi enim, deserunt totam doloremque nostrum."</p>:<p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam facilis, maiores blanditiis reprehenderit quod."</p>}
               <button className="btn" onClick={()=>setDetails(!details)}>{details?"Know Less":"Know More"}</button>
           </div>
        </div>
    )
}
export default Home;