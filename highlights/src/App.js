import {React, Component} from 'react'
import Map from './map.js'
import ReactDOM from 'react-dom'
import Checkmate from './Maps/Checkmate.jpg'
import Raid from './Maps/Raid.jpg'
import Garrison from './Maps/Garrison.jpg'
import Moscow from './Maps/Moscow.jpg'
import Miami from './Maps/Miami.jpg'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Garrison: {},
      Raid: {},
      Miami: {},
      Moscow: {},
      Checkmate: {},
      isLoaded: false,
    };
  }

  componentDidMount(){
    Promise.all([
      fetch("http://localhost:8000/maps/Garrison"),
      fetch("http://localhost:8000/maps/Raid"),
      fetch("http://localhost:8000/maps/Moscow"),
      fetch("http://localhost:8000/maps/Checkmate"),
      fetch("http://localhost:8000/maps/Miami"),
    ]).then(([res1, res2, res3, res4, res5]) => {
        return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()])
    })
    .then(([res1, res2, res3, res4, res5]) => {
      this.setState({
        Garrison: res1,
        Raid: res2,
        Moscow: res3,
        Checkmate: res4,
        Miami: res5,
      });
    });
  }

  getMap(request){
    switch(request){
      case "Checkmate":
        ReactDOM.render(<Map data={this.state.Checkmate} image={Checkmate}/>, document.getElementById("Map"));
        break;
      case "Miami":
        ReactDOM.render(<Map data={this.state.Miami} image={Miami}/>, document.getElementById("Map"));
        break;
      case "Garrison":
        ReactDOM.render(<Map data={this.state.Garrison} image={Garrison}/>, document.getElementById("Map"));
        break;
      case "Moscow":
        ReactDOM.render(<Map data={this.state.Moscow} image={Moscow}/>, document.getElementById("Map"));
        break;
      case "Raid":
        ReactDOM.render(<Map data={this.state.Raid} image={Raid}/>, document.getElementById("Map"));
        break;
      default:
        ReactDOM.render(<p>Data not found</p>, document.getElementById("Map"));
    }
    
  }

  render(){

    return (
      <div className="container">
        <h1>CDL Highlight Tracker</h1>
        {/* make a dropdown */}
        <div className="mapGrid">
          <div className="mapItem" onClick={() => this.getMap("Checkmate")} >
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_kgb.jpg')"}}>
            <div className="mapText">Checkmate</div>
            </div>
          </div>
          <div className="mapItem" onClick={() => this.getMap("Miami")}>
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_miami.jpg')"}}>
              <div className="mapText">Miami</div>
            </div>
          </div>
          <div className="mapItem" onClick={() => this.getMap("Garrison")}>
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_tank.jpg')"}}>
            <div className="mapText">Garrison</div>
            </div>
          </div>
          <div className="mapItem" onClick={() => this.getMap("Moscow")}>
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_moscow.jpg')"}}>
            <div className="mapText">Moscow</div>
            </div>
          </div>
          <div className="mapItem" onClick={() => this.getMap("Raid")}>
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_raid_rm.jpg')"}}>
            <div className="mapText">Raid</div>
            </div>
          </div>

        </div>
        <div id="Map">
            
        </div>
      </div>
    );
  }
}

export default App;
