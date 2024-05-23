var isHoveringNav = false;
var navs = {
    "home": $("#nav-home"),
    "menu": $("#nav-menu"),
    "print": $("#nav-printable"),
    "review": $("#nav-rev")
}
var currentNav = "home";
var availibleConversions = [
    {
        "name": "Argentina",
        "currency_code": "ARS",
        "currency_name": "Argentine Peso"
      },
      {
        "name": "Bolivia",
        "currency_code": "BOB",
        "currency_name": "Bolivian Boliviano"
      },
      {
        "name": "Chile",
        "currency_code": "CLP",
        "currency_name": "Chilean Peso"
      },
      {
        "name": "Colombia",
        "currency_code": "COP",
        "currency_name": "Colombian Peso"
      },
      {
        "name": "Costa Rica",
        "currency_code": "CRC",
        "currency_name": "Costa Rican Colón"
      },
      {
        "name": "Cuba",
        "currency_code": "CUP",
        "currency_name": "Cuban Peso"
      },
      {
        "name": "Dominican Republic",
        "currency_code": "DOP",
        "currency_name": "Dominican Peso"
      },
      /*
      {
        "name": "Ecuador",
        "currency_code": "USD",
        "currency_name": "United States Dollar"
      },
     /* {
        "name": "El Salvador",
        "currency_code": "USD",
        "currency_name": "United States Dollar"
      },*/
      {
        "name": "Guatemala",
        "currency_code": "GTQ",
        "currency_name": "Guatemalan Quetzal"
      },
      {
        "name": "Honduras",
        "currency_code": "HNL",
        "currency_name": "Honduran Lempira"
      },
      {
        "name": "Mexico",
        "currency_code": "MXN",
        "currency_name": "Mexican Peso"
      },
      {
        "name": "Nicaragua",
        "currency_code": "NIO",
        "currency_name": "Nicaraguan Córdoba"
      },
      {
        "name": "Panama",
        "currency_code": "PAB",
        "currency_name": "Panamanian Balboa"
      },
      {
        "name": "Paraguay",
        "currency_code": "PYG",
        "currency_name": "Paraguayan Guarani"
      },
      {
        "name": "Peru",
        "currency_code": "PEN",
        "currency_name": "Peruvian Sol"
      },
      {
        "name": "Spain",
        "currency_code": "EUR",
        "currency_name": "Euro"
      },
      {
        "name": "Uruguay",
        "currency_code": "UYU",
        "currency_name": "Uruguayan Peso"
      },
      {
        "name": "Venezuela",
        "currency_code": "VES",
        "currency_name": "Venezuelan Bolívar"
      },
      {
        "name": "Belize",
        "currency_code": "BZD",
        "currency_name": "Belize Dollar"
      },
      /*
      {
        "name": "Puerto Rico",
        "currency_code": "USD",
        "currency_name": "United States Dollar"
      },*/
]
var excRates = "";
var currentCurrency = "EUR";
var menu = {
  "sections": [
    {
      "section_name": "Principal Comida",
      "items": [
        {
          "name": "Camarones al Ajillo",
          "description": "Los camarones, cebollas, aceite vegetal, chile picante polvo",
          "price_usd": 16.99,
          "img": "https://www.goya.com/media/6630/spanish-garlic-shrimp-new.jpg?quality=80"
        },
        {
          "name": "Carne de Res a la Parrilla",
          "description": "carne de res con los verduras",
          "price_usd": 18.99,
          "img": "https://myplate-prod.azureedge.us/sites/default/files/styles/recipe_525_x_350_/public/2021-09/HerbBroiledBeef_527x323.jpg?itok=Jmrv8DXn"
        },
        {
          "name": "Pollo en Salsa de Mango",
          "description": "Pollo con mango salsa",
          "price_usd": 14.99,
          "img": "https://cdn0.recetasgratis.net/es/posts/6/3/5/pechugas_de_pollo_con_salsa_de_mango_10536_orig.jpg"
        },
        {
          "name": "Pescado fresco",
          "description": "Pescado fresco con limon salsa",
          "price_usd": 12.99,
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWTKTPMMYRJUhqfulFhLTiR_iSbzo276UT6ZI3b072w&s"
        },
        {
          "name": "Enchiladas de pollo",
          "description": "enchiladas con pollo, queso, tortilla, sal",
          "price_usd": 10.99,
          "img": "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5FBFFFED-E63C-4B1F-9470-AA301ADDBC7D/Derivates/b13978f1-38a8-43a2-8969-d5ff091efe70.jpg"
        },
        {
          "name": "Hamburguesa pavo",
          "description": "un hambergesa usando pavo, tener: queso, cebollas, lechuga, y tomate",
          "price_usd": 6.99,
          "img":"https://assets.unileversolutions.com/recipes-v2/94386.jpg"
        },
      ],
      
    },
    {
      "section_name": "Tapas",
      "items": [
        {
          "name": "Ensalada de Frutas",
          "description": "los melon, pera, frambuesa, fresas, y mango",
          "price_usd": 6.99,
          "img": "https://cdn0.recetasgratis.net/es/posts/1/7/3/ensalada_de_frutas_26371_orig.jpg"
        },
        {
          "name": "Patatas Bravas",
          "description": "camote, chile picante, cebollas",
          "price_usd": 5.99,
          "img": "https://www.allrecipes.com/thmb/n_OOwj92X4rpCZyQ8sULHBUR95k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230569-chef-johns-patatas-brazas-ddmfs-2X3-0917-2e7985bf896d4ea0b1baa2a0c826ea0d.jpg"
        },
        {
          "name": "Arroz con Verduras",
          "description": "arroz blanco con verduras fresco ",
          "price_usd": 4.99,
          "img": "https://myplate-prod.azureedge.us/sites/default/files/styles/recipe_525_x_350_/public/2022-08/VegetableFriedRice_527x323.jpg?itok=rS2hlgtv"
        },
        {
          "name": "Guacamole",
          "description": "usando los aguacates muy frescos",
          "price_usd": 8.99,
          "img": "https://www.simplyrecipes.com/thmb/J4kA2m6jKMgkQwZhG-RYpjZBeFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guacamole-LEAD-6-2-64cfcca253c8421dad4e3fad830219f6.jpg"
        },
        {
          "name": "Chiles Rellenos",
          "description": "los chiles, queso, carne de res, y salsa de tomate",
          "price_usd": 10.99,
          "img": "https://www.allrecipes.com/thmb/_FsB-a3WwtkDOV9NDCv_Qdwfs1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219646-Authentic-Mexican-Chile-Rellenos-DDMFS-3032-4x3-Beauty-c9604f57112a47ee8bdee06a98a761c3.jpg"
        }
      ],
    },
    {
      "section_name": "Dulces",
      "items": [
        {
          "name": "Pastel de Frambuesa",
          "description": "frambuesas en pastel blanco",
          "price_usd": 7.99,
          "img": "https://live.staticflickr.com/65535/52648652030_316acfa43a_b.jpg"
        },
        {
          "name": "Helado de Papaya",
          "description": "Las papayas en helado ",
          "price_usd": 6.99,
          "img": "https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2016/07/helado-papaya1.jpg"
        }
      ],
    },
    {
      "section_name": "Bebidas",
      "items": [
        {
          "name": "Jugo de Durazno",
          "description": "Durazno jugo, y otra frutas",
          "price_usd": 3.99,
          "img": "https://i.pinimg.com/736x/6a/13/b1/6a13b1e121f73651d838e4c16d741356.jpg"
        },
        {
          "name": "Té Helado",
          "description": "Te con limon",
          "price_usd": 2.99,
          "img": "https://t1.uc.ltmcdn.com/es/posts/5/8/3/como_preparar_te_helado_15385_orig.jpg"
        },
        {
          "name": "Licuado de Frutas Frescas",
          "description": "Frutas fresco en fruta jugosa. las frutas es duraznos, fresas, papaya, mango y melon",
          "price_usd": 4.99,
          "img": "https://i.blogs.es/5925c6/batido-1/650_1200.jpg"
        }
      ]
    }
  ]
}


function displayMenuItems() {
  $("#menu-items").html('');
  for (let i = 0; i < menu.sections.length; i++) {
    let section = menu.sections[i];
    //console.log(section.section_name);

    $("#menu-items")[0].innerHTML += `<h1 class="menu-divider">${section.section_name}</h1>
    <div class="menu-items" id="menu-items-${btoa(section.section_name)}"></div>
    `

      for (item in section.items) {
        var _item = section.items[item];
        console.log(_item.name);
        console.log(_item.description);
        console.log(_item.price_usd);
        document.getElementById("menu-items-"+btoa(section.section_name)).innerHTML += `
        <div class="item">
        <h3 style="margin: 0;">${_item.name}</h3>
        <img src="${_item.img}" class="item-img" alt="">
        <div class="item-desc">
          ${_item.description}
        </div>
        <div class="price">
          <div class="price-usd">$${_item.price_usd}</div>
          <div class="price-esp">${convertCurrency(currentCurrency, _item.price_usd) +" "+currentCurrency}</div>
        </div>
      </div>
        `
      }
      }
}



function convertCurrency(to, amount) {
  console.log(amount,to)
  console.log("converting $" + amount + "USD to " + to + ": " + Math.round(excRates[to] * amount * 100) /100);
  return Math.round(excRates[to] * amount * 100) /100;
}


  function getLatestRates() {
    var apiKey = '9cd8c1d338bf4bb69d0529fb0a0ee424';
    const apiUrl = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Do something with the response data
        excRates = data.rates;
        console.log("got current exchange rates.")
        console.log(data.rates);
      })
      .catch(error => {
        alert("error reaching our exchange rates api")
        displayMenuItems();
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  


function showNav(btn,name) {
    if (btn !== "") {
        $("button").removeClass("active");
        btn.classList.add("active");
    }
    $(".nav").hide();
    navs[name].show();
}



function resizeTopNav() {
   // console.log(window.scrollY)
    if (window.scrollY < 3 || isHoveringNav) {
        $("#btns").removeClass("offload")
        $(":root")[0].style.setProperty("--tnav-height","150px")
        $("#btns").addClass("onload");
        $("#btns").show()
    }else {
        $("#btns").removeClass("onload")
        $(":root")[0].style.setProperty("--tnav-height","85px")
        $("#btns").addClass("offload");
    }
}


function showAvailbeConversions() {
  for (i in availibleConversions) {
   var item = availibleConversions[i];
    $("#menu-curr")[0].innerHTML += `<option value="${item.currency_code}">${item.currency_name}</option>`
  }
}


function changeCurr() {
  currentCurrency = $("#menu-curr").val();
  console.log(currentCurrency)
  $("#menu-items").html("")
  setTimeout(displayMenuItems, 500)
}

showAvailbeConversions();
resizeTopNav();
showNav("","home");
getLatestRates()
setTimeout(displayMenuItems, 1000);
