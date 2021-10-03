//check para tipos de pessoas
let checkMan = document.getElementById('checkMan')
let checkWoman = document.getElementById('checkWoman')
let checkChildren = document.getElementById('checkChildren')
//check tipo carnes
let checkGalinha = document.getElementById('checkGalinha')
let checkVaca = document.getElementById('checkVaca')
let checkVegan = document.getElementById('checkVegan')
//inputpara o Tempo
let horas = document.getElementById('horas')
let todosInputs = document.querySelector('#inputs')
let ress = document.getElementById('ress')
let add = document.getElementById('add')
let duracao = document.getElementById('duracao');
let clean =document.getElementById('clean');



add.addEventListener('click', ()=>{
    itensChurrasco();
})

clean.addEventListener('click', ()=>{
    alert(`a duracao e de ${duracao.value} `)
})

checkMan.addEventListener('change', ()=>{
    if (checkMan.checked){
        todosInputs.innerHTML += `<input class="caixaTexto" type="number" 
                                id="man" name="man" placeholder="Man"></input>`
    }
    if(!checkMan.checked){
        man.parentNode.removeChild(man)
    }
})

checkWoman.addEventListener('change', ()=>{
    if(checkWoman.checked){
        todosInputs.innerHTML += `<input class="caixaTexto" type="number" 
                                id="woman" name="woman" placeholder="Woman">`
    }
    if(!checkWoman.checked){
        woman.parentNode.removeChild(woman)
    }
})


checkChildren.addEventListener('change', ()=>{
    if(checkChildren.checked){
        todosInputs.innerHTML += `<input class="caixaTexto" type="number" 
                                    id="children" name="children" placeholder="children">`
    }
    if(!checkChildren.checked){
        children.parentNode.removeChild(children)
    }
})

// check para comidas

checkGalinha.addEventListener('change',()=>{
} )
checkVaca.addEventListener('change',()=>{
} )
checkVegan.addEventListener('change',()=>{
} )
// So para o homen
function itensChurrasco(){
    if (checkMan.checked && !checkWoman.checked && !checkChildren.checked){
        let carne = man.value * 400
        let cerveja = man.value * 1200
        let bebidas = man.value * 1000 
        todasRess(carne, cerveja, bebidas)
    }
    // So para o homen e a mulher
    if (checkMan.checked && checkWoman.checked && !checkChildren.checked){
        let carne = man.value * 400 + woman.value * 400
        let cerveja = man.value * 1200 + woman.value * 1200
        let bebidas = man.value * 1000 + woman.value * 1000
        todasRess(carne, cerveja, bebidas)
    }
    // So para o homen e a crianca
    if (checkMan.checked && !checkWoman.checked && checkChildren.checked){
        let carne = man.value * 400 + children.value * 400 / 2
        let cerveja = man.value * 1200
        let bebidas = man.value * 1000 + children.value * 1000 / 2
        todasRess(carne, cerveja, bebidas)
    }
    // So para a mulher
    if (checkWoman.checked && !checkMan.checked && !checkChildren.checked){
        let carne = woman.value * 400
        let cerveja = woman.value * 1200 
        let bebidas = woman.value * 1000 
        todasRess(carne, cerveja, bebidas)
    }
    
    // So para o Mulher e a crianca
    if (checkWoman.checked && !checkMan.checked && checkChildren.checked){
        let carne = woman.value * 400 + children.value * 400 / 2
        let cerveja = woman.value * 1200 
        let bebidas = woman.value * 1000 + children.value * 1000 / 2
        todasRess(carne, cerveja, bebidas)
    }
    // so Para a Crianca
    if(checkChildren.checked && !checkMan.checked && !checkWoman.checked){
        let carne = children.value * 400 / 2
        let bebidas = children.value * 1000 / 2
        ress.innerHTML = `<li id='carne'>${carne/1000} Kg de carne </li>`
        ress.innerHTML += `<li id='refri'>${bebidas/1000} L de Bebidas </li>`
    }
    // Para todos
    else{
        let carne = woman.value * 400 + children.value * 400/2 + woman.value * 400
        let cerveja = man.value * 1200 + woman.value * 1200
        let bebidas = woman.value * 1000 + man.value * 1000 + children.value * 100/2
        todasRess(carne, cerveja, bebidas)
    }
    
}
function todasRess(carne, cerveja, bebidas){

    
    if(checkGalinha.checked){
        ress.innerHTML = `<li id='frango'>Frango = ${carne/1000} Kg </li>`
        BebidasRess(cerveja, bebidas)
        if(checkGalinha.checked && checkVaca.checked && !checkVegan.checked){
            ress.innerHTML = `<li id='carne'>Carne Vermelha = ${carne/1000 /2} Kg </li>`
            ress.innerHTML += `<li id='frango'>Frango = ${carne/1000/ 2} Kg </li>`
            BebidasRess(cerveja, bebidas)
        }
        if(checkGalinha.checked && !checkVaca.checked && checkVegan.checked){
            ress.innerHTML = `<li id='vegan'>Carne Vegetal = ${carne/1000/ 2} Kg </li>`
            ress.innerHTML += `<li id='frango'>Frango = ${carne/1000/2 } Kg </li>`
            BebidasRess(cerveja, bebidas)
        }
        
    }
    else if(checkVaca.checked){
        ress.innerHTML = `<li id='carne'>Carne Vermelha = ${carne/1000} Kg </li>`
        BebidasRess(cerveja, bebidas)
        if(checkVaca.checked && checkVegan.checked && !checkGalinha.checked){
            ress.innerHTML = `<li id='carne'>Carne Vermelha = ${carne/1000 /2 } Kg </li>`
            ress.innerHTML += `<li id='vegan'>Carne Vegan = ${carne/1000 /2} Kg </li>`
            BebidasRess(cerveja, bebidas)
        }
    }
    else if(checkVegan.checked){
        ress.innerHTML = `<li id='vegan'>Carne Vegetal = ${carne/1000} Kg </li>`
        BebidasRess(cerveja, bebidas)
    }
   
    
    else{
        ress.innerHTML = `<li id='carne'>Carne Vermelha = ${carne/1000 /2 } Kg </li>`
        ress.innerHTML += `<li id='vegan'>Carne Vegan = ${carne/1000 /2} Kg </li>`
        ress.innerHTML += `<li id='frango'>Frango = ${carne/1000} Kg </li>`
        BebidasRess(cerveja, bebidas)
    }
         
}
function BebidasRess(cerveja, bebidas){
    ress.innerHTML += `<li id='cerveja'>${cerveja/1000} L de cerveja </li>`
    ress.innerHTML += `<li id='refri'>${bebidas/1000} L de Bebidas </li>`
}

// Para quantirade de Carne por hora
function carnePP(duracao){
    if(duracao < 6)
        return 400
    else
        return 650
}

function cervejaPP(duracao){
    if (duracao<6){
        return 1200
    }else{
        return 2000
    }
}

function refriPP(duracao){
    if (duracao<6){
        return 1000
    }else{
        return 1500
    }
}