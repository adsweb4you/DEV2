@if(!$carts->isEmpty())

@php
function discount($prods){

//პროცენტი
$percentage =  $prods->price;
$totalWidth = $prods->oldprice;
if ($totalWidth) {
$new_width =   ($percentage/$totalWidth)*100;

$pro = number_format($new_width); 
$subpro = 100 - $pro;
}else{
 $subpro = null;
}
return $subpro;
}
$sis = 0;

$pric = 0;
$oldpric = 0;
//კალათაში ტიპის შემოწმება
$delycheck = $carts->where('vauch_type', 2)->count();

@endphp



<section class="my-cart">
<div class="container">
   <div class="row position-relative justify-content-between align-items-start">
       <div class="cart-table pl-16px pl-md-80px pl-4px pl-md-56px pt-16px pt-md-32px pb-64px bg-white  col-lg-8">
         <button data-id="" class="btn  btn-remove-all d-flex align-items-center pr-12px pr-md-24px mb-12px ml-auto">
             <span class="font-size-16 ubuntu-regular text-light-gray d-flex mr-14px">Delete all</span>
             <img src="{{asset('icons/remove.svg')}}" alt="">
         </button>
         <div class="scroll-box pr-12px pr-md-24px">

         @foreach($carts as $cart)

         @php
          $si = discount($cart->product);
 
          @endphp
          
    <div class="cart-item d-flex justify-content-between">
                 <div class="cart-product d-flex align-items-center">
                     <div class="cart-checkbox mr-md-16px">
                         <div class="custom-control custom-checkbox ">
                             <input type="checkbox" class="custom-control-input"
                                 id="id-1{{$cart->id}}">
                             <label class="custom-control-label" for="id-1{{$cart->id}}"></label>
                         </div>
                     </div>
                   <div class="cart-img mr-30px" onclick="window.location.href='{{url('detals/'.$cart->product->id)}}'"><img src="{{url('img/'.$cart->product->poster)}}"
                           alt=""></div>
                   <div class="cart-pr-info" onclick="window.location.href='{{url('detals/'.$cart->product->id)}}'">
                       <div class="product-info">
                           <div class="pr-prices d-flex align-items-center">
                               <div class="price font-size-18 font-size-md-30 font-bold text-primary-title mr-12px"> 
                                 {{$cart->product->price}} ₾
                               </div>
                                <div class="old-price font-size-23 font-base text-light-gray">  @if($cart->product->sale)   {{$cart->product->oldprice}} ₾ @endif
                               </div>
                           </div>
                           <div class="pr-name font-base font-size-18 font-size-md-20 line-height-16 text-primary-title">
                             {{$cart->product->name}}</div>
                           <div class="pr-decr clamp _1 font-size-14 font-base text-light-text">{{$cart->product->note}}</div>
                           <p class="text-main-color">{{ $cart->vauch_type == 1 ? "ვაუჩერი" : "ვაუჩერი + პროდუქტი" }}</p>
                       </div>
                   </div>
               </div>
               <div class="cart-actions d-flex align-items-center">
                   <div class="pr-qnt-box mr-16px">
                       <div class="w-100 d-flex align-items-center justify-content-between rangs"   data-id="{{$cart->product->id}}" data-vauch="{{$cart->vauch_type}}">
                           <span  data-type="0" data-prods="{{$cart->product->id}}" class="mencarts minus_ cursor-p ">
                               <img src="{{asset('icons/minus.svg')}}" alt="">
                           </span>
                           <div class="">
                               <input class="font-size-20 innc{{$cart->product->id}} noinc font-bold qnt-input text-center bg-transparent"
                                   type="text"   value="{{$cart->count}}" min="50" max="500" />
                           </div>
                           <span class="mencarts plus_ cursor-p " data-prods="{{$cart->product->id}}"  data-type="1" >
                               <img src="{{asset('icons/plus.svg')}}" alt="">
                           </span>
                       </div>

                   </div>
                   <button data-id="{{$cart->id}}" class="btn  btn-removecart remove-cart p-0">
                       <img src="{{asset('icons/remove.svg')}}" alt="">
                   </button>
               </div>
           </div>
           @php  
           $pric += $cart->product->price;
           $oldpric += $cart->product->oldprice;
           @endphp

           @if($si)                                 
           <?php $sis += $si  ?>
           @endif

           @endforeach

       </div>
       @php $proc = ($pric/$oldpric)*100; 
       
       $pro1 = number_format($proc); 
       $subproc = 100 - $pro1;
       @endphp
  

       <div class="checkout-box sticky px-16px px-md-48px pt-32px pt-md-64px pb-80px bg-white col-lg-4">
           <div class="font-size-18 ubuntu-regular bg-main-transparent text-main-color border-radius-xs py-12px text-center clamp _1">
             @if($subproc)                                 
             {{$subproc}}  %  You save in total
             @endif
           </div>
           <div class="my-24px">
               <span class="font-size-24 ubuntu-medium  text-dark-gray">{{$carts->count()}} items</span>
               <span class="font-size-24 ubuntu-regular  text-dark-gray">selected</span>
           </div>
           @foreach($carts as $cart)
           <div class="checkout-item d-flex justify-content-between align-items-center mb-20px">
               <div class="checkout-pr-name font-size-16 ubuntu-regular text-primary-title flex-shrink text-truncate">{{$cart->product->name}}
               <small class="d-block text-main-color">{{ $cart->vauch_type == 1 ? "ვაუჩერი" : "ვაუჩერი + პროდუქტი" }}</small>
               </div>
               <div class="line"></div>
               <div class="font-size-16 ubuntu-regular text-light-text">{{$cart->cost}}</div>
               
           </div>
           @endforeach

           @if($delycheck >= 1)
            <div class="vouchers-box  mb-17px">
                         <select class="vouchers-select pull-leftt" name="delys">
                             <option value="" class="pull-left"  selected>აირჩიეთ მიწოდების ფორმა ~</option>
                             <option value="8" class="pull-left">თბილისი სწრაფი მიწოდება 24 საათში ~₾ 8</option>
                             <option value="5" class="pull-left">თბილისი  მიწოდება 2-5 სამუშაო დღე ~₾ 5</option> 
                             <option value="10" class="pull-left">რეგიონებში 5-7 სამუშაო ~₾ 10</option>
                             <!-- <option value="7" class="pull-left">ობიექტიდან გატანა ~₾0.0</option> -->
                         </select>
             </div>
             
         <div class="total-price d-none justify-content-between align-items-center mt-28px">
             <div class="font-size-16 ubuntu-regular text-light-text">ადგილზე მიტანა</div>
             <div class="font-size-30 ubuntu-medium  text-dark-gray cartdely">  </div>
         </div>
          <input type="hidden" value="{{$sumcost}}" id="checksum">
          <input type="hidden" value="1" id="ifhasdely">
          @endif
 
           <div class="total-price d-flex justify-content-between align-items-center mt-28px">
               <div class="font-size-16 ubuntu-regular text-primary-title">Total price</div>
               <div class="font-size-30 ubuntu-medium  text-dark-gray outputsum">{{$sumcost}} ₾</div>
           </div>
           <form action="{{url('/checkout')}}" method="GET" class="checlform">
           <input type="hidden" value="" name="delytype">
           <button   class="btn bg-main-color w-100 py-14px text-white font-size-16 ubuntu-medium border-radius-x mt-48px">Checkout</button>
           </form>
       </div>
   </div>
</div>
</section>



@else

<script type="text/javascript">
location.reload();
</script>

@endif
