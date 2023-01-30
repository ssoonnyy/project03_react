import Slider from "react-slick";

export default function VisualMain() {  
  const visualsettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    pauseOnHover: true,
    fade: true,
  };

  return(
    <>
      <section className="visual_main">
          <Slider {...visualsettings}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/16576741111.jpg"}
                alt="메인비쥬얼1"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/16685816621.jpg"}
                alt="메인비쥬얼2"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/16695931161.jpg"}
                alt="메인비쥬얼3"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/16710667361.png"}
                alt="메인비쥬얼4"
              />
            </div>
          </Slider>
      </section>
      
      <section className="offline_programs">
        <h3>센터 프로그램</h3>
        <div className="program_box">
          <div className="program_box_top">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program01.jpg"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program02.jpg"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program03.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="program_box_bottom">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program04.jpg"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program05.jpg"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program06.jpg"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/program07.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}