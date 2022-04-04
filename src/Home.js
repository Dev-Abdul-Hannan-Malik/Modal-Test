import React, {useState} from "react";
import data from "./data";
import Modal from './Modal'

const Home = () => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);


  const getData = (img, title, desc) =>{
      let tempData = [img, title, desc];
      setTempData(item => [1, ...tempData])

      return setModal(true);
  }
  return (
    <>
      <section className="py -4 py-lg-5 container">
        <div className="row justify-content center align-item-center">
          {data.cardData.map((item, index) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.imgSrc} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                    <button className="btn btn-primary" onClick={() => getData(item.imgSrc, item.title, item.desc)}>Click Me</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
            {
              modal === true ? <Modal img={tempData[1]} title={tempData[2]} desc={tempData[3]} hide={() => setModal(false)}/>: ''
            }

    </>
  );
};

export default Home;
