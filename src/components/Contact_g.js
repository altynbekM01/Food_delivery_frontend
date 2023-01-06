import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <Link to="/blog" style={{ textDecoration:'none', color:'black'}}>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.pngplay.com/wp-content/uploads/12/Apple-Juice-No-Background.png"
              alt=""
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://free-png.ru/wp-content/uploads/2022/04/free-png.ru-388.png"
              alt=""
              style={{height:'300px'}}
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-254.png"
              alt=""
              style={{height:'300px'}}
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            <br/><br/><br/>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Menu</h1>
            <p>
            Вкусная еда с доставкой, заказывайте по ссылке блюдо которое 
            вам по душе. Еда на любой вкус. Бургеры, пицца, сендвичи, супы, 
            выпечка и рыбные блюда. Быстро и вкусно. В любую точку Алматы.
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.pngmart.com/files/12/Fried-Chicken-Wings-PNG-Free-Download.png"
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
              src="https://pngicon.ru/file/uploads/picca.png"
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
              src="https://free-png.ru/wp-content/uploads/2022/04/free-png.ru-436.png"
              alt=""
              style={{height:'200px'}}
            />
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Contact;