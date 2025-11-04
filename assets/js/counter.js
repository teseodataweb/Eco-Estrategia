$(document).ready(function () { 
    $('.counter').each(function () {
        // Guardamos el valor original (puede incluir signos, %, +, etc.)
        var originalText = $(this).text();
        
        // Extraemos solo el número del texto
        var number = parseFloat(originalText.replace(/[^0-9\.\-]/g, ''));

        // Detectamos si el texto original tiene un signo "+" al principio o al final
        var hasPlus = /\+/.test(originalText);

        // Detectamos si tiene algún símbolo al final (como % o cualquier otro)
        var suffix = originalText.replace(/[0-9\.\+\-]/g, '').trim();

        // Animamos el número
        $(this).prop('Counter', 0).animate({
            Counter: number
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                var formatted = Math.ceil(now);

                // Si tenía el signo "+", lo colocamos antes del número
                if (hasPlus) {
                    formatted = '+' + formatted;
                }

                // Si tenía algún sufijo (como %), lo agregamos al final
                if (suffix) {
                    formatted += suffix;
                }

                $(this).text(formatted);
            }
        });
    });
});
