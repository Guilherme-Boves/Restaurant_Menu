document.getElementById("confirmar_pedido").onclick = function(){
document.getElementById("nome").value = "";
document.getElementById("telefone").value = "";
document.getElementById("endereco").value = "";
document.getElementsByName("acompanhamento").checked = false;
}

document.getElementById("btnfinalizar").onclick = function(){

    let totalAcp = 0;
    let totalPrato = 0;
    let totalPedido
    let acompanhamentos;
    let pratoprincipal;
    let acps = document.getElementsByName("acompanhamento");
    let prato_principal = document.getElementsByName("prato_principal");
    var nome = document.getElementById("nome").value
    var telefone = document.getElementById("telefone").value
    var endereco = document.getElementById("endereco").value

    for (let i = 0; i < acps.length; i++) {
        if (acps[i].checked == true) {
            acompanhamentos = acps[i].checked.toString()
            totalAcp += parseFloat(acps[i].value)
        }

    }
    for (let i = 0; i < prato_principal.length; i++) {
        if (prato_principal[i].checked == true) {
            pratoprincipal = prato_principal[i].checked
            totalPrato += parseFloat(prato_principal[i].value)
        }
    }

    totalPedido = totalAcp + totalPrato
    document.getElementById("total").innerHTML = `Nome: ${nome} <br> Telefone: ${telefone} <br> Endereço: ${endereco} <br> Prato Principal: R$${totalPrato} <br> Total Acompanhamentos: R$${totalAcp} <br> Total: R$${totalPedido}`
}