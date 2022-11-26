import React from 'react';
import ReactDom from "react-dom";
import './index.css'
import About from './About.jsx'

ReactDom.render(
    <>
    <section class="sticky-top">
     <nav class="navbar navbar-expand-lg navbar-light bg-light ">
         <div className='row '>
 
       <div className='col-md-6'>
       <img src='image/logo.png' className='img'></img>
       </div>
       
       <div class="collapse navbar-collapse col-md-5" id="navbarSupportedContent">
      <div class="d-none d-md-block input"><input type="text"  placeholder="search" class="p-1 icon" /></div>
         <ul class="navbar-nav mr-auto ml-auto icon ">
           <li class="nav-item text-uppercase mt-2  icon1"><i class="bi bi-house-door-fill h4"></i></li>	  
           <li class="nav-item text-uppercase mt-2  icon1"><i class="bi bi-chat-heart h4 "></i></li>	  
           <li class="nav-item text-uppercase mt-2  icon1"><i class="bi bi-plus-square-fill h4"></i></li>	  
           <li class="nav-item text-uppercase mt-2  icon1"><i class="bi bi-compass h4"></i></li>	  
           <li class="nav-item text-uppercase mt-2  icon1"><i class="bi bi-suit-heart h4 "></i></li>
           <li class="nav-item text-uppercase icon"><img src='image/swap.jpg ' className='pawar'></img></li>
         </ul>
         
     </div>
     
    </div>
     </nav>
 </section>
 
 
 <section className='p-2'>
     <div className='contaneir'>
         <div className='row justify-content-center'>
             <div className='col-md-6 p-2 border hed_div m-3'>
             <img class="d-inline-block rounded-circle hed_img  " src="image/swap.jpg" alt="First slide"/>
             <img class="d-inline-block rounded-circle hed_img  " src="image/roshan.jpg" alt="First slide"/>
             <img class="d-inline-block rounded-circle hed_img  " src="image/travel.jpg" alt="First slide"/>
             <img class="d-inline-block rounded-circle hed_img  " src="image/taniya.jpg" alt="First slide"/>
             <img class="d-inline-block rounded-circle hed_img  " src="image/barkha.jpg" alt="First slide"/>
             <img class="d-inline-block d-none d-md-inline-block rounded-circle hed_img  " src="image/photo.jpg" alt="First slide"/>
             <img class="d-inline-block d-none d-md-inline-block rounded-circle hed_img  " src="image/model.jpg" alt="First slide"/>
             <img class="d-inline-block d-none d-md-inline-block rounded-circle hed_img  " src="image/sushal.jpg" alt="First slide"/>
             {/* <img class="d-inline-block d-none d-md-inline-block rounded-circle hed_img  " src="image/shrusti.jpg" alt="First slide"/> */}
             </div>
 
             {/* <div className='col-md-2 mt-4'>
                 <img class="d-block rounded-circle hed_img  " src="image/pawar.jpg" alt="First slide"/>
                 <h6 className='mt-4 '>SwapnilPawar82</h6>
             </div>
              */}
 
 
 
                 <div className='col-md-6 border hed_div '>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/swap.jpg'></img><span className='p-2'>Swapnil_010_</span>
                          <p className='location'>Jamkhed, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/swapnil.jpg' className='w-100 '></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>66,926 likes</h6>
                          <img src='image/model.jpg' className='logo'></img><span className='p-2'>traveling_with_nidhi Nice pic</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
             <div className='col-md-6 border hed_div m-3'>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/model.jpg'></img><span className='p-2'>traveling_with_nidhi</span>
                          <p className='location'>Delhi, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/cluture.jpg' className='w-100'></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>66,926 likes</h6>
                          <img src='image/swap.jpg' className='logo'></img><span className='p-2'>Pawar_Swapnil nice pic</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
             <div className='col-md-6 border hed_div m-3'>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/barkha.jpg'></img><span className='p-2'>barkhasingh0308</span>
                          <p className='location'>Mumbai, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/bar.jpg' className='w-100'></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>66,926 likes</h6>
                          <img src='image/swap.jpg' className='logo'></img><span className='p-2'>Pawar_Swapnil Looking pretty  ❤️❤️❤️❤️</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
 
             <div className='col-md-6 border hed_div m-3'>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/roshan.jpg'></img><span className='p-2'>roshagulla</span>
                          <p className='location'>Mumbai, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/r.jpg' className='w-100'></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>66,926 likes</h6>
                          <img src='image/swap.jpg' className='logo'></img><span className='p-2'>Pawar_Swapnil Looking Good ❤️❤️❤️❤️</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
             <div className='col-md-6 border hed_div m-3'>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/om.jpg'></img><span className='p-2'>omkar_madake_96k</span>
                          <p className='location'>Bharashiv, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/om.jpg' className='w-100'></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>926 likes</h6>
                          <img src='image/swap.jpg' className='logo'></img><span className='p-2'>Pawar_Swapnil_Nice</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
             <div className='col-md-6 border hed_div m-3'>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/taniya.jpg'></img><span className='p-2'>tanyakhanijow</span>
                          <p className='location'>Guargon, Noida</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/taniya2.jpg' className='w-100'></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>66,926 likes</h6>
                          <img src='image/swap.jpg' className='logo'></img><span className='p-2'>Pawar_Swapnil Looking pretty  ❤️❤️❤️❤️</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
 
 
             <div className='col-md-6 border hed_div m-3'>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/travel.jpg'></img><span className='p-2'>himalayantales</span>
                          <p className='location'>Pune, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          <img src='image/nature.jpg' className='w-100'></img>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>89,926 likes</h6>
                          <img src='image/swap.jpg' className='logo'></img><span className='p-2'>Pawar_Swapnil_Nice Place</span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
             <div className='col-md-6 border hed_div '>
                  <div className='row'>
                      <div className='col-md-12 p-3'>
                          <img className='rounded-circle logo' src='image/pawar.jpg'></img><span className='p-2'>Swapnil_010_</span>
                          <p className='location'>Jamkhed, Maharashtra</p>
                      </div>
                      <div className='col-md-12'>
                          {/* <video src='image/reel.mp4' className='w-100' autoPlay=''></video> */}
                          <video src='image/reel.mp4' autoPlay='4' playsinline="" className='w-100'  ></video>
                      </div>
 
                      <div className='col-md-11 '>
                      <ul className='mr-auto ml-auto'>
                          <li className='d-inline-block p-2'><i class="bi bi-suit-heart h3  "></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-chat h3"></i></li>
                          <li className='d-inline-block p-2'><i class="bi bi-cursor h2"></i></li>
                          <h6>66,926 likes</h6>
                          <img src='image/model.jpg' className='logo'></img><span className='p-2'>traveling_with_nidhi Nice </span>
                          <p className='p-3'><span>2 h2 </span><span> likes</span> Reply</p>
                      </ul>
                      
                      </div>
                      <div className='col-md-1 p-2'>
                      <i class="bi bi-bookmark h3 d-none d-md-block"></i>
                      </div>
                  </div>
             </div>
 
 
         </div>         
     </div>
 </section>
 
 
 
    </>,document.getElementById('root')
 );
 export default About;