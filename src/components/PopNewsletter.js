import React from 'react'
import styled from "styled-components";
import { FaTimesCircle } from 'react-icons/fa';

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }
body { height: 100vh; background: #ccc; }

.news-container {
/*   margin: 60px auto; */
  padding-top: 0px;
  position: relative;
  width: auto;
      
  .news-btn {
    display: block;
    margin: 0 auto;      
    color: #fff;  
    width: auto;
    position:absolute;
    right:10%;
    height: auto; 
    margin:4rem 0 0 0;
    padding:.5rem 2rem;   
    line-height: 20px;    
    background: #DB2600;
    border: 0;
    border-radius: 3px;  
    cursor: pointer;
    text-align: center;
    box-shadow: 0 5px 5px -5px #333;  
    transition: background 0.3s ease-in;
    &:hover { background: #DB2600; cursor:pointer; }
  }
  .news-content, 
  .news-backdrop {
    height: 0; 
    width: 0; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    transition: opacity 0.2s ease-in; 
  }
  .news-close {
    color: #444;
    position: absolute;
    right: 5px;
    top: 5px;
    padding-top: 0;
/*     background: #fff */;
    font-size: 20px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover { color: #333; }        
  }      
  .news-content-btn {
    position: absolute;
    text-align: center;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
    background: #446CB3;
    color: #fff;
    width: 50px;
    border-radius: 2px;
    font-size: 14px;
    height: 32px;
    padding-top: 9px;
    font-weight: normal;
    &:hover { color: #fff; background: #365690; }
  }
  #news-toggle {
    display: none;  
    &.active ~ .news-backdrop,
    &:checked ~ .news-backdrop {
      background-color: rgba(0, 0, 0, 0.6);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 3;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }
    &.active ~ .news-content,
    &:checked ~ .news-content {
	  
      opacity: 1;
  
      max-width: 900px;
      width: 65%;
      height: auto;
      padding: 10px 20px;
      position: fixed !important;
      left: calc(20% - 10px);
      top: 200px;
      border-radius: 4px;
      z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      overflow: scroll;
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);  
      @media (max-width: 400px) { left: 50px; }                   
    }  
  }
}

@media (max-width: 600px){
	
	&.active ~ .news-content,
    &:checked ~ .news-content {
	    left:0 !important;
	    width: 100% !important;
	    text-align: left !important;
	    }
	    
	    .news-container .modal-btn{text-align:left !important; padding-left:1.8rem;}
	    
}
`


const Popup = () => (
  

<CustomBox>
<div className="news-container innerpanel">

  <input id="news-toggle" type="checkbox" />
  <label className="news-btn" htmlFor="news-toggle">Get Our Newsletter</label> 
  <label className="news-backdrop" htmlFor="news-toggle"></label>
  <div className="news-content innerpanel">
    <label className="news-close" htmlFor="news-toggle"><FaTimesCircle /></label>
    <h2>Hytron Newsletter</h2><hr />
    <p>You are now signed up!</p> 
    <label className="news-content-btn" htmlFor="news-toggle">Join</label>   
  </div>          
</div>
</CustomBox>
  
)

export default Popup


