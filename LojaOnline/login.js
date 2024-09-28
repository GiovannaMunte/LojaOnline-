document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const clientes = JSON.parse(localStorage.getItem('Clientes')) || [];

    const clienteExistente = clientes.find(cliente => cliente.email === email && cliente.senha === senha);
    
 
       
    
    if (!clienteExistente) {
        alert('Atenção; você não é nosso cliente, faça seu cadastro');
        window.location.href = 'PaginaParcial.html';
    } else {
        alert(`Bem-vindo de volta!`);
        window.location.href = 'PaginaCompleta.html';
           
            
        };
        localStorage.setItem('Login', JSON.stringify(loginData));
        alert('Login realizado com sucesso!');
       
    });