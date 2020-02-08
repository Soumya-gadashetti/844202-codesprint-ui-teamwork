const APPOINTMENTS_KEY = "appointment";

getAppointmentsFromLocalStorage = () =>{
    let appointments=[];
    
    if(localStorage.getItem(APPOINTMENTS_KEY)){
        appointments=JSON.parse(localStorage.getItem(APPOINTMENTS_KEY));
    }

    return appointments;
}
function validate()                                    
    { 
        var p = document.getElementById("ph");
        var letterNumber =/^\d{10}$/;  
        
        if(p.value.match(letterNumber))
        {
        //    console.log("sucess")
           return true;
            }else{
            alert("validation failed");
            return false;
            
        }
    }
    function myFun(reason){
        document.getElementById("result").value=reason;
        document.getElementById("paisa").value=00;
    }

addAppointmentFormSubmit = () =>{
    if(validate){
    let appointments = getAppointmentsFromLocalStorage();

    let firstNameTextBox = document.querySelector("#fnm");
    let lastNameTextBox = document.querySelector("#lnm");
    let contactTextBox = document.querySelector("#phno");
    let streetTextBox = document.querySelector("#street");
    let cityTextBox = document.querySelector("#city");
    let packageBox=document.querySelector("#p");
    let trainerBox=document.querySelector("#preference");


    let appointment = {
        fname:firstNameTextBox.value,
        lname:lastNameTextBox.value,
        contact:contactTextBox.value,
        street:streetTextBox.value,
        city:cityTextBox.value,
        package:packageBox.value,
        trainer:trainerBox.value
    };

    appointments.push(appointment);
    localStorage.setItem(APPOINTMENTS_KEY,JSON.stringify(appointments));
}

}
loadAppointments = () =>{
    let appointments = getAppointmentsFromLocalStorage();

    let tableBody = document.querySelector("#aptData");

/*  products.forEach(product => {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }); */

    for(let appointment of appointments){
        let aptRow = createAppointmentRow(appointment);
        tableBody.append(aptRow);
    }
}

createAppointmentRow = (appointment) =>{

    let fstName = document.createElement("td");
    fstName.textContent=appointment.fname;

    let ltName = document.createElement("td");
    ltName.textContent=appointment.lname;

    let cont = document.createElement("td");
    cont.textContent=appointment.contact;

    let stre = document.createElement("td");
    stre.textContent=appointment.street;

    let city = document.createElement("td");
    city.textContent=appointment.city;

    let pack = document.createElement("td");
    pack.textContent=appointment.package;

    let train = document.createElement("td");
    train.textContent=appointment.trainer;

    let aptRow = document.createElement("tr");
    aptRow.append(fstName);
    aptRow.append(ltName);
    aptRow.append(cont);
    aptRow.append(stre);
    aptRow.append(city);
    aptRow.append(pack);
    aptRow.append(train);

    return aptRow;
}