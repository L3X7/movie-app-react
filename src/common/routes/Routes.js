import App from "../../App";
import Home from "../../pages/home/Home.page";
import Movie from "../../pages/movie/Movie.page";

const routes = [
  {
    path: "/",
    page: App,
  },
  {
    path: "/home",
    page: Home,
  },
  {
    path: "/movie",
    page: Movie,
  },
];

export default routes;
