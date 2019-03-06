(function () {
    'use strict';
    var AltoAlAcosoScripts;

    AltoAlAcosoScripts = function () {
        var me = this;
        me.Eventos = {
            HoverInOutAbusos: function () {
                $(this).find('.hoverOverlay').addClass('hover');
                if ($(this).mouseout(function () {
                    $(this).find('.hoverOverlay').removeClass('hover');
                }));
            }
        };
        me.Funciones = {
            InicializarEventos: function () {
                $('body').on('mouseover', '.acosoYacosador .col-lg-6', me.Eventos.HoverInOutAbusos);
            }
        }
        me.Inicializar = function () {
            me.Funciones.InicializarEventos();
        }
    }
    AltoAlAcosoScripts = new AltoAlAcosoScripts();
    AltoAlAcosoScripts.Inicializar();

})(window);