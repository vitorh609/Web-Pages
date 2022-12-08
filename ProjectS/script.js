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

function salvarCabecalho(){
    funcionarioPrint.innerText = `Funcionário: ${funcionario.value}`
    idFuncionarioPrint.innerHTML = `Id do funcionário: ${idFuncionario.value}`
    veiculoPrint.innerText = `Veiculo: ${veiculo.value}`
    autorizadorPrint.innerText = `Autorizador por: ${autorizador.value}`
    kmlPrint.innerText = `Km/l: ${kmL.value}`
    
}


var kmL = document.getElementById("kml")
var gasosa = document.getElementById("combustivel")
var kmI = document.getElementById("kmInicio"); 
var kmF = document.getElementById("kmFinal"); 
var dateI = document.getElementById("data"); 

var tab = document.getElementById("table-data")


let data = new Date().toLocaleDateString(); 
dateI.value = data 


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