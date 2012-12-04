// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function() {

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault();
    });

    // make code pretty
    window.prettyPrint && prettyPrint();

    // tooltip / popover
    $('[rel="tooltip"]').tooltip();
    $('[rel="popover"]').popover();

    // carousel
    $('.carousel').each(function() {$(this).carousel()});
    
    $('#recherche_avancee').searchbox();
  });

}(window.jQuery)