import React, { useEffect, useRef } from "react";
import "./Skills.css";
import Node from "../../assets/node.png";

const Skills = () => {
  const newSkillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newSkillsRef.current.classList.add("animed-left");
        observer.unobserve(newSkillsRef.current);
      }
    });
    observer.observe(newSkillsRef.current);
  });

  return (
    <div ref={newSkillsRef} id="skills" className="Skills">
      <div className="Front-end">
        <h1>Front-End</h1>
        <ul>
          <li>
            <h3>
              - JavaScript{" "}
              <img
                src="https://simpleicons.org/icons/javascript.svg"
                alt="JavaScript Logo"
                class="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - React{" "}
              <img
                src="https://simpleicons.org/icons/react.svg"
                alt="React Logo"
                class="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - HTML / CSS{" "}
              <img
                src="https://simpleicons.org/icons/html5.svg"
                alt="HTML Logo"
                class="logo"
              />
              <img
                src="https://simpleicons.org/icons/css3.svg"
                alt="CSS Logo"
                class="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Tailwind CSS{" "}
              <img
                src="https://simpleicons.org/icons/tailwindcss.svg"
                alt="Tailwind CSS Logo"
                class="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Bootstrap{" "}
              <img
                src="https://simpleicons.org/icons/bootstrap.svg"
                alt="Bootstrap Logo"
                class="logo"
              />
            </h3>
          </li>
        </ul>
      </div>
      <div className="Back-end">
        <h1>Back-end</h1>
        <ul>
          <li>
            <h3>
              - Node.js <img src={Node} alt="Node.js Logo" class="logo" />
            </h3>
          </li>
          <li>
            <h3>
              - Python{" "}
              <img
                src="https://simpleicons.org/icons/python.svg"
                alt="Python Logo"
                class="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Django{" "}
              <img
                src="https://simpleicons.org/icons/django.svg"
                alt="Django Logo"
                class="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - MongoDB{" "}
              <img
                src="https://simpleicons.org/icons/mongodb.svg"
                alt="MongoDB Logo"
                class="logo"
              />
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
