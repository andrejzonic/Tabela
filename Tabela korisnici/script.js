
var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);



function displayDetails() {
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var phone = document.getElementById("phone").value;

        if(!name || !address || !phone) {
            alert("Please fill al the boxes");
            return;
        }

        var display = document.getElementById("display");

        var newRow = display.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = address;
        cell3.innerHTML = phone;

        row++;

        const users = [
            {
              name: "John Doe",
              address: "Street 1",
              phone: "0550505050"
            },
            {
              name: "Sara Doe",
              address: "Street 2",
              phone: "049595959"
            },
            {
              name: "Peter Doe",
              address: "Street 3",
              phone: "3454654646"
            }
          
            
          ];

          document.getElementById("display").innerHTML = users;
          
          console.log(users);
          
          for (let i = 0; i < users.length; i++) {
              let name = document.getElementById("name");
              let address = document.getElementById("address");
              let phone = document.getElementById("phone");
          }

 }


