import React, { Component } from "react";
import img1 from "../file/img1.jpg";
import img2 from "../file/img2.jpg";
import img3 from "../file/img3.jpg";
import img4 from "../file/img4.jpg";
import img5 from "../file/Mayi.jpg";
import hakkinda from "../file/hakkinda.jpg";
import logo from "../file/Artboard.jpg";
import "../styles/Main.css";

class Main extends Component {
  state = {
    data: [
      { id: 1, img: img1, title: "Antre Gourmet", date: "Temmuz 2020" },
      { id: 2, img: img2, title: "Sjorinn", date: "Temmuz 2020" },
      { id: 3, img: img3, title: "The Simco", date: "Mart 2020" },
      { id: 4, img: img4, title: "Hande Akıner", date: "Mart 2020" },
      { id: 5, img: img5, title: "Mayi Tuz", date: "Temmuz 2020" },
      { id: 6, img: img2, title: "Sjorinn", date: "Temmuz 2020" },
      { id: 7, img: img3, title: "Sjorinn", date: "Temmuz 2020" },
      { id: 8, img: img4, title: "Sjorinn", date: "Temmuz 2020" },
      { id: 9, img: img1, title: "Sjorinn", date: "Temmuz 2020" },
      { id: 10, img: img2, title: "Sjorinn", date: "Temmuz 2020" },
      // { id:6, img:"img6" , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
      // { id:7, img:"img7" , title:"Some quick example text to build on the card title and make up the bulk of the card's content."}
    ],
  };

  render() {
    return (
      <div>
        {/* Dowdy's Kimdir */}
        <div className="container who"> 
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={logo} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-sm">
                        {/* <h6 className="display-4">Kalite - Marka</h6> */}
                        <p className="lead">
                             Markamıza dair her şey bu mutfaktan çıkıyor.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* İşler */}
        <div className="container main">
          {this.state.data.map((item) => (
            <div
              key={item.id}
              className="card image"
              style={{ width: "18rem" }}
            >
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text text-secondary">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Hakkında */}
        <div id="about" className="container about">
          <img src={hakkinda} className="card-img-top" alt="..." />
          <p className="card-text text-center">Neriman Demirci ve Hande Akıner</p>
        </div>
        {/* İletişim */}
        <a href="https://mert547680.typeform.com/to/JbkIG9qp" class="btn btn-dark btn-lg active btn-block button" role="button" aria-pressed="true">Bizimle iletişime geçmek için tıklayınız.</a>    
      </div>
    );
  }
}

export default Main;
