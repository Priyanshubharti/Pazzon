// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Pazzon {
    // Code for smart contract goes here....
  //  string public name;
    address public owner;


// Struct allows us to create our own data structures.
    //Define struct...
    struct Item{
     uint256 id;
     string name;
     string category;
     string image;
     uint256 cost;
     uint256 rating;
     uint256 stock;
    }

   struct Order{
    uint256 time;
    Item item;
   }
    
    // Mappings to map in blockchain...
  
    mapping(uint256 => Item) public items;
    mapping(address => uint256) public orderCount;
    mapping(address => mapping(uint256 => Order)) public orders;
    
    // Events that will be emitted...

    event Buy(address buyer, uint256 orderId, uint256 itemId);
    event List(string name, uint256 cost, uint256 quantity);

    modifier onlyOwner(){
      require(msg.sender == owner);
      _;
    }

    constructor(){
    //    name = "Pazzon";
        owner = msg.sender;
    }

    //List Products....
     function list(
      uint256 _id,
      string memory _name,
      string memory _category,
      string memory _image,
      uint256 _cost,
      uint256 _rating,
      uint256 _stock
     ) public onlyOwner {
          // Create Item struct...
          Item memory item = Item(_id, _name, _category, _image, _cost, _rating, _stock);
          
          // Save Item struct into blockchain...
           items[_id] = item;
     
          // Emits an event
             emit List(_name, _cost, _stock);     
     }



    //Buy Products....
 
  // Receive a Crypto (it is done as modifier "payable" is used.)....

    function buy(uint256 _id) public payable{
    // Fetch item
    Item memory item = items[_id];

    // Require enough ether to buy item....
     require(msg.value >= item.cost);

    // Require item is in stock....
     require(item.stock > 0);


    // Create an Order...

     Order memory order = Order(block.timestamp, item);
     
     // Add Order for user
     orderCount[msg.sender]++;
     orders[msg.sender][orderCount[msg.sender]] = order;

    // Substract stock
    items[_id].stock = item.stock - 1;
     
     // Emit event
     emit Buy(msg.sender, orderCount[msg.sender], item.id);

    } 
 


   // Withraw Funds....
 
    function withdraw() public onlyOwner{
      (bool success, ) = owner.call{value: address(this).balance}("");
      require(success);
    }


}
