//create variables for dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

//create the connection object for the database 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Dogman2010!",
  database: "bamazon"
});

//make the connection (reference activity 7 on class 12.2)
connection.connect(function(err) {
  if (err) throw err;
  loadBamazonTable();
});

function loadBamazonTable() {
    console.log("Hello, Bamazon customer! Please browse our items");

    connection.query("SELECT item_id, product_name, price FROM products", function (error, results, fields) {
        if (error) {
            console.log(error);
            return;
        }

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].item_id, results[i].product_name, "$" + results[i].price);
        };
    });  
};

// prompt functions
function promptUser() {
    inquirer.prompt([{
        type: "input",
        name: "ID",
        message: "Please select the ID number of the item you would like to purchase \n",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }, {

        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }])
        .then(answers => {
            let chosenProductID = answers.ID;

 connection.query("SELECT stock_quantity FROM products WHERE item_id = " + chosenProductID, function (error, results, fields) {
    if (error) {
        console.log(error);
        return;
    }

    else {
       if (results[0].stock_quantity >= answers.quantity) {
            let remainingQuantity = results[0].stock_quantity - answers.quantity;
                        
            connection.query("UPDATE bamazon.products SET ? WHERE ?", [{stock_quantity: remainingQuantity}, {item_id: chosenProductID}], function (error, results, fields) {
                if (error) {
                console.log(error);
                return;
                }
                else {
                    connection.query("SELECT price FROM products WHERE item_id = " + answers.ID, function (error, results, fields) {                               
                      if (error) {
                      console.log(error);
                      return;
                        }

                else {
                    console.log("Total Cost: $" + (results[0].price * answers.quantity))
                    connection.end();
                    }
                })
                 }
                   })
                    }
                else {
                console.log("Not enough in stock. Please make another selection");
                connection.end();
                }}
            });
        });
};
promptUser();