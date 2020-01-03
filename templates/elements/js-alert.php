<?php
// Materialize alert modal
?>

<div id="js-alert" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p></p>
            </div>
            <div class="modal-footer">
                <a href="javascript: return true;" class="btn btn-primary ok-btn"><?= __('Ok') ?></a>
            </div>
        </div>
    </div>
</div>
