function updateTicketNumber(isIncrease, nuberOfTicket){
    const ticketInputNumber = document.getElementById(nuberOfTicket);
    const parsedTicketNumer = parseInt(ticketInputNumber.value);
    let newTicketNumber = parsedTicketNumer;
     if(isIncrease === true){
         newTicketNumber = parsedTicketNumer + 1
     }else if(isIncrease === false && newTicketNumber > 0){
         newTicketNumber = parsedTicketNumer - 1;
     }
    ticketInputNumber.value = newTicketNumber;
    ticketSubtotal('sub-total', 'tax-amount', 'grand-total');
}




function ticketSubtotal(firstTotal, taxAmount, Total, tickets, mainBody, accountBox){
        const firstClassTicket = document.getElementById('firstClassTicketValue');
        const parseFirstClassTicketsStr = parseInt(firstClassTicket.value);

        const ecoNomyTicket  = document.getElementById('economyTicketValue');
        const parseEconomyTicketStr = parseInt(ecoNomyTicket.value);

        const subTotal = parseFirstClassTicketsStr * 150 + parseEconomyTicketStr * 100;

        document.getElementById(firstTotal).innerText = '$ '+subTotal;
        const tax = Math.floor(subTotal*0.1);
        document.getElementById(taxAmount).innerText = '$ '+tax;
        const grandTotal = subTotal + tax;
        document.getElementById(Total).innerText ='$ '+grandTotal
        const numberOfTicket = parseFirstClassTicketsStr + parseEconomyTicketStr;
        document.getElementById(tickets).innerText = numberOfTicket
        document.getElementById(mainBody).style.display = 'none';
        document.getElementById(accountBox).style.display = 'block';
 }
