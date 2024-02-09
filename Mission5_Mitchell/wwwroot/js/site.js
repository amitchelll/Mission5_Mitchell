$("#btnsubmit").click(function () {
    var hours = $("#hours").val();
    var amount = $("#rate").val();
    var calculatedTotal = $("#total");

    calculatedTotal.prop('readonly', false);

    calculatedTotal.val(hours * amount);

    calculatedTotal.prop('readonly', true);
});
