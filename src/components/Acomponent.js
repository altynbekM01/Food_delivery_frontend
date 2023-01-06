import React, {Component} from "react";

export default class Acomponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            error: null,
            isLoaded: false,
            items: []
        };
        

    }
    
    componentDidMount(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
                isLoaded: true,
                error
            });
          }
        )
    }

    render(){
        const {isLoaded, items, error} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return (<div>Loading...</div>);
          } else {
            return (
              <ul>
                {items.map((item) => (
                  <li key={item.name}>
                    <div>
                    <h2 >{item.strDrink}</h2>
                    <img width="50" height="50" src={item.strDrinkThumb}/>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }
    }
}