const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

// Global List Variables....
const ID = 1;
const NAME = "Shoes";
const CATEGORY = "Clothing";
const IMAGEURL = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg";
const COST = tokens(1);
const RATING = 4;
const STOCK = 5;

describe("Pazzon", () => {
let pazzon;
let deployer,buyer;



beforeEach(async ()=>{
  // Setup Account...
  [deployer, buyer] = await ethers.getSigners();
 // console.log(deployer,buyer);
  
  
  // Deploy Contract...
  const Pazzon = await ethers.getContractFactory("Pazzon");
   pazzon = await Pazzon.deploy();
})



describe("Deployment", ()=>{
// Test Owner
it("Sets the owner", async ()=>{
  expect(await pazzon.owner()).to.equal(deployer.address);
})  
  
  
// Test name 
//  it("has a name",async ()=>{
 //  const name = await pazzon.name();
 //   expect(name).to.equal("Pazzon")

//})


describe("Listing",()=>{
  let transaction;
 
 
  beforeEach(async ()=>{
    transaction = await pazzon.connect(deployer).list(
      ID,
      NAME,
      CATEGORY,
      IMAGEURL,
      COST,
      RATING,
      STOCK
    )

    await transaction.wait();
  })
  
  it("Returns item attributes", async()=>{
    const item = await pazzon.items(ID);
    
    expect(item.id).to.equal(ID);
    expect(item.name).to.equal(NAME);
    expect(item.category).to.equal(CATEGORY);
    expect(item.image).to.equal(IMAGEURL);
    expect(item.cost).to.equal(COST);
    expect(item.rating).to.equal(RATING);
    expect(item.stock).to.equal(STOCK);
    
  })

  it("Emits List Event", async ()=>{
    expect(transaction).to.emit(pazzon, "List");
  })
})

})
})
