import React, { useEffect, useState } from "react";
import { MovieService } from "../../services/MovieService";

const Movies = () => {
  const [state, setState] = useState({
    movies: [],
  });

  const [search, setSearch] = useState("")

  const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"))

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await MovieService.getMovies();
        console.log("res", res);
        if(loggedinUser.name === "Admin") {
            console.log("In admin")
           return setState({...state, movies: res.data})
        }
        console.log("hello")
        let userRecommendedMovies = res.data.filter(e => e.genre == loggedinUser.genre || e.actor == loggedinUser.favouriteActor)
        // let x = loggedinUser.age < 9 ? userRecommendedMovies.push(res.data.filter(e => e.rated === "C")) : ""
        if(loggedinUser.age < 9) {
            userRecommendedMovies = userRecommendedMovies.filter(e => e.rated !== "A")
            userRecommendedMovies.push(res.data.filter(e => e.rated === "C"))
        }
        console.log("recomm", userRecommendedMovies.flat())
        setState({ ...state, movies: userRecommendedMovies.flat() });
      } catch (error) {
        console.log("error", error);
      }
    };

    getMovies();
  }, []);

  const { movies } = state;
  return (
    <div>
      <h3 className="text-center mt-1">Movies List</h3>
      <div>
      <input value={search} onChange = {(e) => setSearch(e.target.value)} className="form-control m-auto w-50 mt-4" type="text" placeholder="Search Movies" />
      </div>

      <div className="container bg-light mt-5 px-4 py-4">
        <div className="grid">
          <div className="row">
            {movies.length &&
              movies.filter((z) => {
                if(search === "") {
                return z 
                } else {
                    return z.name.toLowerCase().includes(search.toLowerCase())
                }
              }).map((e) => (
                <div key={e.id} className="col-6 mt-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <img className="image-size" src={e.image} alt="" />{" "}
                        </div>
                        <div className="col-6">
                          <p>
                           {e.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
