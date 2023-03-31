import React from "react";
import cv from "../assets/cv.pdf";
import satrana from "./../assets/satrana.jpg";

const About = () => {
    return (
        <section className="about" id="aboutSection">
            <div className="sectionTitle">
                <h2>A propos de moi</h2>
            </div>
            <div className="presentationContainer">
        <div className="pictureSection">
          <img src={satrana} alt="photographie de profil" className="profilePicture" />
        </div>
        <div className="presentation">
            <div className="presentationAbout">
                <p>
                    Hello! Je m'appelle Satrana, je suis développeur junior, je suis localisée en Ile-de-France. 
                    <br /> En 2021, j'ai décidé d'exércer un métier
                    passionnant, porteur et innovant : celui de développeur!
                    <br /> Après avoir effectué une formation de développeur Front-End chez OpenClassrooms, pendant un an. 
                    J'ai décidé de poursuivre une formation de développeur C/C++ Linux embarqué pour  <br />
                    <br /> Je suis actuellement à la recherche d'offres dans la région
                    Ile-de-France. (Mais je suis aussi à l'écoute pour des offres dans toute la France)
                     Je suis passionnée par les nouvelles technologies,
                    le chant, la lecture et la pâtisserie
                    <br />
                    <br />
                    Je suis de nature curieuse, j’aime apprendre et découvrir de nouvelles choses. 
                    <br /> <br />Bonne visite!
                </p>
            </div>
            <div className="downloadCVButton">
                <a href={cv} download className="downloadCVLink">
                Télécharger CV
                </a>
            </div>
        </div>
      </div>
        </section>
    );
};

export default About;