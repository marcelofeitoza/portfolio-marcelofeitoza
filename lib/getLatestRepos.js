import axios from "axios";

const getLatestRepos = async (data, token) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername;

    // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    if (token) {
      const res = await axios.get(
        `https://gh-pinned-repos.egoist.sh/?username=${username}`,
        // {
        //   headers: {
        //     Authorization: `token ${token}`,
        //   },
        // }
      );
      let latestSixRepos = res.data;
      console.log("LATEST 6 repos", latestSixRepos);
      return latestSixRepos;

      console.log(res)
    } else {
      const res = await axios.get(
        `https://gh-pinned-repos.egoist.sh/?username=${username}`
      );
      let latestSixRepos = res.data;

      return latestSixRepos;
      console.log(res)
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
