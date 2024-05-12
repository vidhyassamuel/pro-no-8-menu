const menu = [
  {  
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://th.bing.com/th/id/R.47a635c80c67a7ecfd58b6e3bf4a61f8?rik=kBu9Uema3hK7iw&riu=http%3a%2f%2fwww.melissahartfiel.com%2fwp-content%2fuploads%2f2013%2f04%2f20130426-1304_untitled0051.jpg&ehk=n5Aoqgsqv7VERcHRAHV7gUSficnJRMA0gesRmZHRCWI%3d&risl=&pid=ImgRaw&r=0",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
 {
        id: 2,
        title: "diner double",
        category: "lunch",
        price:13.99,
        img: " https://modernfarmer.com/wp-content/uploads/2018/11/shutterstock_693458362-1.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
 {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img:".https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
        desc:`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
 {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://nypost.com/wp-content/uploads/sites/2/2016/08/burger2.jpg?quality=90&strip=all&w=1328 ",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
 {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price:22.99,
        img: " https://www.tripsavvy.com/thmb/PvrNbqxmGsKxvrlGZW_e8ZqAfJw=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1148155611-5ae6311afe64427caf4d3dc0cf049406.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
 {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: " https://www.tasteofhome.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-17-at-4.59.15-PM-copy.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
 },
{
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: " https://www.gannett-cdn.com/presto/2019/09/09/PGRB/2ad282a8-83ba-4f48-918a-50c24eaa988d-uscp-76zq6oecz886146qbvg_original.jpg?crop=5303,2983,x0,y217&width=3200&height=1801&format=pjpg&auto=webp",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
   },
{
        id: 8,
        title: "american classic",
        category: "lunch",
        price:12.99,
        img: " https://www.spoonforkbacon.com/wp-content/uploads/2021/10/thanksgiving-dessert-recipes.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
 },

 {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price:16.99,
        img: "https://www.al.com/resizer/NsRk5GM0gxKHIF4XmrVz-PedIUk=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SQ4QCQPEKBBM5HZJMXAMENBPUQ.jpg ",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
    ];
    
 const sectionCenter = document.querySelector(".section-center");
    window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
   // console.log(item);
    
   return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
         <header>
            <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
          </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
      });
      displayMenu = displayMenu.join("");
      console.log(displayMenu);
    
      sectionCenter.innerHTML = displayMenu;
    });