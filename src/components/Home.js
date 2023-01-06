import React from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
function Home(props) {




  return (
    <div className="home">
      
      <div class="container">
        
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <Link to="/about" style={{ textDecoration:'none', color:'black'}}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://1000logos.net/wp-content/uploads/2022/09/Wolt-Logo.png"
              alt=""
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            </Link>
            <Like/>

            <Link to="/about" style={{ textDecoration:'none', color:'black'}}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Glovo_logo.png"
              alt=""
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            </Link>
            <Like/>
            <Link to="/about" style={{ textDecoration:'none', color:'black'}}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://pngimg.com/uploads/yandex/yandex_PNG14.png"
              alt=""
            />
            <p>Description: just discriptions</p>
            <p>Rating: 3.8</p>
            </Link>
            <Like/>
            <br/><br/><br/>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Delivery company</h1>
            <p>
            Хочешь заказывать вкуснейшие блюда с доставкой? Просто скачай Wolt и наслаждайся.
            Проголодались? Скачай Wolt и закажи лучшую еду с доставкой куда угодно. Доставка
            вкусной еды. Голоден? Скачай сейчас.
              <h>{props.name}</h>
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://staria.com/wp-content/uploads/2019/01/Wolt_logo_300x150.png"
              alt=""
            />
            <p>
            Glovo привезет все, что угодно, вам домой. Загрузите приложение и заказывайте.
            Продукты, еда и многое другое. Загрузите приложение и попробуйте. доставка в 
            вашем городе. Быстрая доставка домой. Следите доставкой заказа. Простая и безопасная.
              <h>{props.name}</h>
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i0.wp.com/blog.glovoapp.com/wp-content/uploads/2021/12/bolsa-Glovo.png?ssl=1"
              alt=""
            />
            <p>
            Все доставки за 99₸. А самую первую доставку привезем бесплатно. Делайте 
            заказ на сайте. Закажите блюда из любимых кафе и ресторанов домой или в офис. 
            Приедут за 30 минут. Все доставки за 99 тенге. Быстрый заказ еды. Доставка от 30 минут.
              <h>{props.name}</h>
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-459.png"
              alt=""
            />
            <br/><br/><br/><br/><br/>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;