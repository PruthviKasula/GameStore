import React, { useState, useContext } from "react";
import "./Popup.css";
import axios from "axios";
import image from './ShoppingIcon.png';
import UserContext from '../pages/User.js';
import LogContext from '../pages/Log.js';

function Popup6(props) {
    const user = useContext(UserContext);
    const authenticated = useContext(LogContext);
    const [games, setGames] = useState([])

    //fetch game content
    const gamescontent = () => {
        axios.get('http://localhost:8081/demo_war_exploded/GetGames')
            .then(res => {
                setGames(res.data)
                console.log(res)
            })
    }
    const gameName = games.map(a => a.gameName);
    const gameSummary = games.map(a => a.summary);
    const gameDevelopers = games.map(a => a.developers);
    const gamePrice = games.map(a => a.price);
    const gameGenres = games.map(a => a.genres);

    //post on shopping cart 
    const postOnCart = () => {
        if (authenticated.nameS == true) {
            axios.post("http://localhost:8081/demo_war_exploded/PostShoppingCart", {
                idshoppingCart: user.name,
                gamename: gameName[5],
                fees: gamePrice[5]
            }).then((response) => {
                console.log(response.data);
                if ((response.data.localeCompare("Successfully added to cart")) !== -1) {
                    alert(response.data);
                } else {
                    alert(response.data);
                }
            }).catch(e => {
                console.log(e);
            });
        }
        else {
            alert("Please login to processed shopping");
        }
    }
    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup-inner">
                <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span>
                <div>
                    <center><img src={'https://assets-prd.ignimgs.com/2021/10/21/lego-star-wars-castaway-button-1634780317249.jpg?width=300'} alt="pic" /></center>

                    <center><button className="view-btn" onClick={gamescontent}>Click to View Game Details </button></center>
                    <h3 className="des-header">Description</h3>
                    <h4 className="des-content">Summary: <i> {gameSummary[5]}</i></h4>
                    <h4 className="des-content">Developers: {gameDevelopers[5]}</h4>
                    <h4 className="des-content">Genres: {gameGenres[5]}</h4>
                    <h4 className="des-content" >Price:$ {gamePrice[5]}</h4>
                    <div>
                        <br></br><br></br>
                        <input type="image" name="img-btn" className="icon-btn" onClick={postOnCart} src={image} alt="icon"></input>
                    </div>
                    <div>{console.log(user.shoppingList)}</div>
                </div>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup6;