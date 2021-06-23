import React from "react";

export default function Question() {
    
    return (
        <div>
            <nav>
                <div class="topnav-left2" id="topnav">
                    <b class="btpc active">SELECT CATEGORY</b>
                    <a><button type="button" id="soccerB" >SOCCER</button></a>
                    <a><button type="button" id="techB" >TECHNOLOGY</button></a>
                    <a><button type="button" id="actingB" >ACTING</button></a>
                    <a><button type="button" id="politicB"  >POLITIC</button></a>
                </div>
            </nav>
            <div id="techModal" class="qContainer showModal">
                <div class="question">
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
    
}
