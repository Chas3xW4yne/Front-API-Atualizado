async function criarCliente() {
  
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  telefone = document.getElementById("telefone").value

  await fetch("http://localhost:8080/api/clientes", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, telefone })
  });
  listarClientes();
}

async function listarClientes() {
  const response = await fetch("http://localhost:8080/api/clientes");
  const clientes = await response.json();
  const lista = document.getElementById('listaClientes');
  lista.innerHTML = '';
  clientes.forEach(cliente => {
    const item = document.createElement('li');
    item.textContent = `ID: ${cliente.id} | Nome: ${cliente.nome} | Email: ${cliente.email} | Telefone: ${cliente.telefone}`;
    lista.appendChild(item);
  });
}

async function atualizarCliente() {
  const id = document.getElementById('id').value;
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  await fetch(`http://localhost:8080/api/clientes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, telefone })
  });
  listarClientes();
}

async function deletarCliente() {
  const id = document.getElementById('id').value;
  await fetch(`http://localhost:8080/api/clientes/${id}`, {
    method: 'DELETE'
  });
  listarClientes();
}


window.onload = listarClientes;