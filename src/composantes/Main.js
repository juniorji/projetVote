import React from "react";
import ReactDOM from 'react-dom';

export default function Main() {
    
    return (
        <div>
            <nav>
                <div class="topnav-left2" id="topnav">
                    <b class="btpc active">SELECT CATEGORY</b>
                    <a><button onClick={s} type="button" id="soccerB" >SOCCER</button></a>
                    <a><button onClick={s} type="button" id="techB" >TECHNOLOGY</button></a>
                    <a><button onClick={s} type="button" id="actingB" >ACTING</button></a>
                    <a><button onClick={s} type="button" id="politicB"  >POLITIC</button></a>
                </div>
            </nav>
            <div id="techModal" class="qContainer showModal">
                <div id="question">
                    <h2>Question n.1</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" width="230" height="300"></img>
                    <p>Vote for Elon Musk</p>
                    <div>
                    <button type="button" class="choice">YES</button>
                        <button type="button" class="choice">NO</button>
                    </div>
                </div>
            </div>
        </div> 
    )
    function s(){
        const techModal = document.getElementById("question");
        //const techBtn = document.getElementById("techB");
        const display = techModal.currentStyle ? techModal.currentStyle.display : getComputedStyle(techModal, null).display;
        if (display == 'none'){
            techModal.style.display = 'block';
            alert("display : "+techModal.style.display);
        }
    }
}
