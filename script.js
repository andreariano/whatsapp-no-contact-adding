function submitForm(e){
    e.preventDefault();

    phoneNumber = $("#phoneNumber").val();
    newLocation = "https://wa.me/+55" + cleanUpPhoneNumber(phoneNumber);

    $("#wa-link").attr("href", newLocation);
    $("#wa-link").text(newLocation);

    document.location.href = newLocation;
}

function cleanUpPhoneNumber(phoneNumber) {
    return phoneNumber
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .replaceAll(".", "")
            .replaceAll("+55", "")
            .replaceAll("(", "")
            .replaceAll(")", "");
}