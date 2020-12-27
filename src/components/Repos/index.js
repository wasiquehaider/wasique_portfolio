import React from "react";
import "./styles.css";
import _ from "lodash";

function Repos({ repos }) {
  console.log("repos", repos);
  const listRepos = !_.isEmpty(repos) ? (
    repos.slice(0, 10).map((item) => (
      <a
        key={item.id}
        href={item.html_url}
        target="_blank"
        rel="noreferrer"
        className="github-card bg-white my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"
        data-github="Nexmo/nexmo-ruby"
      >
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="github-card__meta">
          <span
            className="github-card__language-icon"
            style={{ color: "#7A0410" }}
          >
            ●
          </span>{" "}
          {item.language}
        </span>
        <span className="github-card__meta">
          <i className="fa fa-star" aria-hidden="true"></i>
          <span data-stars>{item.stargazers_count}</span>
        </span>
        <span className="github-card__meta">
          <i className="fa fa-code-fork" aria-hidden="true"></i>
          <span data-forks>{item.forks_count}</span>
        </span>
      </a>
    ))
  ) : (
    <h4>No Repositories</h4>
  );
  return (
    <section class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 text-gray-800">
        <h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
          GitHub Repositories
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-4/12 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1 p-10">
        {listRepos}
      </div>
    </section>
  );
}

export default Repos;
