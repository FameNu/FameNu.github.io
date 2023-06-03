function allD() {
    document.querySelectorAll('.mini').forEach(year => { 
        year.style.display = 'none'; 
    });
}
function select(set){
    allD();
    document.querySelectorAll(set).forEach(year => {
        year.style.display = 'block';
    });
}