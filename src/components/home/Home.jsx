import React, { Fragment } from 'react';
import './styles.css';

const Home = () => (
  <Fragment>
    <section className='jumbotron jumbotron-fluid main-custom'>
      <div className="cover-content">
        <h1 className="cover-title pl-4 texte-right"> Walker<br />Friendly</h1>
      </div>
    </section>

    <section className='about-custom d-flex justify-content-center'>

      <div className="card-deck home-custom">

        <div className="card d-flex align-items-center card-custom home-box">
          <img src="https://res.cloudinary.com/dbjyysrv0/image/upload/v1567547108/hearts.png" className="card-img-top home-img" alt="Heart" />
          <div className="card-body mt-4 d-flex align-items-end text-center">
            <div className="col">
              <h3 className="card-title">Encontre um Dog Walker!</h3>
              <p className="card-text">Passear com cães diariamente proporciona saúde física e mental</p>
            </div>
          </div>
        </div>

        <div className="card d-flex align-items-center card-custom home-box">
          <img src="https://res.cloudinary.com/dbjyysrv0/image/upload/v1567565837/happy.png" className="card-img-top home-img" alt="happy" />
          <div className="card-body d-flex align-items-end text-center">
            <div className="col">
              <h3 className="card-title">Seu cachorro mais feliz!</h3>
              <p className="card-text">Brincando, correndo e se divertindo com outros cães.</p>
            </div>
          </div>
        </div>
        <div className="card d-flex align-items-center card-custom home-box">
          <img src="https://res.cloudinary.com/dbjyysrv0/image/upload/v1567565843/walker.png" className="card-img-top home-img" alt="bewalker" />
          <div className="card-body mt-4 d-flex align-items-end text-center">
            <div className="col">
              <h3 className="card-title">Seja um Dog Walker!</h3>
              <p className="card-text">Se você também ama cachorros, cadastre-se e junte-se a nós!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Home;