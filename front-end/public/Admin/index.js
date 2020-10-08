//custom js

$(function () {
  document
    .getElementById("eventNav")
    .addEventListener("click", delayLoad);

  function delayLoad() {
    setTimeout(loadDataTable, 1000);
  }
  function delayLoadJs() {
    setTimeout(loadJs, 10);
  }
  var editEventBtns = [];
  function loadDataTable() {
    document
      .getElementById("addEventBtn")
      .addEventListener("click", delayLoadJs);

     
    editEventBtns = $("a.editEventBtn");

    $("#eventTable").DataTable({
      responsive: true,
      autoWidth: false,
    });


    console.log(editEventBtns,addMemberBtns);
    for (var i = 0; i < editEventBtns.length; i++) {
      editEventBtns[i].addEventListener("click", delayLoadJs);
    }
   
  }

  function loadJs() {
    $("#eventTime").daterangepicker({
      timePicker: true,
      timePickerIncrement: 15,
      locale: {
        format: "MM/DD/YYYY hh:mm A",
      },
    });

    $(".select2").select2();

    $(".textarea").summernote();

    bsCustomFileInput.init();
  }
});
