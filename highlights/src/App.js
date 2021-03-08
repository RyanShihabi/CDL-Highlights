import {React, Component} from 'react'
import ReactDOM from 'react-dom'
import Garrison from './Maps/Garrison.js'
import Checkmate from './Maps/Checkmate.js'
import Raid from './Maps/Raid.js'
import Moscow from './Maps/Moscow.js'
import Miami from './Maps/Miami.js'
import Crossroads from './Maps/Crossroads.js'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      GarrisonData: {},
      RaidData: {},
      MiamiData: {},
      MoscowData: {},
      CheckmateData: {},
      CrossroadsData: {},
    };
  }

  componentDidMount(){
    Promise.all([
      fetch("http://localhost:8000/maps/Garrison"),
      fetch("http://localhost:8000/maps/Raid"),
      fetch("http://localhost:8000/maps/Moscow"),
      fetch("http://localhost:8000/maps/Checkmate"),
      fetch("http://localhost:8000/maps/Miami"),
      fetch("http://localhost:8000/maps/Crossroads")
    ]).then(([res1, res2, res3, res4, res5, res6]) => {
        return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json()])
    })
    .then(([res1, res2, res3, res4, res5, res6]) => {
      this.setState({
        isListOpen: false,
        GarrisonData: res1,
        RaidData: res2,
        MoscowData: res3,
        CheckmateData: res4,
        MiamiData: res5,
        CrossroadsData: res6,
      });
    });
  }

  getMap(request){
    switch(request){
      case "Checkmate":
        ReactDOM.render(<Checkmate data={this.state.CheckmateData}/>, document.getElementById("Map"));
        break;
      case "Crossroads":
        ReactDOM.render(<Crossroads data={this.state.CrossroadsData}/>, document.getElementById("Map"));
        break;
      case "Miami":
        ReactDOM.render(<Miami data={this.state.MiamiData}/>, document.getElementById("Map"));
        break;
      case "Garrison":
        ReactDOM.render(<Garrison data={this.state.GarrisonData}/>, document.getElementById("Map"));
        break;
      case "Moscow":
        ReactDOM.render(<Moscow data={this.state.MoscowData}/>, document.getElementById("Map"));
        break;
      case "Raid":
        ReactDOM.render(<Raid data={this.state.RaidData}/>, document.getElementById("Map"));
        break;
      default:
        ReactDOM.render(<p>Data not found</p>, document.getElementById("Map"));
    }

  }

  render(){

    return (
      <div className="container">
        <h1 id="siteTitle">CDL Highlight Tracker</h1>
        {/* make a dropdown */}

        <div id="mapGrid">
          <div className="mapItem" onClick={() => this.getMap("Checkmate")} >
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_kgb.jpg')"}}>
            <div className="mapText">Checkmate</div>
            </div>
          </div>
          <div className="mapItem" onClick={() => this.getMap("Crossroads")} >
            <div className="mapImage" style={{backgroundImage: "url('https://www.callofduty.com/cdn/app/base-maps/cw/mp_tundra.jpg')"}}>
            <div className="mapText">Crossroads</div>
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
