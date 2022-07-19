// CRUD 

var selectedRow= null;
let form=document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()  
    onFormSubmit()
    
})


function onFormSubmit(){
    let formData=readFormData();
    if(selectedRow==null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    
    formReset()
}

function readFormData(){
    let formData={}
    formData["firstName"]=document.getElementById('firstName').value;
    formData["lastName"]=document.getElementById('lastName').value;
    formData["address"]=document.getElementById('address').value;
    formData["pincode"]=document.getElementById('pincode').value;
    formData["gender"]=document.getElementById('gender').value;
    formData["food"]=document.getElementById('food').value;
    formData["state"]=document.getElementById('state').value;
    formData["country"]=document.getElementById('country').value;
    
    return formData;
}

function insertNewRecord(data){
    let table =document.getElementById('employeeList').getElementsByTagName('tbody')[0]
    let newRow = table.insertRow(table.length);
    cell1 =newRow.insertCell(0);
    cell1.innerHTML = data.firstName
    cell2 =newRow.insertCell(1);
    cell2.innerHTML = data.lastName
    cell3 =newRow.insertCell(2);
    cell3.innerHTML = data.address
    cell4 =newRow.insertCell(3);
    cell4.innerHTML = data.pincode
    cell5 =newRow.insertCell(4);
    cell5.innerHTML = data.gender
    cell6 =newRow.insertCell(5);
    cell6.innerHTML = data.food
    cell7 =newRow.insertCell(6);
    cell7.innerHTML = data.state
    cell8 =newRow.insertCell(7);
    cell8.innerHTML = data.country
    
    cell9 =newRow.insertCell(8);
    cell9.innerHTML = `<a onClick=onEdit(this) class=button>Edit</a>
                        <a onClick=onDelete(this) class=button>Delete</a>`
}

function formReset(){
    document.getElementById('firstName').value="";
    document.getElementById('lastName').value="";
    document.getElementById('address').value="";
    document.getElementById('pincode').value="";
    document.getElementById('gender').value="";
    document.getElementById('food').value="";
    document.getElementById('state').value="";
    document.getElementById('country').value="";
    selectedRow=null
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('firstName').value=selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value=selectedRow.cells[1].innerHTML;
    document.getElementById('address').value=selectedRow.cells[2].innerHTML;
    document.getElementById('pincode').value=selectedRow.cells[3].innerHTML;
    document.getElementById('gender').value=selectedRow.cells[4].innerHTML;
    document.getElementById('food').value=selectedRow.cells[5].innerHTML;
    document.getElementById('state').value=selectedRow.cells[6].innerHTML;
    document.getElementById('country').value=selectedRow.cells[7].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.firstName;
    selectedRow.cells[1].innerHTML=formData.lastName;
    selectedRow.cells[2].innerHTML=formData.address;
    selectedRow.cells[3].innerHTML=formData.pincode;
    selectedRow.cells[4].innerHTML=formData.gender;
    selectedRow.cells[5].innerHTML=formData.food;
    selectedRow.cells[6].innerHTML=formData.state;
    selectedRow.cells[7].innerHTML=formData.country;
}


function onDelete(td){
    if(confirm("Are you sure to delete this record ?")){
        row=td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        formReset();
    }
}




























