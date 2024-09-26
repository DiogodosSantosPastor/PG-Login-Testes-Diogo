describe('Página de Cadastro', () => {

  it('Cadastro com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html'); 

    cy.get('#nome').type('Maria');
    cy.get('#email').type('maria@example.com');
    cy.get('#senha').type('senha123');
    cy.get('#confirmSenha').type('senha123');
    
    cy.get('button').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Cadastro realizado com sucesso!');
    });
  });

  it('Erro ao tentar cadastrar com campos vazios', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html'); 

    
    cy.get('button').click();

    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('Por favor, preencha todos os campos.')
    });
    
  });

  it('Erro ao tentar cadastrar com senhas diferentes', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html'); 

    cy.get('#nome').type('João');
    cy.get('#email').type('joao@example.com');
    cy.get('#senha').type('senha123');
    cy.get('#confirmSenha').type('senha321');
    
    cy.get('button').click();

    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('As Senhas não correspondem.')
    });
  });

});

describe('pagina de login', () => {

  it('Login com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    //preencher os campos de usuario e senha
    cy.get('#usuario').type('admin');
    cy.get('#senha').type('admin');
    cy.get('#entrar').click();


    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('Login efetuado!')
    });

  });

  it('Login com erro', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('#usuario').type('1234');
    cy.get('#senha').type('errado');
    cy.get('#entrar').click()

    cy.get('#erro').should('be.visible')

  });

});
