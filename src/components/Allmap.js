import React from 'react';
import './Allmap.css'


const Allmap = (props) => {
    let block;

    const lighting = (event) => {

        event.target.style.stroke = "blue";//change svg border color
        
        block = document.createElement('div');

        for (let i = 0; i< props.countries.length;i++){ //search the population
            if (props.countries[i].id === event.target.id){
                block.innerHTML = event.target.id + "<br>" + props.countries[i].population + " млн чел";
            }
        }

        //-------------------------------------styles---------------------------------------
        block.style.backgroundColor = "red"; 
        block.style.display = "inline-block";
        block.style.padding = "10px";
        block.style.color = "white";
        block.style.borderRadius = "10px";
        block.style.fontSize = "14px";
        block.style.position = "fixed";
        block.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

        
        document.body.append(block);
        let coords = event.target.getBoundingClientRect(); //take coordinates
        
        let left = coords.left - block.offsetWidth - 5;
        if (left < 0){
            left = 0;
        }

        let top = coords.top - block.offsetHeight - 5;
        if (top < 0) {
            top = coords.top + 5;
        }
        
        block.style.left = left + 'px';
        block.style.top = top + 'px';
    };

    const unlighting = (event) => {
        event.target.style.stroke = "none";
        if (block) {
            block.remove();
            block = null;
        }
    };


    let newcountries = props.countries.map(el => (<path id={el.id} d={el.d} fill={props.dispatch({type:'COLOR_CREATE', value: el.population})} onMouseOver={lighting} onMouseOut={unlighting}/>));
    return (
        <div id="allmap">
            <svg id="svg_id" width="950px" height="100vh" viewBox="0 0 950 620">
                {newcountries}
            </svg>
        </div>
    );
}

export default Allmap;