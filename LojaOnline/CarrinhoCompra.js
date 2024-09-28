function adicionarAoCarrinho(id, nome, valorUnitario, imagem) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = {
        id: id,
        nome: nome,
        valorUnitario: valorUnitario,
        imagem: imagem
    };
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

function finalizarCompra() {
    const numeroCartao = prompt("Digite o número do cartão de crédito:");
    const senha = prompt("Digite a senha:");
    if (numeroCartao && senha) {
        alert("Compra efetuada com sucesso");
        localStorage.removeItem('carrinho');
        mostrarCarrinho();
    }
}

function mostrarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let tabela = document.getElementById('carrinho');
    tabela.innerHTML = '';

    let totalCompra = 0;
    carrinho.forEach((item, index) => {
        const valorTotal = item.valorUnitario;
        totalCompra += valorTotal;

        let linha = tabela.insertRow();
        linha.insertCell(0).innerHTML = index + 1;
        linha.insertCell(1).innerHTML = item.id;
        linha.insertCell(2).innerHTML = item.nome;
        linha.insertCell(3).innerHTML = item.valorUnitario.toFixed(2);
        linha.insertCell(4).innerHTML = valorTotal.toFixed(2);
        let btnRemover = document.createElement('button');
        btnRemover.innerHTML = 'Remover';
        btnRemover.onclick = () => removerItem(index);
        linha.insertCell(5).appendChild(btnRemover);
    });

    document.getElementById('totalCompra').innerHTML = totalCompra.toFixed(2);
}

window.onload = function() {
    mostrarCarrinho();
}
