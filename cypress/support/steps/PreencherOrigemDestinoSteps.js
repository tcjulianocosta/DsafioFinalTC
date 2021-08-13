/* global Given, When, Then */

import PreencherAddress from '../pageobjects/PreencherOrigemDestinoPage'
const address = new PreencherAddress

Given(/^que eu tenha acessado o site$/, () => {
    address.AbrirBrowser();
});

And(/^preencher os campos ida e volta$/, () => {
	address.PrencherOrigemDestino();
});

And(/^preencho a data$/, () => {
	address.PrencherData();
});

And(/^seleciono o voo$/, () => {
});

And(/^scrollo a tela$/, () => {
	address.ScrollarTela
});

Then(/^valido o resumo do pedido$/, () => {
	
});
