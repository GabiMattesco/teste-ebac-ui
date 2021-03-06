/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.sub-title > .woocommerce-Price-amount > bdi').should('contain' , 'R$117,00')
                

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addprodutos('Aero Daily Fitness Tee', 'S', 'Black', 2)
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addprodutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 5)
    });

});