// Клас - пасажир
const train = require('./train.')
class Passenger {
  constructor (name, number) {
    this.name = name
    this.number = number

    if (typeof name === 'undefined') { this.name = 'Невідомий пасажир' }
    if (typeof number === 'undefined') { this.number = 'Невідомий пасажир' }
  }
}

// Знайти пасажира у потязі
function find_Passenger (name, number, train) {
  for (let id = 0; id < train.passenger_list.length; id++) {
    const passenger = train.passenger_list[id]

    if (name === passenger.name &&
            number === passenger.number) { return number }
  }

  return -1
}

// Додавання нового пасажира
function add_Passenger (name, number, train) {
  const passenger = new Passenger(name, number)
  train.passenger_list.push(passenger)

  return passenger
}

// Видалення пасажира
function remove_Passenger (name, number, train) {
  const passenger = find_Passenger(name, number, train)

  if (passenger === -1) { return -1 }

  const id = train.passenger_list.indexOf(passenger)
  train.passenger_list.splice(id, 1)

  return 1
}

// Редагувати пасажира у потязі
function edit_Passenger (name, number, train, new_name, new_number) {
  const passenger = find_Passenger(name, number, train)

  if (passenger === -1) { return -1 }

  const id = train.passenger_list.indexOf(passenger)
  train.passenger_list[id].name = new_name
  train.passenger_list[id].number = new_number

  return 1
}

// Отримати список пасажирів у конкретному поїзді
function get_Passenger_List (train) {
  console.log('\n' + `Список усіх пасажирів ${train.name}:`)

  for (let id = 0; id < train.passenger_list.length; id++) {
    const passenger = train.passenger_list[id]
    console.log(`\tІм'я пасажира: ${passenger.name}, номер : ${passenger.number}`)
  }

  console.log()

  return train.passenger_list
}

// Експортуємо функції
exports.find_Passenger = find_Passenger
exports.add_Passenger = add_Passenger
exports.remove_Passenger = remove_Passenger
exports.edit_Passenger = edit_Passenger
exports.get_Passenger_List = get_Passenger_List
