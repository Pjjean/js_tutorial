// returns an array of username and domain for a standard email address of the form username@example.com; same with capitalised address USERNAME@EXAMPLE.com

function emailParts(email){
  return email.toLowerCase().split("@")
}
