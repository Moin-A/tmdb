import React, { Component } from "react";
import http from "../Service/httpService";
import normalize from "../Service/Normalize";
import Pagination from "./common/Pagination";

class Movies extends Component {
  state = { Movieslist: [], size: 4, currentPage: null };

  componentDidMount = async () => {
    const response = await http.request({
      url:
        "http://api.themoviedb.org/3/movie/popular?api_key=f4ccbd61ace52edd9db1d3b45ea3c35b&language=en/",
    });
    const normalisedlist = normalize(response.data.results);
    this.setState({ Movieslist: normalisedlist });
  };

  handlechange = (item) => {
    this.setState({ currentPage: item });
  };
  render() {
    const length = this.state.Movieslist.length;
    const { size, currentPage } = this.state;
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
            {this.state.Movieslist.map((item, index) => (
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
          itemscount={this.state.Movieslist.length}
          pagesize={this.state.size}
          currentPage={this.state.currentPage}
          onPageChange={this.handlechange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
