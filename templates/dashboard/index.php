<div class="row">
    <div class="col-12 col-md-6 titles">
        <h3>
            <span class="activity" data-stopped="<?= __('no_activity') ?>"><?= __('no_activity') ?></span>
            <span class="tag"></span>
        </h3>
    </div>
</div>

<div class="row mt-5">
    <div class="col-5">
        <div class="form-group">
            <input type="text" class="form-control" id="activity" placeholder="<?= __('activity') ?>">
        </div>
    </div>
    <div class="col-5">
        <div class="form-group">
            <input type="text" class="form-control" id="tag" placeholder="<?= __('tag') ?>">
        </div>
    </div>
    <div class="col-2 text-right">
        <button type="button" class="btn btn-primary start-tracking"><?= __('start_tracking') ?></button>
        <button type="button" class="btn btn-primary stop-tracking hide"><?= __('stop_tracking') ?></button>
    </div>
</div>

<div class="row">
    <div class="col-12 today">
        <table class="table compact">
            <tbody>
                <?php foreach ($activities as $activity) { ?>
                    <tr>
                        <td style="width: 100px"><?= $activity['start'] ?></td>
                        <td style="width: 100px"><?= $activity['end'] ?></td>
                        <td style="width: "><?= $activity['activity'] ?></td>
                        <td style="width: "><?= $activity['tag'] ?></td>
                        <td style="width: 130px"><?= $activity['duration_minutes'] ?> min</td>
                        <td style="width: 50px"></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</div>
