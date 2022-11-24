var txt = document.getElementById('number') 
var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var list = []

function isNumber(n){
    if(Number(n) > 0 && Number(n) < 100){
        return true
    }else {
        return false
    }
}

function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function registrar(){
    if(isNumber(txt.value) && !inlist(txt.value, list)){
        list.push(Number(txt.value))
        let item = document.createElement('option') 
        item.text = `${txt.value}` 
        tab.appendChild(item)
        
        for(var c = 0;  c < list.length; c++){
            
        }
        
    }else{ 
        window.alert('[ERRO] Numero ja na lista ou inválido')
        
    }
    txt.value = ''
    txt.focus() /*Comando faz com que o box fique em*/
    
}

function verificar(){

    if(list.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot =  list.length 
        let first = list[0]
        let last = list[list.length -1]
        let maior = list[0]
        let menor = list[0]
        let soma = 0
        for(var pos in list){
            soma += list[pos]
            if(list[pos] > maior){
                maior = list[pos]
            } 
            if(list[pos] < menor){
                menor = list[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>${tot} numeros foram adcionados na lista</p>`
        res.innerHTML += `<p>${first} foi o primeiro adiocionado a lista</p>`
        res.innerHTML += `<p>${last} foi o ultimo adiocionado a lista</p>`
        res.innerHTML += `<p>${menor} foi o menor numero adiocionado a lista</p>`
        res.innerHTML += `<p>${maior} foi o maior numero adiocionado a lista</p>`
        res.innerHTML += `<p>${last} foi a soma dos numeros adiocionados a lista</p>`

    }


    for(let c = 0; c < list.length; c++){
        console.log(list[c])
    }

}