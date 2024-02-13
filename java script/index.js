var elementNameInput = document.getElementById('fullName');
var phoneNumberInput = document.getElementById('phoneNumber');
var birthDayInput = document.getElementById('birthDay');
var nationalityInput = document.getElementById('nationality');
var idNumberInput = document.getElementById('idNumber');
var startingDateInput = document.getElementById('startingDate');
var jobInput = document.getElementById('job');
var addBtn = document.getElementById('addElement');
var updateBtn = document.getElementById('updateElement');
var mianIndex = 0 ;
var elementContainer = [] ;


if(localStorage.getItem('elements') != null){
    elementContainer = JSON.parse(localStorage.getItem('elements'))
    displayElement(elementContainer)
}

function addElement()
{
  
        var element ={
            fullName:elementNameInput.value ,
            phoneNumber:phoneNumberInput.value   ,   
            birthDay:birthDayInput.value,
            nationality:nationalityInput.value,
            idNumber:idNumberInput.value,
            startingDate:startingDateInput.value,
            job:jobInput.value,
        } ;
        
       elementContainer.push(element);
        localStorage.setItem("elements", JSON.stringify(elementContainer))
        displayElement(elementContainer) 
        clearForm() 
   

    
  
    
} ;

function clearForm(){
  
  elementNameInput.value=""; 
  phoneNumberInput.value ="" ;
  birthDayInput.value="";
  nationalityInput.value="";
  idNumberInput.value="";
  startingDateInput.value="";
  jobInput.value="";
   
} ;

  

 
function displayElement(elementContainer){

    var trs= ""
    for(var i = 0 ; i < elementContainer.length; i++) {

        trs+= ` <tr>
       <td>${i}</td>
       <td>${elementContainer[i].fullName}</td>
       <td>${elementContainer[i].phoneNumber}</td>
       <td>${elementContainer[i].birthDay}</td>
       <td>${elementContainer[i].nationality}</td>
       <td>${elementContainer[i].idNumber}</td>
       <td>${elementContainer[i].startingDate}</td>
       <td>${elementContainer[i].job}</td>
       <td> 
       <button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning btn-sm ">Update</button>
       </td>
       
       <td>
           <button onclick="deleteElement(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
       </td>
       </tr>
          
       `
       
       } ;
       
       
       document.getElementById("tbody").innerHTML = trs ;
       
}


function deleteElement(elementIndex){
  elementContainer.splice(elementIndex,1) ;
   localStorage.setItem("elements", JSON.stringify(elementContainer)) ;
   displayElement(elementContainer);
}


function search(){
    var trs ="" ;
   var searchTerm = document.getElementById("searchInput").value
  for(var i = 0 ; i < elementContainer.length ; i++) {
    
    if(elementContainer[i].fullName.toLowerCase().includes(searchTerm.toLowerCase())){
        trs += ` <tr>
        <td>${i}</td>
       <td>${elementContainer[i].fullName}</td>
       <td>${elementContainer[i].phoneNumber}</td>
       <td>${elementContainer[i].birthDay}</td>
       <td>${elementContainer[i].nationality}</td>
       <td>${elementContainer[i].idNumber}</td>
       <td>${elementContainer[i].startingDate}</td>
       <td>${elementContainer[i].job}</td>
        <td>
            <button onclick="updateElement()" class="btn btn-outline-warning btn-sm ">Update</button>
        </td>
        <td>
            <button onclick="deleteElement(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
        </td>
        </tr>
        
        `
    }
     
  } 

  document.getElementById("tbody").innerHTML = trs ;
}


function setFormForUpdate(i)
{
    mianIndex = i ;
   addBtn.classList.replace("d-block" , "d-none");
   updateBtn.classList.replace("d-none" , "d-block" );

   elementNameInput.value =elementContainer[i].fullName ;
   phoneNumberInput.value = elementContainer[i].phoneNumber ;
   birthDayInput.value = elementContainer[i].birthDay ;
   nationalityInput.value =elementContainer[i].nationality ;
   idNumberInput.value =elementContainer[i].idNumber ;
   startingDateInput.value =elementContainer[i].startingDate ;
   jobInput.value=elementContainer[i].job ;
   


  
   
}


function updateElement()
{
    var element = {
        fullName:elementNameInput.value ,
        phoneNumber:phoneNumberInput.value,
        birthDay:birthDayInput.value,
        nationality:nationalityInput.value,
        idNumber:idNumberInput.value,
        startingDate:startingDateInput.value,
        job:jobInput.value,
    } ;

       elementContainer.splice(mianIndex, 1 ,element)
        localStorage.setItem("elements", JSON.stringify(elementContainer))
        displayElement(elementContainer)
        clearForm()
        updateBtn.classList.replace("d-block" , "d-none");
        addBtn.classList.replace("d-none" , "d-block" );
        
   
}

//  function validateElementName(){
//     var regex = /^[A-Z  ][a-z  ]{3,50}$/ ;
//     return regex.test(elementNameInput.value);
//  }

