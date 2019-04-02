<div class="tabcontainer milestones">
    <div style="display: flex; flex: 1; flex-direction: column; min-height: 0; justify-items: center: width: 100%;">

            @foreach($charity->milestones as $milestone)
            <div class="milestone">
                <i class="{{ $milestone->faLink }} fa-4x"></i>
                <h2>{{ $milestone->title }}</h2>
                <h4>{{ $milestone->description }}</h4>
            </div>
            @endforeach
        </div>
    </div>
