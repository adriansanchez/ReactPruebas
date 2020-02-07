function reloj(){
    const elemento = "Son las " + new Date().toLocaleTimeString();
    ReactDOM.render(elemento,document.getElementById('reloj'));
}
    
setInterval(reloj,1000);
    