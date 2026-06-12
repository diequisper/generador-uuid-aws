function getUuid() {
    $.ajax({
        url: "http://localhost:8080/api/get-uuid",
        type: 'GET',
        success: function (res) {
            console.log(res);
            $('#result').html(res)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#result').html(`Error: ${xhr.status} ${thrownError}`)
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("generate-btn")
        .addEventListener("click", getUuid);
});