$(document).ready(function() {
$('.slider').slick({
    centerMode: true,
    autoplay: true,
    arrows: true,
    infinite:true,
    centerPadding: '300px',
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });

});
  const bannerdatas = [

        {
            imagesrc: "assets/sports.avif",
            imagecaption1: "Highlights",
            imagecaption2: "India vs Australia"
        },
        {
            imagesrc: "assets/biggboss.avif",
            imagecaption1: "Highlights",
            imagecaption2: "India vs Australia"
        },
        {
            imagesrc: "assets/banner1.avif",
            imagecaption1: "BiggBoss | New Episode",
            imagecaption2: "Season 14"
        },
        {
            imagesrc: "assets/sports.avif",
            imagecaption1: "Highlights",
            imagecaption2: "India vs Australia"
        }

  ]

  const slider = document.querySelectorAll(".slider");

 showData = bannerdatas.map((bannerdata )=>{
    return `
        <div class="slider-cont">
            <div class="subtexts" style="background-image: url(${bannerdata.imagesrc});">
                <h3>${bannerdata.imagecaption1}</h3>
                <h4>${bannerdata.imagecaption2}</h4>
            </div>
        </div>
                
    `
  });
 slider[0].innerHTML = showData.join('');


const hotrightnow = [
    {
        imagesrc : "assets/card1-hot.webp",
        alt: 'BiggBoss',
    },
    {
        imagesrc : "assets/card2-hot.webp",
        alt: 'flash',
    },
    {
        imagesrc : "assets/card3-hot.webp",
        alt: 'motupatlu',
    }
]

const hotcards= document.querySelector('.hot_cards');

seeData = hotrightnow.map((hot)=>{
            return `
            
            <div class="card_1">
               <img src="${hot.imagesrc}" alt="${hot.alt}">
           </div>
            
            
            `
  });

hotcards.innerHTML = seeData;


$(document).ready(function() {
    $('.sports_cards').slick({
        autoplay: true,
        arrows: true,
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
      });
    
    });

const sportsData = [

    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    },
    {
        imagesrc: "assets/sports.avif",
        alt:'sport'
    }

]

const sportsCards = document.querySelector('.sports_cards');

seeData1 = sportsData.map((sportitem)=>{
    return `
    
    <div class="card_1">
       <img src="${sportitem.imagesrc}" alt="${sportitem.alt}">
   </div>
    
    
    `
});
console.log(seeData1);
sportsCards.innerHTML = seeData1;

//menu items js //
let menuItems = document.querySelectorAll('.menu ul li');
menuItems.forEach((val) => {
    val.addEventListener('click', (e)=>{
        menuItems.forEach((val) => {
            val.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});