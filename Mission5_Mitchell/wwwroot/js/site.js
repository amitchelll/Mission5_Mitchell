$("#btnsubmit").click(function () {
    var hours = parseFloat($("#hours").val()); 
    var amount = parseFloat($("#rate").val()); 
    var calculatedTotal = $("#total");

    if (hours < 0) {
        alert("Please enter a valid number of hours");
    } else {
        // Make the input field editable
        calculatedTotal.prop('readonly', false);

        // Set the value of the input field
        calculatedTotal.val(hours * amount);

        // Make the input field read-only again
        calculatedTotal.prop('readonly', true);
    }
});

