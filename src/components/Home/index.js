import React, { useState, useEffect } from "react";
import "./styles.css";
import Typical from "react-typical";
import axios from "axios";
import Repos from "../Repos";

function Home() {
  const [respositories, setRespositories] = useState([]);
  useEffect(() => {
    fetchRepositories("wasiquehaider");
  }, []);

  const fetchRepositories = async (userName) => {
    try {
      const result = await axios(
        `https://api.github.com/users/${userName}/repos?sort=created&direction=desc`
      );
      setRespositories(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-blue-200 leading-relaxed tracking-wide flex flex-col">
      <div className="container mx-auto h-screen">
        <div className="text-center justify-center items-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-7xl font-black leading-tight">
            Wasique Haider
          </h1>
          <p className="inline-block leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
            I am a{" "}
            <Typical
              steps={[
                "Mobile Developer! 📴",
                2000,
                "Web Developer! 💻",
                2000,
                "Tech Savvy! 🧑‍💻",
                2000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>

        <div className="flex items-center w-full mx-auto content-end">
          <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-editor w-1/2 rounded shadow-xl">
            <Typical
              steps={[
                "console.log('Hello Watchers. Welcome to my Portfolio.')",
                2000,
              ]}
              loop={1}
              wrapper="p"
              className="my-3 mx-4 sourceCode editor-text"
            />
          </div>
        </div>
      </div>
      <Repos repos={respositories} />
    </div>
  );
}

export default Home;
