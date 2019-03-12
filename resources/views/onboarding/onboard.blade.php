@extends('layouts.app')
@section('content')
@push('style')

<link href="{{ asset('css/boardal.css') }}" rel="stylesheet">
@endpush
<main v-cloak>
  <p><button class="accent" style="display:none;" id="onboard" @click="toggleModal()"></button></p>

  <!--  The Modal -->
  <boardal v-if="modal.isOpen" :has-mask="modal.hasMask" :can-click-mask="modal.canClickMask" :has-x="modal.hasX" @toggle="toggleModal">
    <article v-cloak>
      <section>
          <p class="primary skip" @click="toggleModal">SKIP</p>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
      <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-1.png') }}">
        <h3>Let's get started!</h3>
        <p>How can you help your favourite charities without opening your wallet? It's simple. All you have to do is lend your computer's power to generate real value for the charity of your choice. The following tutorial will walk you through the steps to start making a difference today. It is that easy.</p>
<!--         <p><label><input type="checkbox" v-model="xray" :true-value="'visible'" :false-value="'hidden'" /> X-ray Vision</label></p> -->
      </section>
      <section>
          <p class="primary skip" @click="toggleModal">SKIP</p>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
          <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-2.png') }}">
        <h3>Login to your account</h3>
        <p>Create an account to track how much you are donating, what charities you are donating to, and what your top charities are.</p>
      </section>
      <section>
          <p class="primary skip" @click="toggleModal">SKIP</p>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
          <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-3.png') }}">
        <h3>Choose your Charity</h3>
        <p>Choose from a number of charities that do amazing work in Guelph and Wellington County each and everyday.
        You will find a variety of charities from different industries across the county.
        Choosing just one will be difficult, so why not help them all?</p>

      </section>
      <section>
          <p class="primary skip" @click="toggleModal">SKIP</p>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
          <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-4.png') }}">
        <h3>Start Donating</h3>
        <p>You've now selected your charity and are ready to start giving back.
        On the charity page you will find a brief write-up on what the charity stands for and what they are trying to accomplish.
        You will also find links to their social media, a direct donation link and stats of how much people have donated to date.</p>
      </section>
      <section>
          <p class="primary skip" @click="toggleModal">SKIP</p>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
          <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-5.png') }}">
        <h3>Select Your CPU Power</h3>
        <p>Next, set the amount of processing power you would like to donate. Basically, the more processor
        power you donate, the more algorithms get solved, which is then translated into digital currency
        that is then converted into real money. Helping your charity continue
        to do good in their community.</p>
      </section>
      <section>
          <p class="primary skip" @click="toggleModal">SKIP</p>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
          <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-6.png') }}">
        <h3>Accept and Get Started</h3>
        <p>We want to make sure you fully understand the full process donateABLE uses. To do this after you click the Start button to begin donating you will get a pop-up stating 'By accepting you are agreeing
        to allow donateABLE to use your processor to complete complex algorithms. Nothing is installed on your system during this process.'</p>
      </section>
      <section>
          <img class="logo" src="{{ asset('img/logo/donateABLE-long-white-500.png') }}">
          <img class="onboard" src="{{ asset('img/onboard/Asset-Onboard-Flow-7.png') }}">
        <h3>Leave Tab Open and Keep Browsing</h3>
        <p>As long as you keep the donateABLE tab running in your browser you will be able to continue on
        with your computer usage as normal. As soon as the tab is closed your donation will end. Going away or not using your computer? Turn the CPU usage up and donate all day,
        everyday. Every second of your donation makes a difference.</p>
      </section>
    </article>
    <footer>
      <div class="forward-actions">

      </div>
      <div class="step-controls">
      <div class="step-dots" v-if="hasDots">
        <div class="step-dot" v-for="n in max" :class="{active: n == step}" @click="goToStep(n)"></div>
        </div>
        <button class="primary" @click="skip(1)" :disabled="isLastStep" v-show="!isLastStep">Next</button>
        <button class="primary" @click="toggleModal" :disabled="!isLastStep" v-show="isLastStep">Finish</button>
    </div>
      <div class="back-actions">
        <!-- <button class="secondary cancel prev" :disabled="isFirstStep" xv-show="!isFirstStep" @click="skip(-1)"><i class="fa fa-fw fa-lg" :class="backIcon"></i></button> -->

      </div>
    </footer>
  </boardal>
</main>
@endsection
