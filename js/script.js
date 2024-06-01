  /* DOM is ready
    ------------------------------------------------*/
    $(function () {

        if (renderPage) {
          $('body').addClass('loaded');
        }
        
        $('.tm-current-year').text(new Date().getFullYear());  // Update year in copyright
        });
        
        