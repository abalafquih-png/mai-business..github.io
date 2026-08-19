/* ============================================================
   MAI BUSINESS LAB — Banner de consentimiento de cookies
   Cumple LSSI-CE: bloquea cookies no esenciales hasta consentimiento.
   Incluir este script en TODAS las páginas del sitio, justo antes
   de </body>, y añadir el bloque HTML/CSS correspondiente.
   ============================================================ */

(function () {
    var CONSENT_KEY = 'mai_cookie_consent';

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    }

    function hideBanner() {
        var el = document.getElementById('cookie-banner');
        if (el) el.style.display = 'none';
        // Importante: el banner es "position: fixed" sobre el footer.
        // Al ocultarlo, quitamos el hueco extra que habíamos añadido.
        document.body.style.paddingBottom = '';
    }

    function showBanner() {
        var el = document.getElementById('cookie-banner');
        if (!el) return;
        el.style.display = 'flex';
        // El banner está "position: fixed" y se superpone al final de la
        // página (footer incluido), tapando cualquier enlace que haya ahí
        // y bloqueando los clics. Añadimos un padding al body igual a la
        // altura real del banner para que el footer quede siempre visible
        // y clicable por encima de él.
        var altura = el.offsetHeight;
        document.body.style.paddingBottom = altura + 'px';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var consent = getConsent();

        if (!consent) {
            showBanner();
            // Recalcula el hueco si la ventana cambia de tamaño (el banner
            // puede ocupar más o menos alto en móvil vs escritorio).
            window.addEventListener('resize', function () {
                if (!getConsent()) showBanner();
            });
        }

        var acceptBtn = document.getElementById('cookie-accept');
        var rejectBtn = document.getElementById('cookie-reject');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', function () {
                setConsent('accepted');
                hideBanner();
                // Aquí se activarían las cookies analíticas/no esenciales,
                // p. ej. cargando Google Analytics dinámicamente.
            });
        }

        if (rejectBtn) {
            rejectBtn.addEventListener('click', function () {
                setConsent('rejected');
                hideBanner();
                // No se cargan cookies analíticas ni no esenciales.
            });
        }
    });
})();