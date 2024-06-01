  /* DOM is ready
    ------------------------------------------------*/
    $(function () {

        if (renderPage) {
          $('body').addClass('loaded');
        }
        
        $('.tm-current-year').text(new Date().getFullYear());  // Update year in copyright
        });



        var renderPage = true;

        if (navigator.userAgent.indexOf('MSIE') !== -1
          || navigator.appVersion.indexOf('Trident/') > 0) {
          /* Microsoft Internet Explorer detected in. */
          alert("Please view this in a modern browser such as Chrome or Microsoft Edge.");
          renderPage = false;
        }
        
        