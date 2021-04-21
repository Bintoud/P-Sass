// initialiser une const
// lorsque j'appel card tu vas chercher ds le html la class perspective__3d
// ds le body au mouvement de la souris , déclare une function qui a pour paramètre (t)
// ligne 10 et 11 par rapport au mouvement de la souris/ tu vas recalculer ou est situer la souris sur le dom
// ligne 13 je change les attributs card (perspective) le style..

const card = $(".perspective__3d"); 

$("body").on("mousemove", function(t) {
    let vertical = -($(window).innerWidth() / 2 - t.pageX ) /70,
        horizontal = ($(window).innerHeight() / 2 - t.pageY) / 70;

    card.attr("style", "transform: rotateY(" + vertical + "deg) rotateX(" + horizontal + "deg)")  
});
