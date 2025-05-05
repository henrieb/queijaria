var harmo = new Array(3);
harmo[0] = ['Canastra', '<img alt="canastra" src="src/img/QueijoCanastra.jpg">', 'Harmoniza perfeitamente com tintos de corpo médio e tanínos macios.'];
harmo[1] = ['Minas', '<img alt="minas" src="src/img/QueijoMinas.jpg"', 'Combina bem com os vinhos brancos leves e frutados.'];
harmo[2] = ['Gorgonzola', '<img alt="gorgonzola" src="src/img/QueijoGorgonzola.jpg">', 'Pede vinhos instensamente aromáticos e com tendência adocicada, como os do Porto, os Madeira ou Moscatéis.'];
function winQueijo(i) {
    var win = open('', harmo[i][0], 'location=center,status=no, width=400, height=300');
    with (win.document) {
        write('<!DOCTYPE html>');
        write('<html><head><title>Queijo ', harmo[i][0], '</title>');
        write('<link rel="stylesheet" href="src/css/style2.css"></head><body>');
        write('<section class="janQueijos">');
        write('<h1 style="width: 100%;">', harmo[i][0], '</h1>');
        write(harmo[i][1], '<br>');
        write('<p class=janDesc>', harmo[i][2], '</p>');
        write('<input type="button" value="Fechar" onClick="window.close();"/>');
        write('</section></body></html>');
        close();
    }
}
var tabdesc = new Array(5);
tabdesc[0] = ['Canastra', 'src/img/QueijoCanastra.jpg', '500g', '70.00'];
tabdesc[1] = ['Minas', 'src/img/QueijoMinas.jpg', '400g', '23.00'];
tabdesc[2] = ['Coalho', 'src/img/QueijoCoalho.jpg', '500g', '40.00'];
tabdesc[3] = ['Gorgonzola', 'src/img/QueijoGorgonzola.jpg', '500g', '40.00'];
tabdesc[4] = ['Brie', 'src/img/QueijoBrie.jpg', '200g', '30.00'];
function showcheese(i) {
    var desc = document.getElementById("descric");
    var info = tabdesc[i];
    desc.innerHTML = `<strong>${info[0]}</strong><br><img src="${info[1]}" alt="${info[0]}" width="100"><br>Peso: ${info[2]}<br>Preço: ${info[3]}`;
}
function calculaDV(num) {
    var resto = 0, soma = 0;
    for (var i = 2; i < 11; i++) {
        soma = soma + ((num % 10) * i);
        num = parseInt(num / 10);
    }
    resto = (soma % 11);
    return (resto > 1) ? (11 - resto) : 0;
}

function validarCPF(cpf) {
    if (cpf.length !== 11) {
        alert("CPF deve conter exatamente 11 dígitos.");
        return false;
    }
    if (!/^\d+$/.test(cpf)) {
        alert("CPF deve conter apenas números.");
        return false;
    }
    var identCPF = parseInt(cpf.substring(0, 9));
    var dig1 = calculaDV(identCPF);
    var dig2 = calculaDV(identCPF * 10 + dig1);

    if (dig1 !== parseInt(cpf.charAt(9)) || dig2 !== parseInt(cpf.charAt(10))) {
        alert("Dígitos verificadores inválidos.");
        return false;
    }

    alert("CPF válido.");
    return true;
}

function modCPF() {
    var valorCPF = document.getElementById("cpf").value;
    validarCPF(valorCPF);
}
var queijos = {
    canastra: ['Queijo Canastra', '500g', 70.00],
    minas: ['Queijo Minas', '400g', 23.00],
    coalho: ['Queijo Coalho', '500g', 40.00],
    gorgonzola: ['Queijo Gorgonzola', '200g', 40.00],
    brie: ['Queijo Brie', '200g', 30.00]
};
function incluirProduto() {
    var combo = document.querySelector(".select");
    var valorSelecionado = combo.value;

    if (!valorSelecionado || !queijos[valorSelecionado]) {
      alert("Por favor, selecione um produto válido antes de incluir.");
      return;
    }

    var [nome, peso, preco] = queijos[valorSelecionado];
    var descricao = `${nome} - ${peso} - R$ ${preco.toFixed(2)}`;

    var textarea = document.getElementById("listaCompras");
    textarea.value += descricao + "\n";

    var campoValor = document.getElementById("valortotal");
    var totalAtual = parseFloat(campoValor.value) || 0;
    campoValor.value = (totalAtual + preco).toFixed(2);

    combo.selectedIndex = 0;
  }