// Função para abrir a pasta de logs
function openLogFolder() {
    const logFolderPath = "../logs";
    const logFolderLink = document.createElement("a");
    logFolderLink.id = "logFolderLink";
    logFolderLink.href = logFolderPath;
    logFolderLink.style.display = "none";
    document.body.appendChild(logFolderLink);
    logFolderLink.click();
}
