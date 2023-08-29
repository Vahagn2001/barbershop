let orders = [];

function getCurrentDate() {
    return new Date().getTime();
}

function formatDate(num) {
    return `${new Date(num).toDateString()} ${new Date(num).toTimeString()}`;
}

function createOrder() {
    const bookingPerson = prompt("Wtite your name: ");

    orders.push({
        booker: bookingPerson,
        date: getCurrentDate(),
    })

    console.log(orders);
};

function removeOrder() {
    const deleteOrder = prompt("Write your name: ");

    const nameIndex = orders.findIndex(function (item) {
        return item.booker === deleteOrder
    });

    if (nameIndex === -1) return alert(`They are no booking width name ${deleteOrder}: `);

    const left = orders.slice(0, nameIndex);
    const right = orders.slice(nameIndex + 1);

    orders = [].concat(left, right);

    console.log(orders);
}

function quickSort(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;

        for (let j = i; j < arr.length; j++) {
            if (cb(arr[j], arr[smallest])) smallest = j;
        }

        let prev = arr[i];

        arr[i] = arr[smallest];
        arr[smallest] = prev;
    }

    return arr;
}

function print() {
    quickSort(orders, function (a, b) {
        return a.booker < b.booker;
    });

    orders.forEach(function (item) {
        console.log(item.booker, formatDate(item.date));
    });
}

function app() {
    while (true) {
        const action = prompt("Write create order, remove order, print or end: ").trim();

        switch (action.toLowerCase()) {
            case "create order":
                createOrder();
                break;
            case "remove order":
                removeOrder();
                break;
            case "print":
                print();
                break;
            case "end":
                return;
        };
    };
};

app();