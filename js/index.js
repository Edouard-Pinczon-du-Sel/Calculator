//! module app 

const touches = [...document.querySelectorAll('.button')];
const listKeyCode = touches.map(touche => touche.dataset.key)
const ecran = document.querySelector(".ecran");

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculate(valeur);

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculate(valeur);

})
 

const calculate = (valeur) => {
    if (listKeyCode.includes(valeur)) {
        switch(valeur) {
            case '8':
                ecran.textContent="";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listKeyCode.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
        }
    }
}


window.addEventListener('error', (e) => {
    alert("Une erreur c'est produite dans votre calcul !");
})
