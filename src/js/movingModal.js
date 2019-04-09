import 'jquery-ui-dist/jquery-ui';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery/dist/jquery.js';


alert("CONNECTED");

$('.modal').modal({ keyboard: false,
            show: true
});
// Jquery draggable
$('.modal-dialog').draggable({
handle: ".modal-header"
});




