// <reference types="cypress"/>

const ambiente = Cypress.config("baseUrl")

import PreencherAddressElements from '../elements/PreencherOrigemDestinoElements'

const preencherAddress = new PreencherAddressElements

//comand+shift+F = Pesquisar em varias abas

class PreencherText {
 
//Abrir Browser

    AbrirBrowser (){
        cy.visit(ambiente)
    }

//Preencher Address

    PrencherOrigemDestino () {
        cy.get(preencherAddress.Origem()).type('São Paulo (GRU)')
        cy.get(preencherAddress.Destino()).type('Rio de Janeiro')
        cy.get(preencherAddress.RioOpcao()).should('be.visible').click()
    }

    PrencherData () {
        
        cy.get(preencherAddress.DataIda()).click({force:true})
        cy.get(preencherAddress.DiaIda()).should('be.visible').click()

        cy.get(preencherAddress.DataVolta()).click({force: true})
        cy.get(preencherAddress.DiaVolta()).click()

        cy.get(preencherAddress.BuscarVoo()).click({timout: 200000})
    }

    ScrollarTela () {

        cy.scrollTo(0, 600)
        cy.get(preencherAddress.Milhas).should('be.visible').click();
        
    }

    visualizarTest (){
        cy.screenshot
        cy.wait(1000)
    }
    
}
export default PreencherText;