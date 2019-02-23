<div class="tabcontainer">
    <form method="POST" action="{{ route('changePassword') }}" aria-label="{{ __('Change Password') }}" style="height: 100%;">
        @csrf
    <div class="container password-reset">

    <div class="form-group row">

        <div class="col-md-6">
            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('New Password') }}</label>
            <input placeholder="{{ __('NEW PASSWORD') }}" id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" value="{{ old('password') }}" required autofocus>

            @if ($errors->has('password'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('password') }}</strong>
            </span>
            @endif
        </div>
        <div class="col-md-6">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>
            <input placeholder="{{ __('CONFIRM PASSWORD') }}" id="password-confirm" type="password" class="form-control" name="password_confirmation" required autofocus>
        </div>
    </div>

    <div class="form-group row">

        <div class="col-md-12">
            <button name="SaveButton" type="submit" class="btn btn-primary btn-full">
                {{ __('Save') }}
            </button>
        </div>
    </div>
</div>
</form>

</div>
