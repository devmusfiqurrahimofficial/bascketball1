let AlexOvechkin={
    name:"Alex Ovechkin",
    imgurl:"image/player1.png",
    btnId:"alex"

}
let AustonMatthews={
    name:"Auston Matthews",
    imgurl:"image/player-2.png",
    btnId:"auston"
}
let stanely={
    name:"Stanley",
    imgurl:"image/player-3.png",
    btnId:"stanley"
}
let SidneyCrosby={
    name:"Sidney Crosby",
    imgurl:"image/player-44.png",
    btnId:"sidney"
}
let ConnorMcDavid={
    name:"Connor McDavid",
    imgurl:"image/player-5.png",
    btnId:"connor"
}

let victorHedman={
    name:"Victor Hedman",
    imgurl:"image/player-6.png",
    btnId:"Victor"
}
let Partrik={
    name:"Partrik",
    imgurl:"image/player-7.png",
    btnId:"partrik"
}
let nikitaKucherov={
    name:"Nikita Kucherov",
    imgurl:"image/player-8.png",
    btnId:"nikita"
}
let marioLemieux={
    name:"Mario Lemieux",
    imgurl:"image/player-9.png",
    btnId:"mario"
}
// array of objects
let hockeyPlayers=[
    AlexOvechkin,
    AustonMatthews,
    stanely,
    SidneyCrosby,
    ConnorMcDavid,
    victorHedman,
    Partrik,
    nikitaKucherov,
    marioLemieux,]
    
let noLi=1;

function displayCards(card){
    const containter=document.getElementById("card-contaoner");
    const div=document.createElement("div");
    div.innerHTML=`<div class="m-3 card bg-base-100 w-96 border border-white border-2 ">
                 <figure class="" >
                    <img
                        src="${card.imgurl}"
                        
                    />
                </figure>
                <div class="bg-blue-950 card-body items-center text-white text-center">
                    <h2 class="card-title">${card.name}</h2>
        
                    <div class="card-actions">
                        <button id="${card.btnId}" class="btn btn-primary">Select</button>
                     </div>
                </div>
            </div>`;
               containter.appendChild(div)
         const cardbtn=document.getElementById(card.btnId)
         const ul=document.getElementById("selected_ul")
         cardbtn.addEventListener("click",function(e){
           e.preventDefault();
           const li=document.createElement("li");
           ul.appendChild(li);
           li.innerHTML=`
           <li class="py-2 text-white text-lg">${card.name}</li>`
          cardbtn.setAttribute("disabled", "true");

          cardbtn.classList.add("bg-gray-500","hover:bg-gray-500", ); 
           })
       
}

function calculate(){
            const moul=document.getElementById("selected_ul")
            const chili=moul.children.length
            const perPlayer2=document.getElementById("perPlayer")
            const valueAsNumber = perPlayer2.valueAsNumber
            const val=document.getElementById("playex")
            const value=valueAsNumber*chili
            val.innerHTML=value
             const manager=document.getElementById("manager")
                const managerval = manager.valueAsNumber
                const coach=document.getElementById("coach")
                const coachval = coach.valueAsNumber
                const total=value+coachval+managerval
                const tot=document.getElementsByID("Total")
                tot.innerHTML=total
            }

function cacl(){
    const moul=document.getElementById("selected_ul")
            const chili=moul.children.length
            const perPlayer2=document.getElementById("perPlayer")
            const valueAsNumber = perPlayer2.valueAsNumber
            const val=document.getElementById("playex")
            const value=valueAsNumber*chili
            val.innerHTML=value
             const manager=document.getElementById("manager")
                const managerval = manager.valueAsNumber
                const coach=document.getElementById("coach")
                const coachval = coach.valueAsNumber
                const total=value+coachval+managerval
                const tot=document.getElementById("Total")
                tot.innerHTML=total
            }

displayCards(AlexOvechkin);
displayCards(AustonMatthews);
displayCards(stanely);
displayCards(SidneyCrosby);
displayCards(ConnorMcDavid);
displayCards(victorHedman);  
displayCards(Partrik);
displayCards(nikitaKucherov);
displayCards(marioLemieux);