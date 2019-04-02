<div class="tabcontainer" style="padding: 2% 6%;">
    <div id="profile-form" class="container">
        <label for="account-settings-form" class="settings-label">Account Settings</label>
            <!-- original location of form -->
            <form method="POST" action="{{ route('settings') }}" aria-label="{{ __('Account Settings') }}">

                @csrf
            <div class="form-group row">

                <div class="col-md-6" style="padding-right: 7.5px">
                    <label for="fname">First Name</label>
                    <div class="input-group">
                    <input disabled="disabled" placeholder="{{ __('FIRST NAME') }}" id="fname" type="fname" class="form-control{{ $errors->has('fname') ? ' is-invalid' : '' }} has-icon" name="fname" value="{{ old('fname', $user->firstName) }}" autofocus>
                    <span class="input-group-append">
                       <div class="input-group-text disabled"><i class="fa fa-lock field-icon"></i></div>
                   </span>
                    @if ($errors->has('fname'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('fname') }}</strong>
                    </span>
                    @endif
                </div>
                </div>
                <div class="col-md-6" style="padding-left: 7.5px">
                    <label for="lname">Last Name</label>
                    <div class="input-group">
                    <input disabled="disabled" placeholder="{{ __('LAST NAME') }}" id="lname" type="lname" class="form-control{{ $errors->has('lname') ? ' is-invalid' : '' }} has-icon" name="lname" value="{{ old('lname', $user->lastName) }}" autofocus>
                    <span class="input-group-append">
                       <div class="input-group-text disabled"><i class="fa fa-lock field-icon"></i></div>
                   </span>
                    @if ($errors->has('lname'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('lname') }}</strong>
                    </span>
                    @endif
                </div>
            </div>
            </div>

            <div class="form-group row">
                <div class="col-md-12">
                    <label for="email">Email Address</label>
                    <div class="input-group">

                    <input disabled="disabled" placeholder="{{ __('EMAIL') }}" id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }} has-icon" name="email" value="{{ old('email', $user->email) }}" required>
                    <span class="input-group-append">
                       <div class="input-group-text disabled "><i class="fa fa-lock field-icon"></i></div>
                   </span>
                    <span id="emailError" class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                </div>

                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-12">
                    <label for="username">Username</label>
                    <div class="input-group">
                    <input disabled="disabled" placeholder="{{ __('USERNAME') }}" id="username" type="username" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }} has-icon" name="username" value="{{ old('username', $user->username) }}">
                    <span class="input-group-append">
                       <div class="input-group-text disabled "><i class="fa fa-lock field-icon"></i></div>
                   </span>
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
