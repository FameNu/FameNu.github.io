function copyTextToClipboard(id){
    var copyText = document.getElementById(id);

    var tempInput = document.createElement("input");
    tempInput.value = copyText.innerText.replace(/-/g, "");
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);
    alert("Copied the text: " + copyText.textContent);
}