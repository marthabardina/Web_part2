

  class Ticket {
  
    constructor (options) {
      
      this.place = options.place;
      this.vagon = options.vagon;
      this.is_sold = options.is_sold;
      if (typeof place === 'undefined') { this.place = "Невідомий пасажир"; }
      if (typeof vagon=== 'undefined') { this.vagon = "Невідомий пасажир"; }
    }
  }
  tickets_list = [new Ticket({Train: tra[1], place: 6, vagon: 3, is_sold:false}),
  new Ticket({Train: tra[1], place: 1, vagon: 3, is_sold:false}),
  new Ticket({Train: tra[1], place: 2, vagon: 3, is_sold:false})
 
]
  
function byeTicket(passanger, train, tickets, soldTicket_list) {
  for(i = 0; i < tickets.length; i++){
    if(tickets[i].Train === train && tickets[i].is_sold === false){
        tickets[i].is_sold = true;
        soldTicket_list.push(new SoldTicket({Passanger: passanger, Ticket: tickets[i]}));
        return;
    }
  }
     console.log("All tickets for this train were sold"); 


}
   
exports.byeTicket = byeTicket;

 

