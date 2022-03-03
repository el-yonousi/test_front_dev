function switchTheme() {
    const theme = document.querySelector('#theme').href
    document.querySelector('#theme').href = theme.includes('light') ? './css/dark.css' : './css/light.css'
}