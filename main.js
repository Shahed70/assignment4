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
    ticketSubtotal();
}




function ticketSubtotal(){
        const ticketInputNumber = document.getElementById('firstClassTicketValue');
        const parsedTicketNumer = parseInt(ticketInputNumber.value);

        const ecoNomyTicketNumber  = document.getElementById('economyTicketValue');
        const economyParseToInteger = parseInt(ecoNomyTicketNumber.value);


        const subTotal = parsedTicketNumer * 150 + economyParseToInteger * 100;

        const newSubTotal = document.getElementById('sub-total').innerText = subTotal;
        const tax = Math.floor(parseInt(newSubTotal)*0.1);
        document.getElementById('tax-amount').innerText = tax;
        const grandTotal = subTotal + tax;
        document.getElementById('grand-total').innerText = grandTotal
 }


 

 function bookNow(){
     alert('hi')
 }