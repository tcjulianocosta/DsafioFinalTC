// <reference types="cypress"/>

const ambiente = Cypress.config("baseUrl")

import PreencherAddressElements from '../elements/PreencherOrigemDestinoElements'

const preencherAddress = new PreencherAddressElements

//comand+shift+F = Pesquisar em varias abas
class PreencherText {

    AbrirBrowser() {
        cy.visit(ambiente)
    }

    PrencherOrigemDestino() {
        cy.get(preencherAddress.Origem()).type('São Paulo (GRU)')
        cy.get(preencherAddress.Destino()).type('Rio de')
        cy.get(preencherAddress.RioOpcao()).should('be.visible').click()
    }

    PrencherData() {
        cy.get(preencherAddress.DataIda()).click({ force: true })
        cy.get(preencherAddress.DiaIda()).should('be.visible').click()

        cy.get(preencherAddress.DataVolta()).click({ force: true })
        cy.get(preencherAddress.DiaVolta()).click()
        cy.get(preencherAddress.BuscarVoo()).click({ timout: 300000 })
    }

    ScrollarTela() {
        cy.scrollTo(0, 600)
        cy.get(preencherAddress.Milhas).should('be.visible').click();
    }

    SelecionarTarifa() {
        cy.get('button').should('have.text', 'Selecionar tarifa').click();
        cy.get(preencherAddress.Checkbox).should('be.visible').click({ timout: 20000 });
    }

    ReumoPedido() {
        cy.get(preencherAddress.ResumoPedido).should('be.visible')
            .and('contain', 'Resumo do pedido')

        cy.get(preencherAddress.ValorMilhas).then(($text) => {
            const txt = $text.text()
            cy.log(txt)

            cy.get(preencherAddress.ValorBilhete).then(($text) => {
                const txt2 = $text.text()
                cy.log(txt2)

                expect(txt).to.eq(txt2)

                cy.get(preencherAddress.TaxaEmbarque).then(($text) => {
                    const txt3 = $text.text()
                    cy.log(txt3)

                    expect(txt3).to.eq(txt + txt2)

                })
            })
        })
    }

    visualizarTest() {
        cy.screenshot
        cy.wait(1000)
    }

}
export default PreencherText;