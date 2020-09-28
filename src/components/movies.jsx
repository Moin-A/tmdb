import React, { Component } from "react";
import http from "../Service/httpService";
import normalize from "../Service/Normalize";
import Pagination from "./common/Pagination";
import paginate from "./utils/paginate";

class Movies extends Component {
  state = { Movieslist: [], pageSize: 4, currentPage: 1 };

  componentDidMount = async () => {
    const response = await http.request({
      url:
        "https://api.themoviedb.org/3/movie/popular?api_key=f4ccbd61ace52edd9db1d3b45ea3c35b&language=en/",
    });
    const normalisedlist = normalize(response.data.results);
    this.setState({ Movieslist: normalisedlist });
  };

  handlechange = (item) => {
    this.setState({ currentPage: item });
  };
  render() {
    const { Movieslist: allMovies, pageSize, currentPage } = this.state;
    const Movieslist = paginate(allMovies, pageSize, currentPage);
    debugger;
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Genre</td>
              <td>Stock</td>
              <td>Rate</td>
            </tr>
          </thead>
          <tbody>
            {Movieslist.map((item, index) => (
              <tr>
                <td key={`${index}tittle`}>{item.original_title}</td>
                <td key={`${index}genre`}>
                  {item.genre_ids.map((item) => item + " , ")}
                </td>
                <td key={`${index}stock`}>ajnxja</td>
                <td key={`${index}`}>xajn</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.Movieslist.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlechange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
