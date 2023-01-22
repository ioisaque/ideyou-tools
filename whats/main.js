function setWhatsAppLink() {
    const phone =
        $("input[name='phone']").val().replace(/\s/g, "") != ""
            ? $("input[name='phone']").val().replace(/\s/g, "")
            : "3190712203";
    const message = $("input[name='message']").val()
        ? $("input[name='message']").val()
        : "Olá gostaria de conhecer mais sobre seus serviços!";

    const copyText =
        "https://api.whatsapp.com/send?phone=55" + phone + "&text=" + message;

    $("#link").attr("href", copyText);
    navigator.clipboard.writeText(copyText);
}

$(function () {
    $("input[name='phone']").mask("99 9 9999 9999");

    var elems = document.querySelectorAll("input");
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].id.indexOf("version-") != 0)
            elems[i].oninput = setWhatsAppLink;
    }
    setWhatsAppLink();
});
