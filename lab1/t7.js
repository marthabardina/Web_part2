  
const mod = require("./module");

// Додавання потяга
let tr1 = mod.add_Train("Train_1", "Test direction 1");
let tr2= mod.add_Train("Train_2", "Test direction  2");
let tr3 = mod.add_Train("Train_3", "Test direction  3");

// Список потягів
mod.get_Train_List();

// Видалення потяга
console.log("Видалення потяга: Train_2");
mod.remove_Train(tr2);

// Список потягів
mod.get_Train_List();

// Зміна потяга
console.log("Зміна потяга: Train_3");
mod.edit_Train("Train_3", "Test direction 3", "New train name", "New direction");

// Список потягів
mod.get_Train_List();

// Пошук потягів
let tra1 = mod.find_Train("Train_1", "Test direction 1");
console.log(`Пошук потяга Train_1: ${tra1 !== -1 ? "знайдено" : "не знайдено"}`);
let tra2 = mod.find_Train("Train_7", "Test direction 7");
console.log(`Пошук потяга Train_7: ${tra2 !== -1 ? "знайдено" : "не знайдено"}`);
////////////////////////////////////////////////////////////////////////////////////

// Додавання пасажира
mod.add_Passenger("Петро Іванович", 380980003587, tra1);
mod.add_Passenger("Андрій Богданович", 380967545343, tra1);
mod.add_Passenger("Оксана Петрівна", 380976554219, tra1);

// Список пассажирів у поїзді Train_1
mod.get_Passenger_List(tra1);

// Видалення пасажирів
console.log("Видалення пасажирів: Оксана Петрівна");
mod.remove_Passenger("Оксана Петрівна", 380976554219, tra1);

// Список пасажирів Train_1
mod.get_Passenger_List(tra1);



// Пошук пасажирів
let pas1 = mod.find_Passenger("Оксана Петрівна", 380976554219, tra1);
console.log(`Пошук пасажира - Оксана Петрівна: ${tra1 !== -1 ? "знайдено" : "не знайдено"}`);
let pas2 = mod.find_Passenger("Андрій Іванович", 380976558924, tra1);
console.log(`Пошук пасажира - Андрій Іванович: ${tra2 !== -1 ? "знайдено" : "не знайдено"}`);



