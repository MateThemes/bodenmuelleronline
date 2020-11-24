var util = UIkit.util;
util.on(util.$('#tm-mobile-menu'), 'click', function (e) {
    e.preventDefault();
    UIkit.offcanvas('#tm-mobile-menu').hide();
});