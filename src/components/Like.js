import React, {useState} from "react";

function Like() {
const [like, setLike] = useState(false);
  return (
    <div className="footer">
      <button onClick={()=>setLike((prevLike)=> !prevLike)}>Like:{like ? "❤️" : "♡"}</button>
    </div>
  );
}

export default Like;