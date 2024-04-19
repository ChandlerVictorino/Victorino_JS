/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a title //
function titleNFT (){
    console.log("Welcome to Pilippine PoP-culture NFT's");
    console.log("Here are some of Philippine Famous Fictional Characters\n");
}
// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_realName,_power,_bio,_author) {
const NFT = {
    "name":_name,
    "realName":_realName,
    "power":_power,
    "bio":_bio,
    "author":_author
}

NFTs.push(NFT);
console.log("Minted: " +_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i <NFTs.length; i++) {
        console.log("\n");
        console.log("\nID:\t\t\t\t\t" + (i + 1));
        console.log("\nName:\t\t\t  " + NFTs[i].name);
        console.log("\nReal Name:  "+ NFTs[i].realName);
        console.log("\nPower:\t\t  " + NFTs[i].power);
        console.log("\nBiography:\t" + NFTs[i].bio);
        console.log("\nAuthor: \t\t" + NFTs[i].author);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nThe Total Number of NFT stored: " + NFTs.length);

}
// call your functions below this line
titleNFT ()
mintNFT("Panday", "Flavio", "Magical-Blade", "He uses this sword to fight evil forces", "Carlo J. Caparas\n" );
mintNFT("Captain Barbell", "Enteng", "Super-human | Strength | Speed | Flight | Vision | Near Invulnerability", "A weakling person whose only dream was to become strong and muscular", "Mars Ravelo\n" );
mintNFT("Kokey", "Kokey", "Extra-Terrestrial | Telepathy | Telekenesis", "An extraterrestrial whose spaceship explodes upon landing on earth.", "Jerry Sineneng\n" );
mintNFT("GaGamboy", "Junie", "Super-Human | Spider-web | Spider-Sense | ", "Junie and Dodoy (aka IpisMan) both try to win Liana's love", "Dwight Gaston\n" );
listNFTs();
getTotalSupply();
