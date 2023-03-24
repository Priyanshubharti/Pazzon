const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

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

})
})
