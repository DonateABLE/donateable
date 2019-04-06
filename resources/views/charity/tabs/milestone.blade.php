<div class="tabcontainer milestones">
    <div style="display: flex; flex: 1; flex-direction: row; min-height: 0; justify-content: space-evenly; width: 100%;">

            @foreach($charity->milestones as $milestone)
            <div class="milestone" style="padding: 5px;">
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
            @endforeach
        </div>
    </div>
