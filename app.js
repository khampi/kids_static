const cartval = document.getElementById("cart-value");
const addbtn = document.getElementsByClassName("button");

var materials = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

  function itemsInCart() {
    let cart = 0;
    for (i = 0; i < materials.length; i++) {
      cart = cart + materials[i].quantity;
    }
    cartval.innerHTML = cart;
  }
  
  for (let i = 0; i < addbtn.length; i++) {
    addbtn[i].onclick = (e) => {
      materials[i].quantity++;
      itemsInCart();
    };
  }

var totaldoll = 0;
var totalcents = 0;
const cartbtn = document.getElementById("cart");
cartbtn.onclick = () => {
    for(i =0;i<materials.length;i++)
    {
        if(materials[i].quantity>0){
        console.log("Item name : "+materials[i].name+" Qunatity : "+materials[i].quantity);
        totaldoll += materials[i].dollars;
        totalcents += materials[i].cents;
        if(totalcents>100)
        {
            totaldoll++;
            totalcents -= 100;
        }
        
        }
    }
    console.log("The total amount is "+totaldoll+ " and " +totalcents+"cents");
}



