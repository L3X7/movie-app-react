import React, { Component } from "react";
import Carousel from "../../components/home/Carousel.component";
import TopTenMovies from "../../components/home/TopTenMovies.component";
import Footer from "../../components/template/footer/Footer.component";
import Nav from "../../components/template/nav/Nav.component";

class Home extends Component {
  render() {
    return <div className="h-screen bg-slate-700">
        <Nav></Nav>
        < div className="flex flex-col">
            <div>
              <Carousel></Carousel>
            </div>
            <div>
              <TopTenMovies></TopTenMovies>
            </div>
        </div>
        <Footer></Footer>

    </div>
  }
}

export default Home;
