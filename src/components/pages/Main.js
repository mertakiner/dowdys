import React, { Component } from 'react';
import img1 from '../file/img1.jpg';
import img2 from '../file/img2.jpg';
import img3 from '../file/img3.jpg';
import img4 from '../file/img4.jpg';
import '../styles/Main.css';

class Main extends Component {

    state = {
        data: [
            { id:1, img: img1 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:2, img: img2 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:3, img: img3 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:4, img: img4 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:5, img: img1 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:6, img: img1 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:7, img: img2 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:8, img: img3 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:9, img: img4 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            { id:10, img: img1 , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            // { id:6, img:"img6" , title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
            // { id:7, img:"img7" , title:"Some quick example text to build on the card title and make up the bulk of the card's content."}
        ]
    }


    render() {
        return (
            <div className="container main">
                
                {this.state.data.map((item) => (
                    <div key={item.id} className="card image" style={{width: "18rem"}}>
                        <img src={item.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        </div>
                    </div>

                ))}
                
            </div>
        )
    }
}
    
export default Main;
