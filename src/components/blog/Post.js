import React from "react";

function Posts() {
  return (
    <div className="home">
      <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
                <h1 className="mt-5">Details of order</h1>
                <form style={{ backgroundColor: '#3d3c37', width:'600px'}} >
                    <label style={{ color: 'white'}}>
                        Full name:
                        <input type="text" name="name" style={{ width:'550px'}} />
                    </label>
                    <br></br>
                    <label style={{ color: 'white'}}>
                        Address:
                        <input type="text" name="name" style={{ width:'550px'}}/>
                    </label>
                    <br></br>
                    <label style={{ color: 'white'}}>
                        Order list:
                       <input type="text" name="name" style={{ width:'550px'}}/>
                    </label>
                    <br></br>
                    <label style={{ color: 'white'}}>
                        Review:<br></br>
                        <input type="text" name="name" style={{ width:'550px', height: "300px"}}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                    <br/><br/><br/>
                </form>
                
            </div>
            <div class="col-lg-5">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src="https://cdn-icons-png.flaticon.com/512/6374/6374385.png"
                    alt=""
                />
                <p>
                Для доставки должен быть обеспечен проезд по указанному адресу без 
                нарушения ПДД. Сотрудник службы доставки позвонит вам за час до приезда. 
                На месте он ждёт 15 минут и уезжает. Если вы не сможете получить заказ, 
                повторная доставка оплачивается отдельно. Если вы не приняли заказ в 
                назначенный срок, он отменяется. В случае предоплаты заказа, деньги 
                будут возвращены в течение 10 календарных дней.
                </p>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Posts;