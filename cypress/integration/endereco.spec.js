/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('Minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })


    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarenderecofaturamento('Flávio', 'Araújo', 'Google', 'Brasil', 'Av. Brasil', '3100', 'São Paulo', 'São Paulo', '15370496', '11989898998', 'flavio@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarenderecofaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email            
        )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

});
