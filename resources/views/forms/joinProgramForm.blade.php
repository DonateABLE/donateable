<form name="joinProgramForm" method="POST" action="{{ route('JoinProgram') }}" aria-label="{{ __('JoinProgram') }}" style="width: 100%;padding: 20px 30px 0px 30px;">
        @csrf

<div class="form-group row">

    <div class="col-md-6 f-name-field">
        <input placeholder="{{ __('FIRST NAME') }}" id="fromFirstName" type="text" class="form-control{{ $errors->has('fromFirstName') ? ' is-invalid' : '' }}" name="fromFirstName" value="{{ old('fromFirstName') }}" autofocus>

        @if ($errors->has('fromFirstName'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('fromFirstName') }}</strong>
        </span>
        @endif
    </div>

    <div class="col-md-6 l-name-field">
        <input placeholder="{{ __('LAST NAME') }}" id="fromLastName" type="text" class="form-control{{ $errors->has('fromLastName') ? ' is-invalid' : '' }}" name="fromLastName" value="{{ old('fromLastName') }}" autofocus>

        @if ($errors->has('fromLastName'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('fromLastName') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <div class="col-md-12">
        <input placeholder="{{ __('EMAIL') }}" id="fromEmail" type="fromEmail" class="form-control{{ $errors->has('fromEmail') ? ' is-invalid' : '' }}" name="fromEmail" value="{{ old('fromEmail')}}" required>

        @if ($errors->has('fromEmail'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('fromEmail') }}</strong>
        </span>
        @endif
    </div>
</div>
<div class="form-group row">
    <div class="col-md-12">
        <input placeholder="{{ __('OFFICIAL CHARITY NAME') }}" id="messageSubject" type="text" class="form-control{{ $errors->has('messageSubject') ? ' is-invalid' : '' }}" name="messageSubject" value="{{ old('messageSubject') }}" required>

        @if ($errors->has('messageSubject'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('messageSubject') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <div class="col-md-12">
        <textarea style="resize: none;" placeholder="{{ __('ADDITIONAL INFORMATION') }}" id="messageBody" type="textarea" class="form-control{{ $errors->has('messageBody') ? ' is-invalid' : '' }}" name="messageBody" value="{{ old('messageBody') }}" required></textarea>

        @if ($errors->has('messageBody'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('messageBody') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <input style="display: none" type="text" id="neverFill" name="neverFill"/>
    <div class="col-md-12">
        <button type="submit" class="btn btn-primary btn-full hov-white">
            {{ __('Submit') }}
        </button>

    </div>
</div>
</form>
