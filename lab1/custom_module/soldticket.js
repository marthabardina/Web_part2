const Passenger = require("./passenger.js");
const Ticket = require("./ticket.js");

//const SoldTicket = require("./SoldTicket.js");

class SoldTicket{

  constructor (options) {
    this.Passanger = options.Passanger; // ticket owner name
    this.Ticket = options.Ticket;
  }



}

 
function get_soldTcket_List() {

  console.log("\n" + "Список проданих квитків");

  for (let id = 0; id < SoldTicket_list.length; id++) {

      let tr = SoldTicket_list[id];
      console.log(`Пасажир: ${tr.Passenger}, Квиток: ${tr.Ticket}`);

  }

  console.log();
  
  return SoldTicket_list;

}
module.exports = SoldTicket;
exports.get_soldTcket_List = get_soldTcket_List;
