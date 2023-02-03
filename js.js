
const btnSendOne = document.querySelector('#btnSendOne')
const btnSendTwo = document.querySelector('#btnSendTwo')

const inputTextRigth = document.querySelector('.textRigth')
const inputTextLeft = document.querySelector('.textLeft')

const msnMainOne = document.querySelector('.msnOne')
const msnMainTwo = document.querySelector('.msnTwo')

const messagenFindLeft= document.querySelector('.messagen-find-left')
const messagenSendLeft= document.querySelector('.messagen-send-left')

const messagenFindRigth= document.querySelector('.messagen-find-rigth')
const messagenSendRigth= document.querySelector('.messagen-send-rigth')

const msnLeft = document.querySelector('.msnLeft')
const msnRigth = document.querySelector('.msnRigth')

const datePresent = document.querySelector('.date-present')

let hour =''
let min= ''
let minMenorThatZero= ''

const getTimeHour = ()=>{

    setInterval(()=>{
    const date = new Date()

    hour = date.getHours()
    min = date.getMinutes()
    
     minMenorThatZero=  min <= 9 ?  `0${min}` : min

 },1000)
}


 const sendMsntoRigth = ()=>{


    let inputValueLeft = inputTextLeft.value
     messagenFindRigth.innerHTML+=`
    <section class=" msn messagen-send messagen-send-rigth">
    <p>${hour}:${minMenorThatZero}</p>
    <div class="msn msnLeft">
    <p>${inputValueLeft}</p>
    </div>
    </section>`
    
    messagenFindLeft.innerHTML+=`
    <section class=" msn messagen-send messagen-send-left">
    <p>${hour}:${minMenorThatZero}</p>
    <div class="msn msnRigth">
    <p>${inputValueLeft}</p>
    </div>
    </section>` 
   inputTextLeft.value=''

}

const sendMsntoLeft = ()=>{

   let inputValueRigth = inputTextRigth.value

   messagenFindLeft.innerHTML+=`
   <section class=" msn messagen-send messagen-send-left">
   <p>${hour}:${minMenorThatZero}</p>
        <div class="msn msnLeft">
             <p>${inputValueRigth}</p>
        </div>
   </section>`

   messagenFindRigth.innerHTML+=`
   <section class="msn messagen-send messagen-send-rigth">
   <p>${hour}:${minMenorThatZero}</p>
        <div class="msn msnRigth">
             <p>${inputValueRigth}</p>
        </div>
   </section>`

   inputTextRigth.value=''
}


btnSendOne.addEventListener('click', ()=> {
    sendMsntoRigth()
    getTimeHour()
})

btnSendTwo.addEventListener('click', ()=> {
    sendMsntoLeft()
    getTimeHour()
})