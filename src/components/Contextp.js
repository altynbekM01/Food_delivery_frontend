import React, {Component, Fragment} from "react";


const TitleContext = React.createContext();

const LevelThree =() => (
    <TitleContext.Consumer>
        { ({title, subTitle, click}) => (
            <Fragment>
                <h1 onClick={click}>{title}</h1>
                <h2>{subTitle}</h2>
            </Fragment>
        )}
    </TitleContext.Consumer>
)
const LevelTwo =({title}) => <LevelThree title={title}/>
const LevelOne =({title}) => <LevelTwo title={title}/>

class Contextp extends Component{
    render(){
        return(
            <TitleContext.Provider value={{title:"It is context", subTitle: "Context send element here without provider", click:() => {console.log("Hello")} }}>
                <LevelOne/>
            </TitleContext.Provider>
        );
    }
}

export default Contextp;
