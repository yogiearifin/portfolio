const initialState = {
  sayembara: {
    name: "Sayembara",
    slug: "sayembara",
    tagline: "Find the Perfect Contest for You!",
    link: "https://sayembara-ga6.herokuapp.com/",
    repo: "https://gitlab.com/glints-academy-6/team-e/front-end",
    img: [
      require("../../assets/images/sayembara1.png"),
      require("../../assets/images/sayembara2.png"),
      require("../../assets/images/sayembara3.png"),
      require("../../assets/images/sayembara4.png"),
      require("../../assets/images/sayembara5.png"),
      require("../../assets/images/sayembara6.png"),
    ],
    desc_head:
      "Sayembara is an online platform for creating and joining graphic design contest.",
    desc: "In Sayembara, users are divided into two roles. The first role is provider. Providers can create contest that suits their needs. They set how much the prize money, due date, announcement date, and criteria of the contest. The second role is participant. Participants can join contests that providers create. They may submit up to three works per contest. The providers may pick them as a winner and if they do win, they can receive the prize money.",
    desc_short: "An online platform for graphic design contest.",
    video_link: "https://www.youtube.com/embed/xCECMFUDp70",
  },
  hackernews: {
    name: "Hackernews",
    slug: "hackernews",
    tagline: "Hacked your newsfeed since 2020",
    link: "https://hackernews-lite.netlify.app/",
    repo: "https://github.com/yogiearifin/hackernews",
    img: [
      require("../../assets/images/hn1.png"),
      require("../../assets/images/hn2.png"),
      require("../../assets/images/hn3.png"),
    ],
    desc_head:
      "Hackernews Lite is a simple news reader that use Hackernews API.",
    desc: "The API get the news from many website and store the contents and links into their database. This site is created by Yogie to practice fetching data from API and filtering data using querry. The API is public and can be used by everyone. In this site, Yogie specifically filtered the data so that it only shows latest news, news that has many views, and job vacancy news. He also limit the news to show the maximum of 20 news.",
    desc_short: "A simple newsreader using Hackernews API.",
  },
  movieapp: {
    name: "TMDB App",
    slug: "movieapp",
    tagline: "A simple TMDB app",
    link: "https://tmdb-app-yogie.herokuapp.com/",
    repo: "https://gitlab.com/yogiearifin/tmdb-app",
    img: [
      require("../../assets/images/tmdb1.png"),
      require("../../assets/images/tmdb2.png"),
      require("../../assets/images/tmdb3.png"),
      require("../../assets/images/tmdb4.png"),
    ],
    desc_head: "TMDB APP is a simple app utilizing TMDB API.",
    desc: "It allow users to browse their favorite movies, TV series, people, and many more. It also comes with many detailed info for each movie, tv series, cast member, and crew member.",
    desc_short: "A simple movie browsing app made by Yogie.",
  },
};

const projects = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
  }
};
export default projects;
