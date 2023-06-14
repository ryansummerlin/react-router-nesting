import {
  Route,
  Switch,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  const { url } = useRouteMatch();
  
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map(movie => (
          <NavLink activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              key={movie.id}
              to={`${url}/${movie.id}`}>{movie.title}</NavLink>
        ))}
      </nav>
      <Switch>
        <Route path={`${url}/:movieId`}>
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
