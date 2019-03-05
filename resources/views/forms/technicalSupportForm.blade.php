<form id="technicalSupportForm" name="technicalSupportForm" method="POST" action="{{ route('TechnicalSupport') }}" aria-label="{{ __('TechnicalSupport') }}" style="width: 100%;padding: 30px;">
        @csrf
<div class="form-group row">

    <div class="col-md-6 f-name-field">
        <input placeholder="{{ __('First Name') }}" id="fromFirstNameT" type="text" class="form-control{{ $errors->has('fromFirstName') ? ' is-invalid' : '' }}" name="fromFirstName" value="{{ old('fromFirstName') }}" autofocus>

        @if ($errors->has('fromFirstName'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('fromFirstName') }}</strong>
        </span>
        @endif
    </div>

    <div class="col-md-6 l-name-field">
        <input placeholder="{{ __('Last Name') }}" id="fromLastNameT" type="text" class="form-control{{ $errors->has('fromLastName') ? ' is-invalid' : '' }}" name="fromLastName" value="{{ old('fromLastName') }}" autofocus>

        @if ($errors->has('fromLastName'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('fromLastName') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <div class="col-md-12">
        <input placeholder="{{ __('Email') }}" id="fromEmailT" type="email" class="form-control{{ $errors->has('fromEmail') ? ' is-invalid' : '' }}" name="fromEmail" value="{{ old('fromEmail')}}" required>

        @if ($errors->has('fromEmail'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('fromEmail') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <div class="col-md-12">
        <input placeholder="{{ __('Subject') }}" id="messageSubjectT" type="text" class="form-control{{ $errors->has('messageSubject') ? ' is-invalid' : '' }}" name="messageSubject" value="{{ old('messageSubject') }}" required>

        @if ($errors->has('messageSubject'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('messageSubject') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <div class="col-md-12">
        <textarea style="resize: none;" placeholder="{{ __('Message') }}" id="messageBodyT" type="textarea" class="form-control{{ $errors->has('messageBody') ? ' is-invalid' : '' }}" name="messageBody" value="{{ old('messageBody') }}" required></textarea>

        @if ($errors->has('messageBody'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('messageBody') }}</strong>
        </span>
        @endif
    </div>
</div>

<div class="form-group row">
    <div class="col-md-12">
        <button type="submit" class="btn btn-primary btn-full hov-white">
            {{ __('Submit') }}
        </button>

    </div>
</div>
</form>
