const CHECKOUT_URL = "https://pay.hotmart.com/S107707449W?off=5yldr4qq";
document.querySelectorAll(".checkout").forEach(a=>a.addEventListener("click",e=>{
 if(CHECKOUT_URL.startsWith("COLE_")){e.preventDefault();alert("Falta apenas inserir no script.js o link exato do checkout de lançamento de R$37.");}
 else a.href=CHECKOUT_URL;
}));
