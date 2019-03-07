<div class="tabcontainer">
    <div class="container fill" style="height: 100%;">

    @if (count($donations) > 0)
        <?php $index = 1; ?>
        @foreach($donations as $donation)
        <div class="form-group row justify-content-center">
            <div class="col-lg-1 col-md-1" style="display: flex; align-self: center;">
                {{ $index++ . '.'}}
            </div>
            <div class="col-lg-2 col-md-2 imgholder" style="margin-right: 25px">
                {{ $donation->Charity->smallLogo() }}
            </div>
            <div class="col-lg-5 col-md-5 leaderstats">
                <div class="row title">
                    <h3>{{ $donation->Charity->longName}}<h3>
                </div>
                <div class="row stats">
                    <div class="col-md-12">

                        <h4>Total Hashes Donated <span>{{ number_format($donation->totalHashes, 0, ',', ' ') }}</span></h4>

                        <h4>Total Time Donated <span>{{ formatSeconds($donation->totalTime) }}</span></h4>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    @else
    <div class="form-group row">
        <div class="col-md-12">
            <h1 class="no-donations">Oops! You haven't made any donations yet</h1>
        </div>
    </div>
    @endif
    <div class="form-group row donate-button">
        <div class="col-md-12">

    <a href="{{url('/charities')}}" ><span class="btn btn-primary btn-full">Donate Now</span></a>

</div>
</div>
</div>
</div>
