/*1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created*/


let NFTs = [];        //array to store a number of NFT's                                                (step 1)

let metadata;           //object that will hold the information about NFT

function mintNFT (name,rare,history) {               //mintNFt function with parameters                 (step 2)
    metadata = {                                //object to store values of parameters 
        name : name,                                //will store name of the NFT
        rarity_of_thing : rare,                     //will store what is rare about the NFT
        history : history                           //will store history(when created or choosen as NFT) of the NFT
    };
    NFTs.push(metadata);                           //will store or push all the values in array name NFTs
};                                                 //function closed 

function listNFTs(){                               //function to print all the NFTs                     (step 3)
    console.log("List all the values of NFTs: ");    
    console.log("\n");
    for(let i = 0; i < NFTs.length; i++){          //for loop to print till length of array NFTs
    console.log("Name: " , NFTs[i].name);
    console.log("Rare thing: " , NFTs[i].rarity_of_thing);
    console.log("History: " , NFTs[i].history);
    console.log("\n");                            //new line in output
}
};

function getTotalSupply(){                     //function that will return number of NFTs created       (step 4)
    return NFTs.length;
};

//Examples taken from website "https://adamfard.com/blog/nfts-21-examples"
//Calling function mintNFT() to create NFTs

mintNFT("Nyan Cat GIF" , "Sold for $852,300" , "2010");
mintNFT("Jack Dorsey's first-ever tweet" , "Sold for nearly $3 million" , "2006");
mintNFT("RTFKT’s digital sneakers" , "Collected $31 million in sales" , "2021");
 
listNFTs();                                    //calling function listNFTs() to print the values of NFTs
console.log("NFTs created: " , getTotalSupply());        //printing total number of NFTs created 