import './style/style.css'
import './style/main.scss'
import Slider from "react-slick";
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import hotitem from './hotitemDate'
import { pain } from './productDatabase';
import Paindetail from './Paindetail';


export default function Main() {

  const visualsettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay : true,
    autoplaySpeed : 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable : true,
    arrows : true,
    pauseOnHover : true,
    fade : true
  }

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows : true,
    draggable : true,
    centerPadding: 30
  };

  const [hots] = useState(hotitem);
  const [pains] = useState(pain)

  return(
    <>
      <Routes>
        <Route path='/project03_react' element={
          <div className='wrap'>
            <section className="visual_main">
              <Slider {...visualsettings}>
                <div>
                  <img src={process.env.PUBLIC_URL+'/images/16576741111.jpg'} alt="메인비쥬얼1" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL+'/images/16685816621.jpg'} alt="메인비쥬얼2" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL+'/images/16695931161.jpg'} alt="메인비쥬얼3" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL+'/images/16710667361.png'} alt="메인비쥬얼4" />
                </div>
              </Slider>
            </section>


            <section className='offline_programs'>
              <h3>센터 프로그램</h3>
              
              <div className='program_box'>
                <div className='program_box_top'>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program01.jpg'} alt="" />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program02.jpg'} alt="" />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program03.jpg'} alt="" />
                  </div>
                
                </div>
                <div className='program_box_bottom'>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program04.jpg'} alt="" />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program05.jpg'} alt="" />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program06.jpg'} alt="" />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL+'/images/program07.jpg'} alt="" />
                  </div>
                </div>

              </div>
          

            </section>


            <section className='hot_item'>
              <h3>인기상품</h3>
              <Slider {...productsettings}>
                {
                  hots.map((hot,i)=>{
                    return(
                      <div className='product'>
                        <Link to={`/detail/${i}`}>
                          <div className='product_img'>
                            <img src={hot.image} alt="인기상품" />
                          </div>
                          <div className='product_info'>
                            <p className='product_title'>{hot.title}</p>
                            <p className='product_desc'>{hot.desc}</p>
                            <p className='product_price'>
                              {(hot.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            </p>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </Slider>
            </section>


            <section className='category'>
              <h3>상품 카테고리</h3>
              <ul id='category_tap'>
                <li>통증</li>
                <li>움직임</li>
                <li>퍼포먼스</li>
                <li>재활필라테스</li>
                <li>근막&마사지</li>
                <li>운동밴드</li>
                <li>요가매트</li>
                <li>보호대</li>
              </ul>
        
              <Slider {...productsettings} id='category_sheet'>
                {
                  pains.map((pain,l)=>{
                    return(
                      <div className='product'>
                        <Link to={`/paindetail/${l}`}>
                          <div className='product_img'>
                            <img src={pain.image} alt="인기상품" />
                          </div>
                          <div className='product_info'>
                            <p className='product_title'>{pain.title}</p>
                            <p className='product_desc'>{pain.desc}</p>
                            <p className='product_price'>
                              {(pain.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            </p>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </Slider>
            </section>
            
            <section className='instar'>
                <div className='instar_ani'>
                  <img src={process.env.PUBLIC_URL+'/images/instar01.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar02.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar03.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar04.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar05.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar06.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar07.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar08.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar01.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar02.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar03.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar04.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar05.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar06.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar07.jpg'} alt="" />
                  <img src={process.env.PUBLIC_URL+'/images/instar08.jpg'} alt="" />
                </div>
            </section>
            

          </div>
        }>
        </Route>
            

        <Route path="/detail/:id" element={<Details hots={hots} />} />
        <Route path="/paindetail/:id" element={<Paindetail pains={pains} />} />
      </Routes>
    </>

  )
}


