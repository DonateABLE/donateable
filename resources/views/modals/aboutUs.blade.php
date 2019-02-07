<!-- How it works modal -->
<div class="modal fade" id="aboutUsModal" tabindex="-1" role="dialog" aria-labelledby="aboutUsModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" id="howitworksdialog" role="document">
    <div class="modal-content howitworks" id="howitworkscontent">
      <div class="modal-header align">
          <div class="align-img" style="padding-top:25px;">
            <img src="{{asset('img/logo/donateABLE-long-white-500.png')}}" style="width:400px;height: auto;"/>
        </div>
            <button style="align-self: flex-start;"type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="modal-x" aria-hidden="true">X</span>
            </button>
      </div>
      <div class="modal-body">
          <div class="site-callout">

                  <h1 class="modal-h1">The Who, What & and Whys of donateABLE</h1>
                  <h2 class="modal-h2">The newest and easiest way to donate</h2>

          </div>
          <div class="step-container">
              <div class="step">
                  <img src="{{asset('img/aboutus/About-Us-WHO.png')}}" alt="Who" style="width:250px;height: auto;"/>
                  <h3 class="modal-h3" style="width: 350px;height:60px;text-align:center;">Is donateABLE developed by?</h3>
                  <p class="modal-p">donateABLE is designed, developed, and managed by Synergenics, a professional IT support and solutions provider to Guelph and Southwestern Ontario. Synergenics has been a committed full service solutions  provider  for  individuals  and  businesses  alike  since  1989.  Their  30  years  of  service  has  allowed  them  to  build  relationships  with  many  companies in a variety of different industries, but some  of  their  most  charished  relationships  are  with local Guelph charities and organizations.</p>
              </div>
              <div class="step">
                  <img src="{{asset('img/aboutus/About-Us-WHAT.png')}}" alt="What" style="width:250px;height: auto;"/>
                  <h3 class="modal-h3" style="width: 350px;height:60px;text-align:center;">Is donateABLE?</h3>
                  <p class="modal-p">donateABLE  is  a  website  project  developed  and  managed  by  Synergenics.  This  solution  will  take  small  amounts  of  computational  power  donated  from individuals and pool it together into a larger resource to generate real monetary value for your charity. This website is going to allow anyone with a computer to make a difference no matter what their  financial  situation  is,  by  donating  unused  computer time.</p>
              </div>
              <div class="step">
                  <img src="{{asset('img/aboutus/About-Us-WHY.png')}}" alt="Why" style="width:250px;height: auto;"/>
                  <h3 class="modal-h3" style="width: 350px;height:60px;text-align:center;">Was donateABLE developed?</h3>
                  <p class="modal-p">Synergenics  has  consistently  made  an  effort,  for  the past 30 years, to give back to their local community in any way they can. They have done this by  providing  discounted  IT  support,  sponsoring  local youth organizations, and donating and sponsoring local golf tournaments. Now they are com-bining  their  passion  and  knowledge  in  the  IT  world with their passion of giving back to create a solution that makes a difference.</p>
              </div>
          </div>

          <div class="modal-button-wrap" style="margin-top:20px">
          <button style="align-self: center" data-dismiss="modal" class="btn btn-primary modal-button">
              {{ __('Learn how donateABLE works') }}
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
