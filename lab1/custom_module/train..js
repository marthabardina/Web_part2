//клас Поїзд
class Train {

    constructor (name, direction) {
    
        this.name = name;
        this.direction = direction;
        this.passenger_list = [];
        this.tickets_list =[];
        this.soldTicket_list =[];
     
    
        if (typeof name === 'undefined')    { this.name = "Невідомий потяг"; }
        if (typeof direction === 'undefined') { this.direction = "Невідомий напрямок "; }
    
    }
    
}

// Список усіх потягів
let global_train_list = new Array();

// Знайти потяг в колекції
function find_Train (name, direction) {

    for (let train of global_train_list) {

        if (name === train.name &&
            direction === train.direction) { return train; }

    }

    return -1;

}

// Додавання нового потяга
function add_Train (name, direction) {

    let train = new Train(name, direction);
    global_train_list.push(train);

    return train;

}

// Видалити лікарню з колекції
function remove_Train (name, direction) {

        let i=global_train_list.indexOf(name,direction)
    if(i>-1){
        global_train_list.splice(i,1)
    }else{
        return global_train_list
        }

}

// Редагувати потяг в колекції
function edit_Train ( n ) {

    if(n<=global_train_list.length){
        return function(name,direction){
        global_train_list[n].name=name
        global_train_list[n].direction=direction
        }
    }

}

// Отримати список потягів
function get_Train_List() {

    console.log("\n" + "Список усіх потягів");

    for (let id = 0; id < global_train_list.length; id++) {

        let tr = global_train_list[id];
        console.log(`Назва потяга: ${tr.name}, Напрямок: ${tr.direction}`);

    }

    console.log();
    
    return global_train_list;

}

// Експортуємо функції
exports.find_Train     = find_Train;
exports.add_Train      = add_Train;
exports.remove_Train   = remove_Train;
exports.edit_Train = edit_Train;
exports.get_Train_List = get_Train_List;