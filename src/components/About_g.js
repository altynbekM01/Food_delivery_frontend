import React from "react";
import { Link } from "react-router-dom";
 
function About() {

  return (
    <div className="about">
    <Link to="/contact" style={{ textDecoration:'none', color:'black'}}>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-553.png"
              alt=""
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-549.png"
              alt=""
              style={{height:'300px'}}
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://pngimg.com/uploads/burger_king/burger_king_PNG9.png"
              alt=""
              style={{height:'300px'}}
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            <br/><br/><br/>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Restaurants</h1>
            <p>
            Вкусная еда с доставкой, заказывайте по ссылке блюдо которое 
            вам по душе. Еда на любой вкус. Бургеры, пицца, сендвичи, супы, 
            выпечка и рыбные блюда. Быстро и вкусно. В любую точку Алматы.
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://pngimg.com/uploads/kfc_food/kfc_food_PNG2.png"
              alt=""
              style={{height:'200px'}}
            />
            <p>
            Glovo привезет все, что угодно, вам домой. Загрузите приложение и заказывайте.
            Продукты, еда и многое другое. Загрузите приложение и попробуйте. доставка в 
            вашем городе. Быстрая доставка домой. Следите доставкой заказа. Простая и безопасная.
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://png.monster/wp-content/uploads/2022/07/png.monster-21.png"
              alt=""
              style={{height:'200px'}}
            />
            <p>
            Все доставки за 99₸. А самую первую доставку привезем бесплатно. Делайте 
            заказ на сайте. Закажите блюда из любимых кафе и ресторанов домой или в офис. 
            Приедут за 30 минут. Все доставки за 99 тенге. Быстрый заказ еды. Доставка от 30 минут.
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://abrakadabra.fun/uploads/posts/2022-02/1643701145_8-abrakadabra-fun-p-burger-bez-fona-21.png"
              alt=""
              style={{height:'200px'}}
            />
            <br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
}


export default About;