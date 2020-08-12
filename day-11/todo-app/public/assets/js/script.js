
function cekStatus(id,status){
    console.log(status)
    $.ajax({
        type: "post",
        url: "/status",
        data: {id:id,status:status},
        success: function (response) {
            // M.toast({
            //     html: "Berhasil",
            //     classes: "green",
            //   });
            
         console.log(response)   
         location.reload();
        }
    });
}
