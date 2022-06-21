import Head from 'next/head';
import Image from 'next/image';
import  _Header  from "../components/Header";
import styles from '../styles/Home.module.css';
import { useState } from "react"  //import library for line 9
import { ethers } from "ethers" // import library for ethers
import { abi_file } from "../constants/abi"; // import abi from different file


export default function Home() {
  const [isConnected, setIsConnected] = useState(false);  //to show a button is not connected
  const [signer, setSigner] = useState();

  async function connect() {  //create function to connect metameask
      
    if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed
      try {
        await ethereum.request({ method: "eth_requestAccounts"});
        setIsConnected(true);  // set variable as true
        const connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
       setSigner(connectedProvider.getSigner());
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        let account = null;
          if (accounts.length > 0 )
          { account = account[0] }
          let signer = provider.setSigner(account); 
        } catch (e) {
          console.log(e);  // catch and log and errors in console(F12 in chrome)
        }
      } else {
      setIsConnected(false);
      }

}

async function Rolldice() {  //execute function

  if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed

    const contractAddress = "0x89f6D41f87054127066d4639e3Ada3DeEefE5EB7";  // address of the contract
    const abi = abi_file;
    

    const contract = new ethers.Contract(contractAddress, abi, signer);  // calls the contract from the 3 variables
    
   
    try {
    
     const transactionResponse = await contract.Rolldice();
     const transactionReceipt = await transactionResponse.wait();
     var player = (transactionReceipt.events[0].args.player);
     var result = (transactionReceipt.events[0].args.DiceNumber.toString());
     var z = document.createElement("H3");
     var w = document.createTextNode("Dice number is " + result);
     z.appendChild(w);
     document.body.appendChild(z);
           
      
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML = 
    "Please install MetaMask";
  }
}

async function receiveMoney() {  //execute function

  if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed

    const contractAddress = "0x89f6D41f87054127066d4639e3Ada3DeEefE5EB7";  // address of the contract
    const abi = abi_file;
    

    const contract = new ethers.Contract(contractAddress, abi, signer);  // calls the contract from the 3 variables
    
   
    try {
     const options = { value: ethers.utils.parseEther("1") }
     var transactionResponse = await contract.receiveMoney(options);
     const transactionReceipt = await transactionResponse.wait();
     var Balance = (transactionReceipt.events[0].args.Bet.toString());
     var z = document.createElement("H2");
     var w = document.createTextNode("You have sent 1 Ether to the smart contract");
     z.appendChild(w);
     document.body.appendChild(z);
           
      
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML = 
    "Please install MetaMask";
  }
}

async function PlayerSelectOdd() {  //execute function

  if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed

    const contractAddress = "0x89f6D41f87054127066d4639e3Ada3DeEefE5EB7";  // address of the contract
    const abi = abi_file;
    

    const contract = new ethers.Contract(contractAddress, abi, signer);  // calls the contract from the 3 variables
    
   
    try {
     // await contract.Rolldice();  //function will are calling on the sol contract
     const transactionResponse = await contract.selectOddorEven(1);
     const transactionReceipt = await transactionResponse.wait();
     var roll = (transactionReceipt.events[0].args.OddEven);
     var z = document.createElement("H3");
     var w = document.createTextNode("Is it Odd ? " + roll);
     z.appendChild(w);
     document.body.appendChild(z);
           
      
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML = 
    "Please install MetaMask";
  }
}

async function PlayerSelectEven() {  //execute function

  if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed

    const contractAddress = "0x89f6D41f87054127066d4639e3Ada3DeEefE5EB7";  // address of the contract
    const abi = abi_file;
    

    const contract = new ethers.Contract(contractAddress, abi, signer);  // calls the contract from the 3 variables
    
   
    try {
     const transactionResponse = await contract.selectOddorEven(0);
     const transactionReceipt = await transactionResponse.wait();
     var roll = (transactionReceipt.events[0].args.OddEven);
     var z = document.createElement("H3");
     var w = document.createTextNode("Is it Odd ? " + roll);
     z.appendChild(w);
     document.body.appendChild(z);
           
      
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML = 
    "Please install MetaMask";
  }
}

async function addAllowance() {  //execute function

  if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed

    const contractAddress = "0x89f6D41f87054127066d4639e3Ada3DeEefE5EB7";  // address of the contract
    const abi = abi_file;
    

    const contract = new ethers.Contract(contractAddress, abi, signer);  // calls the contract from the 3 variables
    
   
    try {
     // await contract.Rolldice();  //function will are calling on the sol contract
     const transactionResponse = await contract.addAllowance();
     const transactionReceipt = await transactionResponse.wait();
     var better = (transactionReceipt.events[0].args.Player);
     var z = document.createElement("H3");
     var w = document.createTextNode("House allocated money" + better);
     z.appendChild(w);
     document.body.appendChild(z);
           
      
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML = 
    "Please install MetaMask";
  }
}

async function WinMoney() {  //execute function

  if (typeof window.ethereum !== "undefined") { // check to see if metamask is installed

    const contractAddress = "0x89f6D41f87054127066d4639e3Ada3DeEefE5EB7";  // address of the contract
    const abi = abi_file;
    

    const contract = new ethers.Contract(contractAddress, abi, signer);  // calls the contract from the 3 variables
    
   
    try {
     // await contract.Rolldice();  //function will are calling on the sol contract
     const transactionResponse = await contract.WinMoney();
     const transactionReceipt = await transactionResponse.wait();
     
     var amount = (transactionReceipt.events[0].args.Winnings);
     var z = document.createElement("H3");
     var w = document.createTextNode("You have won " + amount);
     z.appendChild(w);
     document.body.appendChild(z);
           
      
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML = 
    "Please install MetaMask";
  }
}


  return <div>
 <ul>
  <li><a href=""> Home </a></li>
  <li><a href="news.asp"> Logs </a></li>
  
</ul>


  {isConnected ? 
  <>
  


<br></br>

<div class = "Button">
  <h2><b>Status : Connected </b></h2>

  <p> Once you press bet money it will send 1 ether to the contract</p>
  
  <button class ="buttonBlue" onClick= {() => receiveMoney()}>Bet Money</button>
  <br></br>
  <br></br>
  <p>Select Odd or Even</p>
  <button class ="buttonBlue" onClick= {() => PlayerSelectOdd()}>Select Odd</button>
  <br></br>
  <br></br>
  <button class ="buttonBlue" onClick= {() => PlayerSelectEven()}>Select Even</button>
  <br></br>
  <br></br>
  <p>Then Roll the dice</p>
  <button class ="buttonBlue" onClick= {() => Rolldice()}>Roll dice</button>
  <br></br>
  <br></br>
  <p>Press the button and we will allocate funds into the pot.  Winner takes all!</p>
  <button class ="buttonBlue" onClick= {() => addAllowance()}>Allocate Winning from house account</button>
  <br></br>
  <br></br>
  <p>We will transfer the money to you or keep the money</p>
  <button class ="buttonBlue" onClick= {() => WinMoney()}>Restart or collect Winnings</button>
  <br></br>
  <br></br>
  </div>
   </>

  : (<button onClick={() =>connect()}>Connect</button>) }

   
   
   
    </div>;


}

