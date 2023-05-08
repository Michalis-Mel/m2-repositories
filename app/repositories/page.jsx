"use client";
import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";

export const metadata = {
  title: "Repositories",
};

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/Michalis-Mel/repos",
    {
      //Refetch the data from thhe API every 60 seconds
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data;
}

const Repositories = async () => {
  const repositories = await fetchRepos();
  return (
    <div className="repos">
      <div className="row">
        <h1>My Repositories</h1>
        <div className="repos-list">
          {repositories.map((repo) => (
            <>
              <Tilt key={repo.id} className="repo">
                <div className="repo_con">
                  <h4>{repo.name}</h4>
                  <span>
                    {repo.private ? `Private Repository` : `Public Repository`}
                  </span>
                  <p>{repo.description}</p>
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    className="git_link"
                  >
                    Check it out on <VscGithubInverted size={30} />
                  </Link>
                </div>
              </Tilt>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
