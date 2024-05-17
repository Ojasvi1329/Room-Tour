// src/pages/AboutUs.js

import React from "react";
import TeamCard from "../components/TeamCard";
import "./AboutUs.css";

const AboutUs = () => {
  const teamMembers = [
    {
      image: "/images/CEEO.jpg",
      name: "Nikolaos Vlavianos PhD (MIT)",
      position: "CEO",
      linkedin:
        "https://www.linkedin.com/in/nikolaos-vlavianos-phd-mit-117b7a38/",
    },
    {
      image: "/images/Mike.jpg", // Replace with actual paths
      name: "Mike Festa ",
      position: "CTO ",
      linkedin: "https://www.linkedin.com/in/mfesta/",
    },
    {
      image: "/images/profile.jpg",
      name: "Ojasvi Patel ",
      position: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/ojasvi-p/",
    },
    {
      image: "/images/Prasad.jpg",
      name: "Prasad D",
      position: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/dev-pd/",
    },
  ];

  return (
    <div className="about-us">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
