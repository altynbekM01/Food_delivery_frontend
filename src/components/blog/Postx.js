import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div  class="home">
      <div class="container">

        <div class="row align-items-center my-5">
          <div class="col-lg-7">


            <h1 className="mt-5">Details of order</h1>
              <form style={{ backgroundColor: '#3d3c37'}}>
                <label style={{ color: 'white'}}>
                  Full name: className="home" class="container"
                  <input type="text" name="name" />
                </label>
                <br></br>
                <label style={{ color: 'white'}}>
                  Address:
                 <input type="text" name="name" />
                </label>
                <br></br>
                <label style={{ color: 'white'}}>
                  Order list:
                 <input type="text" name="name" />
                </label>
                <br></br>
                <label style={{ color: 'white'}}>
                  Review:<br></br>
                  <input type="text" name="name" style={{ height: "300px"}}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
                <br/><br/><br/><br/><br/>
              </form>
            </div>
            <div class="col-lg-5">
              
               <h1>vdfvdvdfvdvffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffv</h1>
               <input type="submit" value="Submit"/>
               <br/><br/><br/><br/><br/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;