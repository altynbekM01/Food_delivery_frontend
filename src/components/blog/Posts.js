import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.atorus.ru/sites/default/files/upload/image/SovetyTuristam/3003/coffee-6129816_1920.jpg"
                alt=""
              />
              <br/><br/><br/><br/><br/><br/>
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Sterns of order</h1>
              <p>
              Услуг официанта потребителям является обязательным условием
               для такой категории объектов общественного питания. Услугу
                «обслуживание» невозможно заказать без заказа еды и напитков.
              </p>
              <br/><br/><br/>
              <p>
              Проидите дальше что бы заказать еду
              </p>
              <br/><br/><br/><br/><br/><br/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;