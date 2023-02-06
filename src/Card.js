import React from 'react'
class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Personne : { fullName :'Seif',bio :'Club Africain', imgSrc : "https://ar.lemaghreb.tn/media/k2/items/cache/465c25a96560bc2f577fdbd012a25e08_XL.jpg" , profession : "Developpeur"} ,
        shows:true,
        mountingTime:0,
      };
       
    }
    componentDidMount () {

    
        setInterval(() => {
            this.setState({mountingTime:(this.state.mountingTime += 0.5) });
        },1000);
    }
    
    change=()=>{
        this.setState({shows:!this.state.shows})
        this.setState({mountingTime: 0})
    }
    render() {
      return (
        <div>
            {this.state.shows? <>      <h1>My Name is : {this.state.Personne.fullName} </h1>
          <h1>My Favorite Team : {this.state.Personne.bio} </h1>
          <img src ={this.state.Personne.imgSrc} ></img>
          <h1> My Job is : {this.state.Personne.profession} </h1> </> : <h1>Nothing</h1>
          }
          <p>Time:{this.state.mountingTime}</p>
          <button onClick={this.change} > show </button>

        </div>
      );
    }
  }
  export default Card