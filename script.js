// JS minimal pour interactions simples
document.addEventListener('click', function(e){
  if(e.target && e.target.id === 'floatContact'){
    // ouvrir contact rapide : Whatsapp si disponible sinon mail
    var wa = 'https://wa.me/213667616255';
    var mail = 'mailto:karimanis326@gmail.com';
    window.open(wa,'_blank');
  }
});

// petit helper pour marquer lien actif si besoin
(function(){
  var nav = document.querySelectorAll('.main-nav a');
  nav.forEach(function(a){ if(a.href===location.href) a.classList.add('active'); });
})();

