// JavaScript source code
function RetrieveLoggedInD365UserSecurityRoles(executionContext) {

    var roleName = "Agent";
    //will retrieve the credit Card Number from the form
    var formContext = executionContext.getFormContext();
    var creditCardNum = formContext.getAttribute("cts_creditcardnumber").getValue();
    var duplicatecreditCardNum = creditCardNum;
    //
    //to retrive the global user context from the d365 security profile
    var globalContext = Xrm.Utility.getGlobalContext();
    var userRoles = globalContext.userSettings.roles;
    var userHasAccess = false;
    //using regex it will mask the digits of credit card Numbers 
    userRoles.forEach(function hasRoleName(item) {
        if (item.name == roleName) {
            alert("i m in!!")
            //var replacedCreditCardNum = creditCardNum.replace(/\d(?=\d{4})/g, "x");
            //formContext.getAttribute("cts_creditcardnumber").setValue(replacedCreditCardNum);
            userHasAccess = true;

        };
        //if (item.name != rolename) {
        //    formContext.getAttribute("cts_creditcardnumber").setValue(duplicatecreditCardNum);
        //};
    }
    );
    if (userHasAccess == true) {
        var parts = creditCardNum.split('-');
        var invisible_part = 'xxxx-xxxx-xxxx-';
        var visible_part = parts[parts.length - 1];
        replacedCreditCardNum = invisible_part + visible_part;
        formContext.getAttribute("cts_creditcardnumber").setValue(replacedCreditCardNum);
    }
    else {
        formContext.getAttribute("cts_creditcardnumber").setValue(duplicatecreditCardNum);
    }
}