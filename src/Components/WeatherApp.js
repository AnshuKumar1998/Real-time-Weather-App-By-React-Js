import React, { Component } from 'react';
import './WeatherApp.css';
import Result from './result'
import Search from './search'

class WeatherApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            lat :"",
            lon :"",
            weatherData:null,
            city:"",

        }
    }

    changeHandler = (event) =>{
        const name = event.target.name;

        if(name === "city"){
            this.setState({
                city: event.target.value
            })
        }
        else if(name === "lat"){
            this.setState({
                lat: event.target.value
            })

        }
        else if(name === "lon"){
            this.setState({
                lon: event.target.value
            })

        }

    };

    locationHandler = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res)=>{
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        else{
            console.log("Navigator in not in your computer");
        }
    };
  render() {
    return (
        <div className="weather-app">
            <main>
                <Search lat = {this.state.lat} lon = {this.state.lon} city = {this.state.city} weatherData = {this.state.weatherData} change = {this.changeHandler} getLocation={this.locationHandler}></Search>
                <Result></Result>
            </main>
            <footer>
                <p>Looking for Web Development Online Training? Call us at: +91 9024244886 / +91 9269698122 or visit <a href="http://www.wscubetech.com">www.wscubetech.com</a></p>
            </footer>
        </div>
    )
  }
}

export default WeatherApp;
