
function decryptEmail(encoded) {
    var address = atob(encoded);
    window.location.href = "mailto:" + address;
}



$(function () {
    $('html').addClass ( 'dom-loaded' );


    $('.card-footer-item').on('click', function (ev) {
        ev.preventDefault();
        var $this=$(this);
        var target = '#' + $this.attr('target')

        // diplay on the links
        $('.card-footer-item').removeClass('is-underlined');
        $this.addClass('is-underlined')

        //display the target section in the card
        $('.disp-section').addClass('is-hidden');
        $(target).removeClass('is-hidden')
    })


});