import React, { useState, useContext } from "react";
import UserContext from '../pages/User.js';
import LogContext from '../pages/Log.js';
import OrderContext from '../pages/Order.js';
import "./PopupCart.css";
import axios from "axios";


function PopupCart() {
    const user = useContext(UserContext);
    const authenticated = useContext(LogContext);
    const [shoppingCart, setShoppingCart] = useState([]);
    const order = useContext(OrderContext);

    //get shopping cart items
    const getShoppingCart = () => {
        if (authenticated.nameS == true) {
            axios.get('http://localhost:8081/demo_war_exploded/GetShoppingCart ').then(res => {
                    setShoppingCart(res.data)
                    console.log(res)
                    console.log(user.shoppingList)
                })
            const userId = shoppingCart.map(a => a.idshoppingCart);
            const games = shoppingCart.map(a => a.gamename);
            const gamefees = shoppingCart.map(a => a.fees);
            user.shoppingList = games;
            //==============================
            //find the current user data
            var userDataPointer= null;
            for(var i =0; i< userId.length;i++)
            {
                if (userId[i].localeCompare(user.name) !== -1 )
                {
                    userDataPointer=i;
                    break;
                }
            }
            //================================

            // if the user has no items upadte the states with null data
            if (userDataPointer == null) {
                user.shoppingList = [''];
                user.totalFees = null;
                user.checkoutItems = [''];
            }
            //else fetch the user items using userDataPointer
            else
            {
                user.shoppingList = games[userDataPointer].split(", ");
                user.totalFees = gamefees[userDataPointer];
                user.checkoutItems = games[userDataPointer];
            }
        }
        else {
            alert("Please login to processed shopping");
            userDataPointer= null;
        }
    }

    //post orders (checkout)
    const postOrders = () => {
        var userDataPointer= null;
        if (authenticated.nameS == true) {
            console.log(user.name);
            console.log(user.checkoutItems);
            console.log(user.totalFees);
            order.number = (order.number+1)*1000000000;
            axios.post("http://localhost:8081/demo_war_exploded/PostOrders", {
                order_id: parseInt(order.number).toString(),
                user_id: user.name,
                gamename: user.checkoutItems,
                fees: user.totalFees
            }).then((response) => {
                console.log(response.data);
                if ((response.data.localeCompare("Successfully Checked out")) !== -1) {
                    alert(response.data);
                    userDataPointer= null;
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
    return (
        <div className="cartForm" >
            <div >
                <h1></h1>
                <br></br>
                <div>
                    <center><button test_id_1="11" id="1" className="view-btn" onClick={getShoppingCart} >Double-Click to View shopping cart items </button></center>
                    <h3 test_id_2="22">Shopping Itmes:</h3>
                    <h4 test_id_3="33">Total Fees:$</h4>
                    <div>
                        <br></br><br></br>
                        <center><button test_id_4="44" id="2" className="view-btn" onClick={postOrders}>Checkout </button></center>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default PopupCart;