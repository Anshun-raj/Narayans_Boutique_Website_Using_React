import "../Style/About.css";
import aboutImg from "../Images/about.jpg";
import { Component } from "react";
class About extends Component
{
    render()
    {
        return(
            <div className="about">
               <h2>About Us</h2>
              <div className="aboutInfo">
                 <div className="aboutLeft">
                  <img src={aboutImg} alt="narayansYard" title="narayansYard"/>
               </div>
               <div className="aboutRight">
                  <h3>Boigraphy</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam facilis, maiores blanditiis reprehenderit quod. Fuga sapiente labore, vel veritatis id tenetur porro at alias? Voluptas laudantium rerum necessitatibus accusamus omnis corrupti excepturi, pariatur mollitia earum, nihil quasi odio! Nihil perferendis tempora veniam numquam unde nemo ullam repellendus laborum maxime vitae pariatur quo, beatae dolor rem cupiditate vel eaque officiis atque accusamus. Illo nisi repellendus ducimus dolor minima quasi magnam, cupiditate perferendis fugit et maxime ipsa sequi corporis natus voluptates optio pariatur adipisci sint eligendi enim, deserunt totam doloremque nostrum. Assumenda culpa cumque error. Ex quidem repudiandae, nobis facere, optio doloremque nesciunt a quam odio officia aliquam laboriosam voluptate ad architecto saepe. Quisquam provident nulla exercitationem pariatur vitae temporibus culpa incidunt dicta molestias, totam in fugit cum voluptatum autem consectetur aliquid vero corrupti, id cupiditate eaque sit, aut asperiores. Praesentium, iure atque ad corrupti ea ipsa optio voluptatibus dolore dolorum, magnam itaque facere impedit provident totam accusamus natus porro possimus quia sed consequatur ut quis quo. Aut deleniti possimus amet architecto suscipit voluptates minima unde soluta dignissimos quaerat recusandae ab, aliquid quisquam? Enim suscipit at ratione, reiciendis repellat dignissimos laborum facere quam rem esse praesentium hic vitae soluta voluptate, nemo nesciunt voluptatem facilis. Alias, iusto illum quam dicta voluptates distinctio, quibusdam eos dolores odit perspiciatis ab natus, saepe ipsum? Omnis, hic quasi. Itaque assumenda minima, ad deserunt cumque laboriosam nemo explicabo repellendus, similique ipsam voluptates porro iste eligendi quo, fuga quam non.</p>
               </div>
              </div>
            </div>
        )
    }
}
export default About;