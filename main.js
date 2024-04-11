let isLoaded= false;

document.addEventListener("scroll", () => {
    if(!isLoaded){

        isLoaded=true;

        let speed = 1;
        let angle = 0;
        let direction = "left";

        const marquee = document.querySelector(".marquee");

        if(marquee){
          
    
          function slide() {
            
            let container = marquee.querySelector(".marquee-inner");
            const content = marquee.querySelectorAll(".marquee-inner > *");
    
            //Duplicate content faire une boucle pleeeaaaase
    
            for(let i=0; i < 2; i++){
              content.forEach(el => {
                let clone = el.cloneNode(true);
                clone.setAttribute("aria-hidden", true);
                container.appendChild(clone);
              });
            }
    
            //Get total width
            const elWidth = container.offsetWidth;
    
            console.log(elWidth)
    
            let progress = (elWidth / 3) * -1;
    
    
            function loop() {
              
              if(direction=== "right"){
                progress = progress + speed;
                if (progress >= 0 + 24){
                  progress = (elWidth / 3) * -1;
                }
              }else{
                progress = progress - speed;
                if (progress <= ((elWidth * -1)/3) -24 ){
                  progress = 0;
                }
              }
              
              container.style.transform = "translateX(" + progress + "px)";
              container.style.transform += "skewX(" + angle + "deg)";
    
              window.requestAnimationFrame(loop);
            }
    
            const cards= container.querySelectorAll("a");
    
            cards.forEach(card=> {
              card.addEventListener("mouseenter", ()=>{
                speed= 0;
          
              });
              card.addEventListener("mouseleave", ()=>{
                speed= 1;
          
              });
            });
          
            const categoryNextBtn= document.querySelectorAll(".categories_next-button");
            const categoryPrevBtn= document.querySelectorAll(".categories_prev-button");
          
            categoryNextBtn.forEach(btn=> {
              btn.addEventListener("mouseenter", ()=>{
                speed= 0;
                angle= 0;
              });
            
              btn.addEventListener("mousedown", ()=>{
                speed= 5;
                angle= -1.2;
                direction= "left";
              });
          
              btn.addEventListener("touchstart", ()=>{
                speed= 5;
                angle= -1.2;
                direction= "left";
              });
            
              btn.addEventListener("mouseup", ()=>{
                speed= 0;
                angle= 0;
              });
            
              btn.addEventListener("mouseleave", ()=>{
                speed= 1;
                angle= 0;
              });
          
              btn.addEventListener("touchcancel", ()=>{
                speed= 1;
                angle= 0;
              });
          
              btn.addEventListener("touchend", ()=>{
                speed= 1;
                angle= 0;
              });
            });
          
            categoryPrevBtn.forEach(btn=> {
            
              btn.addEventListener("mouseenter", ()=>{
                speed= 0;
                angle= 0;
              });
            
              btn.addEventListener("mousedown", ()=>{
                direction= "right";
                speed= 5;
                angle= 2.4;
              });
          
              btn.addEventListener("touchstart", ()=>{
                direction= "right";
                speed= 5;
                angle= 2.4;
              });
            
              btn.addEventListener("mouseup", ()=>{
                speed= 0;
                angle= 0;
              });
            
              btn.addEventListener("mouseleave", ()=>{
                speed= 1;
                angle= 0;
              });
          
              btn.addEventListener("touchcancel", ()=>{
                speed= 1;
                angle= 0;
              });
          
              btn.addEventListener("touchend", ()=>{
                speed= 1;
                angle= 0;
              });
            });
    
            loop();

        };
    
          slide();
        }
        else return;
    }
    else return;
});

document.addEventListener("click", e=> {
  let handle;

  if (e.target.matches(".handle")) handle = e.target;
  else handle = e.target.closest(".handle");

  if (handle !== null) onHandleClick(handle);
});

function onHandleClick(handle){
  console.log(handle)
  const scroller= handle.closest(".scroller-container").querySelector(".media-scroller");
  const scrollerIndex= parseInt(getComputedStyle(scroller).getPropertyValue("--scroller-index"));
  
  if(handle.classList.contains("next-handle")){
    
    scroller.style.setProperty("--scroller-index", scrollerIndex - 1);
    console.log(scroller)
  };

  if(handle.classList.contains("previous-handle")){
    scroller.style.setProperty("--scroller-index", scrollerIndex + 1);
    console.log(scroller)
  };
}

// menu dropdown page produit

const dropdownBtn= document.querySelector(".btn-group.product-content_menu > .accordion-button");
const toggleBtn= document.querySelectorAll(".dropdown-menu .accordion-button");

toggleBtn.forEach(btn=> {
  btn.addEventListener("click", ()=> dropdownBtn.innerHTML= btn.innerHTML);
});