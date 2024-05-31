class Pedido {
  constructor(id, clienteId, status, data) {
    this.id = id;
    this.clienteId = clienteId;
    this.status = status;
    this.data = data;
  }
}

module.exports = Pedido;
class Funcionario {
  constructor(id, nomeUsuario, cpf, email, senha) {
    this.id = id;
    this.nomeUsuario = nomeUsuario;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
  }

  static fazerLogin(email, senha) {
    // Lógica de login
  }

  static fazerCadastro(nomeUsuario, cpf, email, senha) {
    // Lógica de cadastro
  }

  verMeusDados() {
    // Lógica para ver dados do funcionário
  }

  modificarMeusDados(novosDados) {
    // Lógica para modificar dados do funcionário
  }
}

module.exports = Funcionario;
class Cliente {
  constructor(id, nome, dataNascimento, cpf, email, senha) {
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
  }

  static fazerLogin(email, senha) {
    // Lógica de login
  }

  static fazerCadastro(nome, dataNascimento, cpf, email, senha) {
    // Lógica de cadastro
  }

  verMeusDados() {
    // Lógica para ver dados do cliente
  }

  modificarMeusDados(novosDados) {
    // Lógica para modificar dados do cliente
  }
}

module.exports = Cliente;
class Produto {
  constructor(id, nome, descricao, validade, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.validade = validade;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  static adicionarProduto(produto) {
    // Lógica para adicionar produto
  }

  static editarProduto(id, novosDados) {
    // Lógica para editar produto
  }

  static excluirProduto(id) {
    // Lógica para excluir produto
  }
}

module.exports = Produto;
const Pedido = require('./Pedido');
const Funcionario = require('./Funcionario');
const Cliente = require('./Cliente');
const Produto = require('./Produto');

class Sistema {
  constructor() {
    this.clientes = [];
    this.funcionarios = [];
    this.pedidos = [];
    this.produtos = [];
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  adicionarFuncionario(funcionario) {
    this.funcionarios.push(funcionario);
  }

  adicionarPedido(pedido) {
    this.pedidos.push(pedido);
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  verListaPedidos() {
    return this.pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
  }

  verListaProdutos() {
    return this.produtos.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  verListaClientes() {
    return this.clientes.sort((a, b) => a.nome.localeCompare(b.nome));
  }
}

module.exports = Sistema;
const Sistema = require('./Sistema');
const Funcionario = require('./Funcionario');
const Cliente = require('./Cliente');
const Produto = require('./Produto');
const Pedido = require('./Pedido');

const sistema = new Sistema();

// Aqui você pode implementar a lógica para interagir com o usuário através da CLI
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Bem-vindo ao sistema do Mercado Bom Preço');
  console.log('1. Fazer Login');
  console.log('2. Fazer Cadastro');
  console.log('3. Sair do Programa');
  readline.question('Escolha uma opção: ', option => {
    switch (option) {
      case '1':
        // Lógica de login
        break;
      case '2':
        // Lógica de cadastro
        break;
      case '3':
        console.log('Saindo...');
        readline.close();
        break;
      default:
        console.log('Opção inválida.');
        mainMenu();
        break;
    }
  });
}

mainMenu();


      
       
          
              
  