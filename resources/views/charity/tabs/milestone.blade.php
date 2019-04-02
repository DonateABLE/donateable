<div class="tabcontainer milestones">
    <div style="display: flex; flex: 1; flex-direction: row; min-height: 0; justify-content: space-evenly; width: 100%;">

            @foreach($charity->milestones as $milestone)
            <div class="milestone" style="padding: 5px;">
                <i class="{{ $milestone->faLink }} fa-4x"></i>
                <h2>{{ $milestone->title }}</h2>
                <h4>{{ $milestone->description }}</h4>
            </div>
            @endforeach
        </div>
    </div>
