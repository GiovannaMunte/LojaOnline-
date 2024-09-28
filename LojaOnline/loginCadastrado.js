document.addEventListener('DOMContentLoaded', function() {
    const clientes = [
        { 
            email: "cliente1@example.com", 
            senha: "senha1", 
            nome: "Giovanna", 
            urlAvatar: "https://cdn-icons-png.flaticon.com/512/65/65581.png",
            nomeArquivoAvatar: "65581.png"
            
        },
        { 
            email: "cliente2@example.com", 
            senha: "senha2", 
            nome: "Cliente Dois", 
            
        }
    ];
    localStorage.setItem('Clientes', JSON.stringify(clientes));
});