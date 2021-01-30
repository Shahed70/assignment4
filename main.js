//This function is used to count the number of ticket  and to call the ticketSubtotal function

function updateTicketNumber(isIncrease, nuberOfTicket){
    const ticketInputNumber = document.getElementById(nuberOfTicket);
    const parsedTicketStr = parseInt(ticketInputNumber.value);
    let newTicketNumber = parsedTicketStr;
     if(isIncrease === true){
         newTicketNumber = parsedTicketStr + 1
     }else if(isIncrease === false && newTicketNumber > 0){
         newTicketNumber = parsedTicketStr - 1;
     }
    ticketInputNumber.value = newTicketNumber;
    ticketsPriceCalculaion('sub-total', 'tax-amount', 'grand-total');
}



// this function is used to calculate the number of ticket
// and to calculate the total without tax,
//tax, and grand total with tax and other charges

function ticketsPriceCalculaion(firstTotal, taxAmount, Total, tickets, mainBody, accountBox){
        const firstClassTicket = document.getElementById('firstClassTicketValue');
        const parseFirstClassTicketsStr = parseInt(firstClassTicket.value);

        const ecoNomyTicket  = document.getElementById('economyTicketValue');
        const parseEconomyTicketStr = parseInt(ecoNomyTicket.value);

        const subTotal = parseFirstClassTicketsStr * 150 + parseEconomyTicketStr * 100; //total without tax

        document.getElementById(firstTotal).innerText = '$ '+subTotal;
        const tax = Math.floor(subTotal*0.1); //total tax
        document.getElementById(taxAmount).innerText = '$ '+tax;
        const grandTotal = subTotal + tax; //Grand total with tax and other charges
        document.getElementById(Total).innerText ='$ '+grandTotal
        const numberOfTicket = parseFirstClassTicketsStr + parseEconomyTicketStr;
        document.getElementById(tickets).innerText = numberOfTicket
        document.getElementById(mainBody).style.display = 'none'; //Css style
        document.getElementById(accountBox).style.display = 'block';//css style
 }

