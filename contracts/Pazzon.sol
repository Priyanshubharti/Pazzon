// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Pazzon {
    // Code for smart contract goes here....
  //  string public name;
    address public owner;

    constructor(){
    //    name = "Pazzon";
        owner = msg.sender;
    }
}
