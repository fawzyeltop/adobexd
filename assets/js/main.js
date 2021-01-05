$(() => {
    // Variables
    const url = $("#url");
    const linkShorten = $("#linkShorten");
    const pickDomain = $(".pickDomain");
    linkShorten.click(() => {
        if(!url.val().trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Message Error',
                text: 'You must paste the URL',
                focusConfirm: false,
                confirmButtonText: 'Close'
              })
        }
        if(!url.val().startsWith("https")) {
            return Swal.fire({
                icon: 'error',
                title: 'Message Error',
                text: 'A seccure link starts with https',
                focusConfirm: false,
                confirmButtonText: 'Close'
              })
        }
        if(!$("#desiredKeyword").val().match(/^[a-z0-9 \+_|\ ]+$/i)) {
            return Swal.fire({
                icon: 'error',
                title: 'Message Error',
                text: 'Only aplhanumeric characters and + _ | symbols are allowed as desired text',
                focusConfirm: false,
                confirmButtonText: 'Close'
                })
        }
        $("#first").fadeOut();
        $("#last").fadeIn();
        const copiedTxt = $("#word").text() + "/" + $("#desiredKeyword").val()
        $("#copiedTxt").val(copiedTxt);
        $(".absImage").css("display", "none");
        $(".resetAbsImage").css("display", "block");
    });
    pickDomain.click((e) => {
      const textContent = e.target.textContent;
      $("#word").text(textContent);
      $(".navbar-brand").text(textContent.toUpperCase());
      $('#exampleModal').modal('hide');
    });
    $("#copyLink").click((e) => {
        $("#copiedTxt").select();
        document.execCommand("copy");
    })

    // Reset Function
    $("#reset").click(() => {
        $("#last").fadeOut();
        $("#first").fadeIn();
        $("#url").val("");
        $("#desiredKeyword").val("");
        $("#word").text('lnkd.dev');
        $(".navbar-brand").text('LNKD.DEV');
        $(".resetAbsImage").css("display", "none");
        $(".absImage").css("display", "block");
      
    })

    $("#copyLink").mouseover(() => {
        $(".copyTxtHover").css("display", "block");
    })

    $("#copyLink").mouseout(() => {
        $(".copyTxtHover").css("display", "none");
    })
});