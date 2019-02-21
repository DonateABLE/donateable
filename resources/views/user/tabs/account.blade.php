<div class="tabcontainer" style="padding: 2% 6%;">
    <div id="profile-form" class="container">
        <label for="account-settings-form" class="settings-label">Account Settings</label>
            <!-- original location of form -->
            <form method="POST" action="{{ route('settings') }}" aria-label="{{ __('Account Settings') }}">

                @csrf
            <div class="form-group row">

                <div class="col-md-6" style="padding-right: 7.5px">
                    <label for="fname">First Name</label>
                    <input disabled="disabled" placeholder="{{ __('First Name') }}" id="fname" type="fname" class="form-control{{ $errors->has('fname') ? ' is-invalid' : '' }}" name="fname" value="{{ old('fname', $user->firstName) }}" autofocus>

                    @if ($errors->has('fname'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('fname') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="col-md-6" style="padding-left: 7.5px">
                    <label for="lname">Last Name</label>
                    <input disabled="disabled" placeholder="{{ __('Last Name') }}" id="lname" type="lname" class="form-control{{ $errors->has('lname') ? ' is-invalid' : '' }}" name="lname" value="{{ old('lname', $user->lastName) }}" autofocus>

                    @if ($errors->has('lname'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('lname') }}</strong>
                    </span>
                    @endif
                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-12">
                    <label for="email">Email Address</label>
                    <input disabled="disabled" placeholder="{{ __('Email') }}" id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email', $user->email) }}" required>

                    <span id="emailError" class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-12">
                    <label for="username">Username</label>
                    <input disabled="disabled" placeholder="{{ __('Username') }}" id="username" type="username" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username', $user->username) }}">

                    @if ($errors->has('username'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('username') }}</strong>
                    </span>
                    @endif
                    <small id="usernameHelpBlock" class="form-text text-muted">
                      Your username will be used as an alias if you've chosen to share your contribution stats so we don't have to tell anyone your real name.
                    </small>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-12 optin">
                    <input disabled="disabled" type="checkbox" name="communicationOptIn" aria-label="Checkbox for media communication opt-in"
                        @if($user->communicationOptIn)
                        checked="checked"
                        @endif
                    >
                    I would like to receive emails from donateable about new features, stats, and other communications.
                </div>
            </div>


            <div class="form-group row">
                <div class="col-md-12 optin">
                    <input disabled="disabled" type="checkbox" name="publishStatsOptIn" aria-label="Checkbox for collection of statistics opt-in"
                        @if($user->publishStatsOptIn)
                        checked="checked"
                        @endif
                    >
                    I agree to allow donateable to post my statistics and keep track of my donations, hashes, and time spent.
                </div>
            </div>


            <div class="form-group row">
                <div class="col-md-12">
                    <button name="EditButton" type="submit" class="btn btn-primary btn-full">
                        {{ __('Edit Account Settings') }}
                    </button>
                    <button name="SaveButton" style="display: none" type="submit" class="btn btn-primary btn-full">
                        {{ __('Save') }}
                    </button>
                </div>
            </div>
        </form>



    </div>
</div>
