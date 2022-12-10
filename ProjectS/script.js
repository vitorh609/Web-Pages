var funcionario = document.getElementById('funcionario')
var funcionarioPrint = document.getElementById('funcionario-print')
var idFuncionario = document.getElementById('tipofuncionario')
var idFuncionarioPrint = document.getElementById('id-funcionario-print')
var veiculo = document.getElementById('veiculo')
var veiculoPrint = document.getElementById('veiculo-print')
var autorizador = document.getElementById('autorizador')
var autorizadorPrint = document.getElementById('autorizador-print')
var kmlPrint = document.getElementById('kml-print')
var kmlTotalPrint = document.getElementById('km-total-print')
var tabPrint = document.getElementById('table-data-print')
var dateI = document.getElementById("data"); 
let data = new Date().toLocaleDateString(); 
dateI.value = data 

function salvarCabecalho(){
    funcionarioPrint.innerText = `Funcionário: ${funcionario.value}`
    idFuncionarioPrint.innerHTML = `Id do funcionário: ${idFuncionario.value}`
    veiculoPrint.innerText = `Veiculo: ${veiculo.value}`
    autorizadorPrint.innerText = `Autorizador por: ${autorizador.value}`
    kmlPrint.innerText = `Km/l: ${kmL.value}`
    
}

function novoPercursoPrint(){
    var tr = document.createElement('tr')
    var dataprint  = document.createElement('th')
    dataprint.innerHTML = `${dateI.value}`
    tr.appendChild(dataprint)

    var kmInicioPrint = document.createElement('th')
    kmInicioPrint.innerText = `${kmI.value} Km`
    tr.appendChild(kmInicioPrint)

    var kmFinalPrint = document.createElement('th')
    kmFinalPrint.innerText = `${kmFinal.value} Km`
    tr.appendChild(kmFinalPrint)

    var kmTotalPrint = document.createElement('th')
    kmTotalPrint.innerText = `${kmFinal.value - kmInicio.value} Km`
    tr.appendChild(kmTotalPrint)

    let valorGPrint = Number(gasosa.value); 
    let kmLitroPrint = Number(kmL.value);
    let somaPrint = kmFinal.value - kmInicio.value

    var kmValorprint = document.createElement('th')
    kmValorprint.innerText = `R$${(valorGPrint / kmLitroPrint) * somaPrint }`
    tr.appendChild(kmValorprint)

    tabPrint.appendChild(tr)

}

var kmL = document.getElementById("kml")
var gasosa = document.getElementById("combustivel")
var kmI = document.getElementById("kmInicio"); 
var kmF = document.getElementById("kmFinal"); 


var tab = document.getElementById("table-data")



function novoPercurso(){
    
    let kmInicio = Number(kmI.value); 
    let kmFinal = Number(kmF.value);
    let valorG = Number(gasosa.value); 
    let kmLitro = Number(kmL.value);

    if(kmInicio == 0 || kmFinal == 0){
        window.alert('Confira os valores')
    }else if(kmInicio > kmFinal){
        window.alert('Confira os valores')
    }else {
        
        var tr = document.createElement('tr')
        var tddate = document.createElement('th')
        tddate.innerHTML = `${dateI.value}`
        tr.appendChild(tddate)

        var tdKmI = document.createElement('th')
        tdKmI.innerText = `${kmInicio} Km`
        tr.appendChild(tdKmI) 

        var tdKmF = document.createElement('th')
        tdKmF.innerText = `${kmFinal}Km`
        tr.appendChild(tdKmF)

        var somaKm = document.createElement('th')
        somaKm.innerText = `${ kmFinal - kmInicio}Km `
        tr.appendChild(somaKm)

        let soma = kmFinal - kmInicio

        var tdvalor = document.createElement('th')
        tdvalor.innerText = `R$${(valorG / kmLitro)* soma }`
        
        tr.appendChild(tdvalor)
 
        tab.appendChild(tr)

    }

    novoPercursoPrint()

    // kmI.value = `${kmF.value} `
    // kmF.value = ''
    salvarCabecalho() 
}

function gerarPlanilha(){
   
    window.print(); 
}

function zerarTabela(){
    let zerarT = document.location.reload(true) 
}