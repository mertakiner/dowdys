import React, { Component } from "react";
import img1 from "../file/img1.jpg";
import img2 from "../file/img2.jpg";
import img3 from "../file/img3.jpg";
import img4 from "../file/img4.jpg";
import img5 from "../file/Mayi.jpg";
import img6 from "../file/Gastronometro1.jpg";
import img19 from "../file/Gastronometro2.jpg";
import img7 from "../file/Kombucha1.jpg";
import img18 from "../file/Kombucha2.jpg";
import img8 from "../file/Lafabrika1.jpg";
import img17 from "../file/Lafabrika2.jpg";
import img9 from "../file/Livetobloom1.jpg";
import img13 from "../file/Livetobloom2.jpg";
import img10 from "../file/Mayi1.jpg";
import img16 from "../file/Mayi2.jpg";
import img11 from "../file/Metro1.jpg";
import img14 from "../file/Metro2.jpg";
import img12 from "../file/Po1.jpg";
import img15 from "../file/Po2.jpg";

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
      { id: 5, img: img5, title: "Mayi Tuz", date: "Şubat 2020" },
      { id: 6, img: img6, title: "Gastrono Metro", date: "Ocak 2020" },
      { id: 7, img: img7, title: "Kombucha 2200", date: "Aralık 2019" },
      { id: 8, img: img8, title: "La Fabrika", date: "Kasım 2019" },
      { id: 9, img: img9, title: "Livetobloom", date: "Ekim 2019" },
      { id: 10, img: img10, title: "Mayi Tuz", date: "Temmuz 2019" },
      { id: 12, img: img12, title: "Po Juicery", date: "Ocak 2019" },
      { id: 11, img: img11, title: "Metro", date: "Mayıs 2019" },
      { id: 13, img: img13, title: "Livetobloom", date: "Eylül 2018" },
      { id: 14, img: img14, title: "Metro", date: "Haziran 2018" },
      { id: 15, img: img15, title: "Po Juicery", date: "Mart 2018" },
      { id: 16, img: img16, title: "Mayi Tuz", date: "Ocak 2018" },
      { id: 17, img: img17, title: "La Fabrika", date: "Ekim 2017" },
      { id: 18, img: img18, title: "Kombucha 2200", date: "Eylül 2017" },
      { id: 19, img: img19, title: "Gastrono Metro", date: "Ağustos 2017" },

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
