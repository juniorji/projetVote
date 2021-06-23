import React from 'react'

export default function Header() {
    return (
        <nav>
            <div class="topnav-left">
                <a href="#" class="btpc">LOGO</a>
            </div>
            <div class="topnav-right" id="topnav">
                <a href="#" type="button" class="sparisci">ABOUT</a>
                <a href="#" type="button" class="sparisci"> CONTACT</a>
                <a href="#" type="button" class="sparisci"> LOG IN</a>
                <a href="#" type="button" class="sparisci"> SIGN IN</a>
                <a href="#"id="btn-mobile" type="button"  onclick="myFunction()">MENU</a>
            </div>
    </nav>
    )
    function myFunction() {
        const dropD = document.getElementById('topnav');
        if (dropD.className === "topnav-right") {
            dropD.className += " responsive";
        } else {
          dropD.className = "topnav-right";
        }
      }
}
