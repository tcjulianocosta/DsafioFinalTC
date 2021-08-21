class PreencherOrigemDestinoElements {

    Origem = () => {return '#inputOrigin'}
    Destino = () => {return '#inputDestination'}
    RioOpcao = () => {return '#ulDestinationAirport > :nth-child(1)'}
    DataIda = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
    DiaIda = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody > :nth-child(3) > :nth-child(2) > .ui-state-default'}
    DataVolta = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_return_date'}
    DiaVolta = () => {return ".ui-datepicker-group-last a:contains('29').ui-state-default"}
    BuscarVoo = () => {return '#submitFlightSearch'}
    Milhas = () => {return "cy.get('#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style='position:relative'] > .checkbox > .flightlb')"}
    Checkbox = () => {return ".checkbox > .flightlbest"}
    ValorMilhas = () => {return ".button > .qtyMiles"}
    ResumoPedido = () => {return ".underside "}
    ValorBilhete = () => {return "#smilesSummaryTemplate > div.underside > div > table.table.sub.miles > tbody > tr:nth-child(1) > th:nth-child(2)"}
    TaxaEmbarque = () => {return ".summary-select-boarding-tax-miles"}
    TotalPedido = () => {return "#summarytotalmilesId"}
}
export default PreencherOrigemDestinoElements;