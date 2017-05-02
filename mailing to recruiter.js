var mailList = function (firstName, lastName, dreamCompany) {
   var firstName = prompt("tell me the FIRST NAME");
   var lastName = prompt("tell me the LAST NAME");
   var dreamCompany = prompt("tell me the COMPANY NAME");
  return confirm(
   firstName+"."+lastName+"@"+dreamCompany+".com, "

  +firstName.substring(0,1)+""+lastName+"@"+dreamCompany+".com, "
  +firstName+"."+lastName.substring(0,1)+"@"+dreamCompany+".com, "
  +firstName+""+lastName.substring(0,1)+"@"+dreamCompany+".com, "
  +firstName+"@"+dreamCompany+".com, "
  +firstName+lastName+"@"+dreamCompany+".com, "
  +firstName.substring(0,1)+"."+lastName+"@"+dreamCompany+".com, "
  +firstName.substring(0,1)+lastName+"@"+dreamCompany+".com, "
  +firstName+"."+lastName+"@"+dreamCompany+".net, "
  +firstName.substring(0,1)+"."+lastName+"@"+dreamCompany+".net, "
  +firstName+"@"+dreamCompany+".net, "
  +firstName+lastName+"@"+dreamCompany+".net, "
  +firstName.substring(0,1)+"."+lastName+"@"+dreamCompany+".net, "
  +firstName.substring(0,1)+lastName+"@"+dreamCompany+".net, "
  );
};

mailList();
