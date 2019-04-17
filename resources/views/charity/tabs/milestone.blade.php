<div class="tabcontainer milestones">
    <div style="display: flex; width: 100%;">

            @foreach($charity->milestones as $milestone)
            <div class="milestone" style="padding: 5px;">
                <div style="display: flex;flex: 1; flex-direction: column; justify-content: center; align-items: center;">
                <i class="{{ $milestone->faLink }} fa-4x"></i>
                <h2>{{ $milestone->title }}</h2>
                <?php
                    $description = preg_split('/[-]/', $milestone->description);
                ?>
                @if(isset($description[0]))
                <h4>{{ $description[0] }}</h4>
                    @if(isset($description[1]))
                    <h4>{{ $description[1] }}</h4>
                    @endif
                @else
                <h4>{{ $milestone->description }}</h4>
                @endif
            </div>
            <div style="min-height: 150px; height: 150px !important;">
                @if (isset($milestone->comment))
                <p>
                    <?php echo nl2br($milestone->comment); ?>
                </p>
                @endif
            </div>
            </div>
            @endforeach
        </div>
    </div>
