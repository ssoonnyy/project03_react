import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Center() {
  const navigate = useNavigate()
  return(
    <>
      <section className="center_introduce">
        <Breadcrumb>
          <Breadcrumb.Item onClick={()=>{
            navigate("/project03_react");
          }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Center Info</Breadcrumb.Item>
         </Breadcrumb>
        <img src={process.env.PUBLIC_URL+"/images/centerIntroduce.jpg"} alt="센터소개" />
        <img src={process.env.PUBLIC_URL+"/images/centerIntroduce(1).jpg"} alt="센터강사소개" />
        <img src={process.env.PUBLIC_URL+"/images/centerIntroduce(2).jpg"}alt="센터강사소개" />
      </section>
    
    
    </>
  )
}