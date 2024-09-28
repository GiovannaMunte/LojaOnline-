const produtos = [
    {
        nome: "Smartphone",
        descricao: "Telefone da Motorola, com 650GB de memoria",
        preco: "R$ 500,00",
        quantidade: 5,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3O-sVWqBfOXDfjd35Tpf8lvC_mPP6Er3MA&s"
    },
    {
        nome: "Notebook",
        descricao: "Notebook Gamer da Apple",
        preco: "R$ 550,00",
        quantidade: 10,
        imagem: "https://img.terabyteshop.com.br/produto/g/notebook-gamer-superframe-force-intel-core-i5-12450h-rtx-4050-6gb-16gb-ddr4-ssd-1tb_185157.jpg"
    },
    {
        nome: "Mouse Gamer",
        descricao: "Mouse da empresa Phoenix com led",
        preco: "R$ 600,00",
        quantidade: 15,
        imagem: "https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_UF894,1000_QL80_.jpg"
    }
];


function loadProducts() {
    const productTable = document.getElementById('productTable');
    produtos.forEach(produto => {
        const row = document.createElement('tr');

        Object.values(produto).forEach(value => {
            const cell = document.createElement('td');

            if (typeof value === 'string' && value.startsWith('http')) {
                const img = document.createElement('img');
                img.src = value;
                img.alt = 'Imagem do Produto';
                img.className = 'product-image';
                cell.appendChild(img);
            } else {
                cell.textContent = value;
            }

            row.appendChild(cell);
        });

        productTable.appendChild(row);
    });
}




document.addEventListener('DOMContentLoaded', loadProducts);




