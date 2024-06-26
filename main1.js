







//--------------------------------------------------------------------------------------------------------------
var indoor_plants = [
    {
        "plant_Name": "Monstera Deliciosa",
        "plant_image": "https://www.inntinn.in/cdn/shop/products/monstera-deliciosa-xl-inntinn-in-1.jpg?v=1703281353",
        "plant_price": "30"
    },
    {
        "plant_Name": "Fiddle Leaf Fig",
        "plant_image": "https://www.ugaoo.com/cdn/shop/files/1_cc65c975-7a6f-43d6-bb81-b56520e29bc7.jpg?v=1703143693",
        "plant_price": "40"
    },
    {
        "plant_Name": "Snake Plant",
        "plant_image": "https://hips.hearstapps.com/hmg-prod/images/how-to-care-for-a-snake-plant-1591205050.jpg?crop=0.670xw:1.00xh;0.330xw,0&resize=640:*",
        "plant_price": "20"
    },
    {
        "plant_Name": "Pothos",
        "plant_image": "https://www.rollingnature.com/cdn/shop/products/PLGPCEAPGL-W-Main.jpg?v=1669452831",
        "plant_price": "15"
    },
    {
        "plant_Name": "ZZ Plant",
        "plant_image": "https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg",
        "plant_price": "25"
    },
    {
        "plant_Name": "Peace Lily",
        "plant_image": "https://m.media-amazon.com/images/I/41I0iyhYjkL._AC_UF1000,1000_QL80_.jpg",
        "plant_price": "35"
    },
    {
        "plant_Name": "Spider Plant",
        "plant_image": "https://greenozean.com/wp-content/uploads/2019/12/spider.jpg",
        "plant_price": "10"
    },
    {
        "plant_Name": "Aloe Vera",
        "plant_image": "https://nurserylive.com/cdn/shop/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_700x700.jpg?v=1634213151",
        "plant_price": "12"
    },
    {
        "plant_Name": "Rubber Plant",
        "plant_image": "https://abeautifulmess.com/wp-content/uploads/2023/06/rubbertree-1.jpg",
        "plant_price": "28"
    },
    {
        "plant_Name": "Philodendron",
        "plant_image": "https://www.plantvine.com/plants/Philodendron-Goeldii-2-800x1000.jpg",
        "plant_price": "18"
    }
];
var outdoor_plants = [

    {
        "plant_Name": "Sunflower",
        "plant_image": "https://howtohouseplant.com/wp-content/uploads/2023/10/brown-pot-with-sunflowers-and-ribbon.jpg",
        "plant_price": "5"
    },
    {
        "plant_Name": "Rose",
        "plant_image": "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158350swc.jpg?auto=webp&optimize={medium}",
        "plant_price": "8"
    },
    {
        "plant_Name": "Tulip",
        "plant_image": "https://cdn.shopify.com/s/files/1/1902/7917/files/Tulips_in_pots3.jpg",
        "plant_price": "4"
    },
    {
        "plant_Name": "Lavender",
        "plant_image": "https://png.pngtree.com/background/20230611/original/pngtree-lavender-indoor-plants-in-a-wooden-bowl-picture-image_3159905.jpg",
        "plant_price": "6"
    },
    {
        "plant_Name": "Daisy",
        "plant_image": "https://www.rootsplants.co.uk/cdn/shop/products/PB0214-1.jpg?v=1615033837",
        "plant_price": "3"
    },
    {
        "plant_Name": "Cactus",
        "plant_image": "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/types-of-cactus-section-2.jpg",
        "plant_price": "7"
    },
    {
        "plant_Name": "Orchid",
        "plant_image": "https://cdn.shopify.com/s/files/1/0608/5676/2558/files/image_b44d111d-7d63-446c-b245-f27b633ce9c2_1024x1024.heic?v=1683212965",
        "plant_price": "10"
    },
    {
        "plant_Name": "Hydrangea",
        "plant_image": "https://www.provenwinners.com/sites/provenwinners.com/files/2019/images/hydrangea_patio_076.jpg",
        "plant_price": "9"
    },
    {
        "plant_Name": "Carnation",
        "plant_image": "https://nurserylive.com/cdn/shop/collections/nurserylive-carnation-plant-category-image-219729.jpg?v=1681381478",
        "plant_price": "4"
    },
    {
        "plant_Name": "Lily",
        "plant_image": "https://rukminim2.flixcart.com/image/850/1000/kt64fbk0/plant-seed/s/p/w/10-asiatic-10-white-lily-tim-tim-agro-original-imag6kufgf9q98jd.jpeg?q=20&crop=false",
        "plant_price": "6"
    },
    {
        "plant_Name": "Peony",
        "plant_image": "https://bulbsdirect.co.nz/cdn/shop/products/PatioPeonyRome_03506_grande.jpg?v=1627847165",
        "plant_price": '12'
    },
    {
        "plant_Name": "Succulent",
        "plant_image": "https://cdn.shopify.com/s/files/1/0043/3628/7813/files/succulents-thrive-outdoors_480x480.jpg?v=1697107899",
        "plant_price": "5"
    },
    {
        "plant_Name": "Fern",
        "plant_image": "https://jerseyshorescene-com-images.s3.amazonaws.com/wp-content/uploads/2022/02/boston-fern-indoors.jpg",
        "plant_price": "8"
    },
    {
        "plant_Name": "Bonsai",
        "plant_image": "https://m.media-amazon.com/images/I/A1qcYekhXZL._AC_UF1000,1000_QL80_.jpg",
        "plant_price": "15"
    }
];
var seed_indoor = [
    {
        "plant_Name": "Sunflower Seeds",
        "plant_image": "https://m.media-amazon.com/images/I/71SGRh+9wML._AC_UF1000,1000_QL80_.jpg",
        "plant_price": "2.99"
    },
    {
        "plant_Name": "Tomato Seeds",
        "plant_image": "https://sustainablemacleod.org.au/wp-content/uploads/2021/02/tomato-seeds.jpg",
        "plant_price": "1.99"
    },
    {
        "plant_Name": "Basil Seeds",
        "plant_image": "https://saaragroups.com/wp-content/uploads/2020/10/basilseeds-1.jpg",
        "plant_price": "0.99"
    },
    {
        "plant_Name": "Lavender Seeds",
        "plant_image": "https://rukminim2.flixcart.com/image/850/1000/kjbr8280-0/plant-seed/t/l/m/20-lavender-20-vg499x-seed-v-seed-original-imafyx2hygjknz7h.jpeg?q=20&crop=false",
        "plant_price": "2.49"
    },
    {
        "plant_Name": "Zinnia Seeds",
        "plant_image": "https://i.pinimg.com/736x/2f/11/65/2f1165c500411c01fd33bff869817efe.jpg",
        "plant_price": "1.49"
    },
    {
        "plant_Name": "Cucumber Seeds",
        "plant_image": "https://cf.ltkcdn.net/garden/images/orig/232738-2121x1414-cucumber-seeds.jpg",
        "plant_price": "1.99"
    },
    {
        "plant_Name": "Rosemary Seeds",
        "plant_image": "https://www.everwilde.com/media//0800/resized/HROSEMA-C-Rosemary-Seeds_medium.jpg",
        "plant_price": "0.99"
    },
    {
        "plant_Name": "Marigold Seeds",
        "plant_image": "https://m.media-amazon.com/images/I/710lnJTi4nL._AC_UF1000,1000_QL80_.jpg",
        "plant_price": "1.49"
    },
    {
        "plant_Name": "Squash Seeds",
        "plant_image": "https://www.positivelyosceola.com/wp-content/uploads/2020/10/pumpkinseeds-948x640.jpg",
        "plant_price": "2.99"
    },
    {
        "plant_Name": "Mint Seeds",
        "plant_image": "https://rukminim2.flixcart.com/image/416/416/xif0q/plant-seed/v/y/l/20-mint-seeds-pack-of-5-gardenify-india-original-imagecphxbrvmrn8.jpeg?q=70&crop=false",
        "plant_price": "0.99"
    },
    {
        "plant_Name": "Pansy Seeds",
        "plant_image": "https://m.media-amazon.com/images/I/618INJgwCjL.jpg",
        "plant_price": "1.49"
    },
    {
        "plant_Name": "Pepper Seeds",
        "plant_image": "https://m.media-amazon.com/images/I/71me-mtZHUL._SX679_.jpg",
        "plant_price": "1.99"
    },
    {
        "plant_Name": "Thyme Seeds",
        "plant_image": "https://m.media-amazon.com/images/I/81pHHPMxaDL._SX679_.jpg",
        "plant_price": "0.99"
    },
    {
        "plant_Name": "Daisy Seeds",
        "plant_image": "https://www.rootsplants.co.uk/cdn/shop/products/PB0214-1.jpg?v=1615033837",
        "plant_price": "1.49"
    },
    {
        "plant_Name": "Carrot Seeds",
        "plant_image": "https://cdn.shopify.com/s/files/1/0084/4247/8658/files/3_75a85d78-34be-4e1f-8b2e-d566e9a73f04.jpg?v=1663196597",
        "plant_price": "1.99"
    }
];

var fetilizer = [
    {
        "plant_Name": "Organic Growth",
       
        "plant_price": "9.99",
        "plant_image": "https://i.etsystatic.com/16223366/r/il/7caddd/4089728680/il_570xN.4089728680_9o8a.jpg"
    },
    {
        "plant_Name": "Plant Vitality",
        
        "plant_price": "9.99",
        "plant_image": "https://m.media-amazon.com/images/I/617-UVG6MiL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "plant_Name": "Root Strength",
        
        "plant_price": "8.49",
        "plant_image": "https://m.media-amazon.com/images/I/81HMsKWoWRL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "plant_Name": "Flower Power",
        
        "plant_price": "10.99",
        "plant_image": "https://everano.eu/content/images/thumbs/0001657_bio-pk-booster-fertilizante-linea-biologica-1-kg-3527-oz_415.jpeg"
    },
    {
        "plant_Name": "Fruitful Harvest",
        
        "plant_price": "11.79",
        "plant_image": "https://www.agriplexindia.com/cdn/shop/products/Fullpower_3.png?v=1676024495"
    },

    {
        "plant_Name": "All-Purpose",
       
        "plant_price": "7.99",
        "plant_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoPv5sXTCr8LRAOiVlI3IDXMgGSBlOdIRcLz0N8InWTbdmMKsIuUTnoLgHk6JOjnCCdI&usqp=CAU"
    },
    {
        "plant_Name": "Soil Conditioner",
        
        "plant_price": "14.99",
        "plant_image": "https://2.wlimg.com/product_images/bc-full/2023/9/5968225/soil-conditioner-1663052029-6536072.jpg"
    },
    {
        "plant_Name": "Microbial Blend",
       
        "plant_price": "15.99",
        "plant_image": "https://m.media-amazon.com/images/I/51djzuhnTxL._AC_UF1000,1000_QL80_.jpg"
    }
]
var Grow_Bags = [
    {
        "plant_Name": "Fabric Grow Bags",

        "plant_price": "9.99",
        "plant_image": "https://m.media-amazon.com/images/I/71FRsaeL2nL._SX679_.jpg"
    },
    {
        "plant_Name": "Plastic Grow Bags",
        "plant_price": "5.99",
        "plant_image": "https://gogarden.co.in/cdn/shop/files/GROW-BAG_dc953e0b-2855-45f3-ba64-eebb07b1efe2.jpg?v=1683975708"


    },
    {
        "plant_Name": "Felt Grow Bags",
        "plant_price": "7.99",
        "plant_image": "https://m.media-amazon.com/images/I/81c5MHgVrOS._SX679_.jpg"
    },
    {
        "plant_Name": "Biodegradable Grow Bags",
        "plant_price": "8.99",
        "plant_image": "https://m.media-amazon.com/images/I/71n51gmA4TL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "plant_Name": "Vertical Grow Bags",
        "plant_price": "12.99",
        "plant_image": "https://m.media-amazon.com/images/I/81nF4le4NkS._AC_UF894,1000_QL80_.jpg"
    },
    {
        "plant_Name": "Hanging Grow Bags",
        "plant_price": "6.99",
        "plant_image": "https://www.sowandgrow.in/cdn/shop/products/HangingPots_1200x1200.jpg?v=1630591499"
    },
    {
        "plant_Name": "Aquaponic Grow Bags",
        "plant_price": "14.99",
        "plant_image": "https://agrierp.com/blog/wp-content/uploads/2022/10/Aquaponics-System.jpg"
    },


    {
        "plant_Name": "Smart Pot Grow Bags",
        "plant_price": "500.99",
        "plant_image": "https://m.media-amazon.com/images/I/71C71dJzXGL._AC_UF350,350_QL80_.jpg"
    }
];

//ganeshreddy6498@gmail.com

var z = 0
function seed1() {
    var x = document.getElementById("one");

    if (z == 0) {
        x.style.display = "block"
        z = z + 1
    }
    else {
        x.style.display = "none"
        z = 0
    }
}
// in this function to view the all indoor plans in div id="Indoor-seed" id="one" is to close the dropdown menu of seed

function indoor(x1) {
    var plant500=''
    if (x1 == 'indoor_plant') {
        plant500 = indoor_plants
        
    }
    else if (x1 == 'Outdoor_plants') {
        plant500 = outdoor_plants
    }
    else if (x1 == 'Grow_Bags') {
        plant500 = Grow_Bags
    }
    else if (x1 == 'Live_Plants') {
        plant500 = seed_indoor
    }
    else if (x1 == 'Organic') {
        plant500 = fetilizer
    }
    


    var mainimg = document.getElementById("main-image");
    var pop1 = document.getElementById("one");
    var addcart = document.getElementById("ADD1")
    addcart.style.display = "none"
    pop1.style.display = "none"
    mainimg.style.display = "none"
    var x = document.getElementById("Indoor-seeds");
    x.innerHTML = ''; // Clear the div before adding new content

    for (var i = 0; i < plant500.length; i++) {
        var y = document.createElement("div");
        var z = document.createElement("div");

        y.className = "Indoor1";
        z.className = "plant-image";

        var imgElement = document.createElement("img");
        var plant_Name = document.createElement("div");
        plant_Name.className = "plant_name";


        var plant_Name_1 = document.createElement("p");
        var plant_Name_cost = document.createElement("p");

        var currentPlant = plant500[i];

        y.id = currentPlant["plant_Name"];

        //ganeshreddy6498@gmail.com
        plant_Name_1.innerHTML = currentPlant["plant_Name"];
        plant_Name_cost.innerHTML = '$' + currentPlant["plant_price"]; // Add dollar sign for price

        plant_Name.appendChild(plant_Name_1);
        plant_Name.appendChild(plant_Name_cost);

        imgElement.src = currentPlant["plant_image"];
        z.appendChild(imgElement);

        y.appendChild(z);
        y.appendChild(plant_Name);

        // Assign click event to plant_Name div
        // Bind click event to plant_Name_1 element (plant name) inside plant_Name div
        plant_Name_1.onclick = showFullview.bind(null, currentPlant);// her for bind function first





        x.appendChild(y);
        x.style.display = "grid"

    }
    
}


function showFullview(plant) {

    var x12 = document.getElementById("one");
    x12.style.display = "none"

    var x = document.getElementById("Indoor-seeds");
    var add2 = document.getElementById("ADD1")
    add2.style.display = "block"
    x.style.display = "none"
    var fullviewImg = document.getElementById("fullview-img");
    var fullviewPlantName = document.getElementById("fullview-plantName");
    var fullviewPlantCost = document.getElementById("fullview-plantCost");


    fullviewImg.src = plant["plant_image"];
    fullviewPlantName.textContent = plant["plant_Name"];
    fullviewPlantCost.textContent = ' ' + '$' + '   ' + plant["plant_price"];
   
}
//--------------------------------------------------------------------------------------------------------------------
a = 0
function add() {
    var inc = document.getElementById("increase")
    inc.innerHTML="1"
    var inc2
    a = a + 1
    if (a <= 10) {
        inc.innerHTML = a


    }




}
function sub() {
    var inc = document.getElementById("increase")
    
    a = a - 1
    if (a >= 1) {
        inc.innerHTML = a

    }

}
// here it cart function is used add the element to cart function
function cart() {
    var userlog_check = document.getElementById("username_log")
    x100 = userlog_check.textContent
    if (x100.length >= 1) {
        var x = document.getElementById("fullview-img");
        var y = document.getElementById("fullview-plantName");
        var z = document.getElementById("fullview-plantCost");
        var x1 = document.getElementById("increase");
        console.log(y.innerHTML);

        var cart1 = document.createElement("div");
        cart1.className = "cart2";
        cart1.id = y.innerHTML + "-" + Date.now(); // Use y.innerHTML with a unique identifier

        var cart_img = document.createElement("img");
        cart_img.className = "cart2-1";
        cart_img.src = x.src;

        var cart_name = document.createElement("p");
        cart_name.className = "cart2-2";
        cart_name.innerHTML = y.textContent;

        var cart_qt = document.createElement("p");
        cart_qt.className = "cart2-3";
        cart_qt.innerHTML = x1.textContent;

        var cart_cost = document.createElement("p");
        cart_cost.className = "cart2-5";
        total1 = z.textContent.replace("$", "")

        total2 = x1.textContent
        total = total1 * total2
        console.log(total, total1, z.innerHTML)
        cart_cost.innerHTML = "$ " + total;
        var cart_button = document.createElement("img");
        cart_button.className = "cart2-4";
        cart_button.src = "remove.png"



        cart_button.onclick = function () {
            remove(cart1.id);

        };

        cart1.appendChild(cart_img);
        cart1.appendChild(cart_name);
        cart1.appendChild(cart_qt);
        cart1.appendChild(cart_cost);
        cart1.appendChild(cart_button);

        var cart = document.getElementById("cart");
        cart.appendChild(cart1);
        
    }
   
    //ganeshreddy6498@gmail.com

        
        
    
    
}
// to show the popup message as added to cart when we click add to cart

function add_to_cart() {
    var id1 = document.getElementById("username_log")
    x = id1.textContent
    if (x.length === 0) {
        var t = document.getElementById("login_check")
        t.style.display = "block"
        setTimeout(function () {
            t.style.display = "none"; // Hide the div after 200 milliseconds
        }, 1000);
        
    }
    else {
        var Add_cart_messasge = document.getElementById("message");
        Add_cart_messasge.style.display = "block"
        setTimeout(function () {
            Add_cart_messasge.style.display = "none"; // Hide the div after 200 milliseconds
        }, 1000);
        
    }
    


}


function remove(cart_item) {
    var cart_item1 = document.getElementById(cart_item);
    cart_item1.style.display = "none"

}

///open cart when click cart image
function opencart() {
    var cart = document.getElementById("cart")
    var indoor = document.getElementById("Indoor-seeds")
    var x = screen.width
    if (x > 412) {
        indoor.style.width = "79%"
    }
   
    cart.style.display = "grid"

}
function close1() {
    var x = document.getElementById("cart")
    x.style.display = "none"
    var indoor = document.getElementById("Indoor-seeds")
    indoor.style.width = "100%"
}