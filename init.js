(function() { 

/*****************************************/
/*     globale Variablen fuer die App     */
/*****************************************/

var cookiesEnabledPreviousChoice=false;
var cookiesEnabled=false;
var p;

var baseDamage=[[55,45,12,14,5,1,15,25],
                [65,55,85,75,55,15,70,85],
                [70,65,35,45,6,1,45,55],
                [0,0,0,0,0,0,0,0],
                [75,70,85,75,55,15,70,85],
                [105,95,105,105,85,45,105,120],
                [90,85,80,70,70,45,75,75],
                [95,90,90,80,80,55,80,85]];
var aHp=10;
var dHp=10;
var aUnit=1;
var dUnit=1;
var aGround=1;
var dGround=1;
var dGroundStars=0;
var aGroundStars=0;


/*****************************************/
/*     Calculator initieren              */
/*****************************************/

async function initTinder(){
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

/****************************************************/
/*   ********************************************   */
/*   *      alles rund ums Hash in der url      *   */
/*   ********************************************   */
/****************************************************/

window.addEventListener("hashchange", function(){
  // On every hash change the render function is called with the new hash.
  // This is how the navigation of our app happens.
  render(decodeURI(window.location.hash));
}, false);

//This function decides what type of page to show depending on the current url hash value.
function render(url) {
  setTimeout(function(){
    document.getElementById("favoriten-container").classList.add("invisible");
    console.log("in render");
    // Get the keyword from the url.
    var temp = url.split('/')[0];
    //// Hide whatever page is currently shown.
    //$('.main-content .page').removeClass('visible');
    var map = {
      // The Homepage.
      '': function() {
            //// Clear the filters object, uncheck all checkboxes, show all the products
            //filters = {};
            //checkboxes.prop('checked',false);
            renderPage();
          },
      '#properties': function() {
                        renderPropertiesPage("properties-container");
                      },
      '#terms-of-use': function() {
                        renderPropertiesPage("terms-of-use-container");
                      },
      '#privacy-policy': function() {
                        renderPropertiesPage("privacy-policy-container");
                      },
      '#impressum': function() {
                        renderPropertiesPage("impressum-container");
                      },
      };
    
    // Execute the needed function depending on the url keyword (stored in temp).
    if (map[temp]){
      map[temp]();
    }
    // If the keyword isn't listed in the above - render the error page.
    else {
      renderErrorPage();
    }
 },5);//ende von setTimeout
}

/*************************************************/
/*          render Properties-Page               */
/*************************************************/

function renderPropertiesPage(page){
  document.getElementById(page).classList.remove("invisible");
  document.getElementById("loader").classList.add("invisible");
}

/************************************************/
/*          render Page               */
/************************************************/

async function renderPage(){
  document.getElementById("loader").classList.add("invisible");
  document.getElementById("favoriten-container").classList.remove("invisible");
}

/************************************************/
/*                  Start                       */
/************************************************/

//document.addEventListener('DOMContentLoaded', initTinder);
document.getElementById("a-unit-down").addEventListener('click',function(){
  document.getElementById("a-unit-"+aUnit).classList.add("invisible");
  if(aUnit>1){
    aUnit=aUnit-1;
  }else{
    aUnit=8;
  }
  document.getElementById("a-unit-"+aUnit).classList.remove("invisible");  
});
document.getElementById("a-unit-up").addEventListener('click',function(){
  document.getElementById("a-unit-"+aUnit).classList.add("invisible");
  if(aUnit<8){
    aUnit=aUnit+1;
  }else{
    aUnit=1;
  }
  document.getElementById("a-unit-"+aUnit).classList.remove("invisible");
});

document.getElementById("d-unit-down").addEventListener('click',function(){
  document.getElementById("d-unit-"+dUnit).classList.add("invisible");
  if(dUnit>1){
    dUnit=dUnit-1;
  }else{
    dUnit=8;
  }
  document.getElementById("d-unit-"+dUnit).classList.remove("invisible");
});
document.getElementById("d-unit-up").addEventListener('click',function(){
  document.getElementById("d-unit-"+dUnit).classList.add("invisible");
  if(dUnit<8){
    dUnit=dUnit+1;
  }else{
    dUnit=1;
  }
  document.getElementById("d-unit-"+dUnit).classList.remove("invisible");
});

document.getElementById("a-ground-down").addEventListener('click',function(){
  document.getElementById("a-ground-"+aGround).classList.add("invisible");
  if(aGround>1){
    aGround=aGround-1;
  }else{
    aGround=8;
  }
  document.getElementById("a-ground-"+aGround).classList.remove("invisible");
});
document.getElementById("a-ground-up").addEventListener('click',function(){
  document.getElementById("a-ground-"+aGround).classList.add("invisible");
  if(aGround<8){
    aGround=aGround+1;
  }else{
    aGround=1;
  }
  document.getElementById("a-ground-"+aGround).classList.remove("invisible");
});

document.getElementById("d-ground-down").addEventListener('click',function(){
  document.getElementById("d-ground-"+dGround).classList.add("invisible");
  if(dGround>1){
    dGround=dGround-1;
  }else{
    dGround=8;
  }
  document.getElementById("d-ground-"+dGround).classList.remove("invisible");
});
document.getElementById("d-ground-up").addEventListener('click',function(){
  document.getElementById("d-ground-"+dGround).classList.add("invisible");
  if(dGround<8){
    dGround=dGround+1;
  }else{
    dGround=1;
  }
  document.getElementById("d-ground-"+dGround).classList.remove("invisible");
});

document.getElementById("a-hp-down").addEventListener('click',function(){
  if(aHp>1){
    aHp=aHp-1;
  }else{
    aHp=10;
  }
  document.getElementById("a-hp-value").innerHTML=aHp;  
});
document.getElementById("a-hp-up").addEventListener('click',function(){
  if(aHp<10){
    aHp=aHp+1;
  }else{
    aHp=1;
  }
  document.getElementById("a-hp-value").innerHTML=aHp;  
});

document.getElementById("d-hp-down").addEventListener('click',function(){
  if(dHp>1){
    dHp=dHp-1;
  }else{
    dHp=10;
  }
  document.getElementById("d-hp-value").innerHTML=dHp;  
});
document.getElementById("d-hp-up").addEventListener('click',function(){
  if(dHp<10){
    dHp=dHp+1;
  }else{
    dHp=1;
  }
  document.getElementById("d-hp-value").innerHTML=dHp;  
});

document.getElementById("calc-button").addEventListener('click',function(){
  switch(dGround) {
    case 1: dGroundStars=0; break;
    case 2: dGroundStars=0; break;
    case 3: dGroundStars=1; break;
    case 4: dGroundStars=2; break;
    case 5: dGroundStars=4; break;
    case 6: dGroundStars=2; break;
    case 7: dGroundStars=3; break;
    case 8: dGroundStars=4; break;
    default: dGroundStars=0;
  }
  switch(aGround) {
    case 1: aGroundStars=0; break;
    case 2: aGroundStars=0; break;
    case 3: aGroundStars=1; break;
    case 4: aGroundStars=2; break;
    case 5: aGroundStars=4; break;
    case 6: aGroundStars=2; break;
    case 7: aGroundStars=3; break;
    case 8: aGroundStars=4; break;
    default: aGroundStars=0;
  }
  let bd=baseDamage[aUnit-1][dUnit-1]/100*aHp/10*(100-dHp*dGroundStars)/100;
  let survivor=Math.round(Math.max(dHp-aHp*bd,0));
  let bdConter=baseDamage[dUnit-1][aUnit-1]/100*survivor/10*(100-aHp*aGroundStars)/100;
  let survivorConter=Math.round(Math.max(aHp-survivor*bdConter,0));
  document.getElementById("answer").innerHTML="<h2>surviving attacker (if conter): "+survivorConter+" and defender "+survivor+"<h2>";  
});



/************************************************/
/*                  Ende                        */
/************************************************/

}) ();
