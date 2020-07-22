import React, { Component } from "react";
import API from "../API";
import "./Search.css";

class Search extends Component {

    state = {
        searchValue: '',
        realEstate: [],
        q: '',
        stateName: '',
        cityName: ''
    };

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSearch = (event) => {
        event.preventDefault();
        console.log("DFGH", this.state.cityName, this.state.stateName)
        API.getRealestate(this.state.cityName, this.state.stateName)
            .then((res) => {
                console.log('RES Fron', res.data.res);
                this.setState({
                    realEstate: res.data.res
                })
            })
            .catch(() => this.setState({
                realEstate: [],
                message: "There's no new listings!"
            })
            )
    }

    //create a function , thats post to db
    //youll make the API.saveListing(pass arg)
    //arg has to be and obj with data

    getRealestate = () => { }


    render() {
        console.log('STATE', this.state)
        return (
            <div>
                <br></br>
                <h1 className="SearchTitle">Search for Real Estate!</h1>
                <form className="formOne">
                    <label>
                        <h2>City:</h2>
                        <input type='text' name='cityName' value={this.state.cityName} onChange={this.handleOnChange} />
                    </label>
                    <label>
                        <h2>State:</h2>
                        <input type='text' name='stateName' value={this.state.stateName} onChange={this.handleOnChange} />
                    </label>
                    <button onClick={this.handleSearch}>Search</button>
                </form>
                {}



                {/* 
                <input name="text" type="text" placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue} /> */}


                {this.state.realEstate.length > 0 ? (
                    <div>
                        {this.state.realEstate.map((property, index) => (

                            <div key={index}>
                                <br></br>
                                <img src={property.thumbnail} alt="Real Estate"></img>
                                <h1 className="Price">${property.price}</h1>

                                <br></br>
                                <h2 className="Address1">{property.address.line}</h2>
                                <h2 className="Address2">{property.address.city},&nbsp;
                                {property.address.state_code}&nbsp;
                                {property.address.postal_code}</h2>

                                <br></br>
                                <h3 className="Beds">Beds:&nbsp;{property.beds}</h3>
                                <h3 className="Baths">Baths:&nbsp;{property.baths}</h3>


                            </div>
                        ))}
                    </div>
                ) : (
                        <p>Try searching for real estate!</p>
                    )}
                {/* <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Neighborhood Realty</strong> by Jason, Julian and Peter. This website is amazing!
                 <a href="https://iamawesome.com"> Click Here to be Awesome</a>.
                </p>
                    </div>
                </footer> */}
            </div>
        )
    }
}
export default Search;

// makeApiCall = searchInput => {
    //     var searchUrl = ``;
    //     fetch(searchUrl)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(jsonData => {
    //             console.log(jsonData.realestate);
    //             this.setState({ realestate: jsonData.realestate });
    //         });
    // };