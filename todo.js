// api url
const api_url =
	"https://jsonplaceholder.typicode.com/todos";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
		//alert("Data loaded successfully. Proceeding to TODO!");
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		
		<th>UserID</th>
		<th>ID</th>
		<th>Task</th>
		<th>status</th>
		</tr>`;

		/*var checkBox1= document.createElement("INPUT");
		checkbox.type = "checkbox";
		var checkbox=$(document).ready(function(){
			$('input[type="checkbox"]').click(function(){
		
				if($(this).prop("checked") == true){
					$("#result").html("Checkbox is checked.");
				}
				else if($(this).prop("checked") == false){
					$("#result").html("Checkbox is unchecked.");
				}
			});
		});*/
	
	
			// Loop to access all rows
			for (let r of data) {		
				tab += `<tr>`;
				tab +=`<td>${r.userId} </td>`;
				tab +=`<td>${r.id}</td>`;
				tab +=`<td>${r.title}</td>`;	
				//tab +=`<td>${r.completed}</td>`;
	
				if(r.completed == true){
					tab += `<td><input type="checkbox" checked="checked" readonly></td>`;
				}
				else{
					tab += `<td><input type="checkbox" class = "check"></td>`;
				}
				tab +=`</tr>`;
				$("#todolist").html(tab);
				document.getElementById("todolist").innerHTML = tab;
			}

	 //A JS Promise to count the number of checkboxes checked and display an alert if number of checked checkboxes is 5 
	 $('.check').click(function(){
        const myPromise = new Promise((resolve, reject) =>{
            var checkbox = $(".check");
            console.log(checkbox);
            var count = checkbox.filter(':checked').length;
            if(count == 5){
                resolve("Congrats. 5 Tasks have been successfully completed!");
            }
            else{
                reject(count);
            }
        });
        myPromise.then((message) => {
            alert(message);
        }).catch((message) => {
            console.log("Checkboxes checked:" + message);
        })
    });

}
