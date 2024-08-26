const cardContainer=document.querySelector(".container");
const cards = [
{
    id:1 , title:"Perfected Strategies for you" , dis:"Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum." , 
      image1:"a22c95a96b25b207b760ab6545995150.png",
    // image2:"b3de947c39102b151251150791b5ba1e.png"
},

{
    id:2 , title:"Perfected Strategies for you" , dis:"Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum." , 
    image1:"./a22c95a96b25b207b760ab6545995150.png",
    // image2:"./b3de947c39102b151251150791b5ba1e.png"
},

{
    id:3 , title:"Perfected Strategies for you" , dis:"Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum." , 
    image1:"./a22c95a96b25b207b760ab6545995150.png",
    // image2:"./b3de947c39102b151251150791b5ba1e.png"
},
] ;

for (let i =0; i<cards.length ; i++){
    cardContainer.innerHTML += `
    <div class="card">
<div class="card-image">
    <img src="${cards[i].image1}">
  
    </div>
//     <div class="logo-image">
// <img src="${cards[i].image2}">
//     </div>

<div class="discription">
    <h2>${cards[i].title}</h2>
    <p>${cards[i].dis}</p>
</div>
</div>
    `
}