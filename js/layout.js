$(document).ready(function() {
    /*
    * Non lasciamo scadere la sessione finché il browser è aperto...
    */
    setInterval(function() {
        console.log('staying alive');
        $.ajax({
            url: 'ping.php'
        });
    }, 5 * 60 * 1000);

    $('.password-field').each(function() {
        var $this = $(this);
        var name = $this.attr('id');
        $this.attr('name', name);
        $this.attr('type', 'password');
    });

    // Nei campi numerici faccio il replace di , con .
    $('input.float').on('change', function() {
        var $this = $(this);
        var value = $this.val();
        value = value.replace(',', '.');
        $this.val(value);
    });

    // Cliccando su una riga di una tabella .touchable vado alla prima azione disponibile
    $('body').on('click', 'table.touchable tbody tr', function() {
        var link = $(this).find('a:first').attr('href');
        window.location = link;
    });

    $('.bottom-bar-extend').on('click', function() {
        $menu = $('.bottom-bar-extended');
        $menu.slideToggle();
    });

    /*
    * Stampa
    */
    $('.print-page').on('click', function() {
        window.print();
    });
    if ((window.location.href).indexOf('#print') > -1) {
        window.print();
        history.replaceState(null, null, ' ');
    }

    /*
    * Date picker
    */
    $('.datepicker').daterangepicker({
        autoapply: true,
        singleDatePicker: true,
        maxDate: moment(),
        locale: {
            format: 'DD/MM/YYYY'
        }
    });
    $('.rangepicker').daterangepicker({
        autoapply: true,
        ranges: {
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment($('.dates-start').attr('data-nice'), 'DD/MM/YYYY'),
        endDate: moment($('.dates-end').attr('data-nice'), 'DD/MM/YYYY'),
        locale: {
            format: 'DD MMM YYYY'
        }
    });
    $('.rangepicker').on('apply.daterangepicker', function() {
        $(this).closest('form').submit();
    });

    /*
    * Toast per messaggi di sessione
    */
    if ($('.sessionMsg').length > 0) {
        iziToast.show({
            message: $('.sessionMsg').html(),
            position: 'topRight',
            color: $('.sessionMsg').attr('data-color')
        });
    }

    // Save last tab's selection
    $('a[data-toggle="pill"]').on('click', function (e) {
        //save the latest tab; use cookies if you like 'em better:
        localStorage.setItem('lastTab', $(e.target).attr('href'));
    });
    //go to the latest tab, if it exists:
    var lastTab = localStorage.getItem('lastTab');
    if (lastTab) {
        $('a[href="' + lastTab + '"]').click();
    }
});


/*
* Alert modal
*/
function jsAlert(text) {
    var $modal = $('#js-alert');
    var $okBtn = $('.ok-btn');

    $modal.find('h5').html('Avviso');
    $modal.find('p').html(text);
    $modal.modal('show');

    $okBtn.on('click', function() {
        $modal.modal('hide');
    });
}

$('.js-confirm').on('click', function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    var $modal = $('#js-confirm');
    $modal.modal('show');

    $modal.find('.yes-btn').click(function() {
        window.location.href = link;
    });
    $modal.find('.no-btn').click(function() {
        $modal.modal('hide');
    });
});
