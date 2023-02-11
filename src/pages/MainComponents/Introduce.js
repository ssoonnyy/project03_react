import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Introduce() {
  const navigate = useNavigate();
  return (
    <section className="company_introduce">
      <Breadcrumb>
        <Breadcrumb.Item
          onClick={() => {
            navigate("/project03_react");
          }}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Company Info</Breadcrumb.Item>
      </Breadcrumb>
      <img
        src={process.env.PUBLIC_URL + "/images/greeting_img.jpg"}
        alt="회사소개이미지"
      />
      <div className="introduce_container">
        <p className="introduce_top">Make your body Balanced.</p>
        <p className="introduce_mid">
          복지선진국 노르웨이에서 처음으로 레드코드를 경험했습니다. <br />
          <span style={{ color: "#BF1F1F" }}>
            “노르웨이 건강한 문화를 국내에도 보급하고 알려야겠구나”
          </span>
          하는 생각에서 시작이 되어 <br />
          지금까지 건강한 문화를 만들어 가고 있습니다.
        </p>

        <p className="introduce_bottom">
          저희 나아짐 코리아는 2004년 창립 이래 고객 요구에 보합하는
          재활의료장비를 지원하며 <br />
          다년간 전문컨설팅 노하우를 축척해 왔습니다. <br />
          <br />
          초심으로 전국 어느곳이든 철저한 사후관리 및 최상의 서비스를 약속
          드립니다. <br />
          <br />
          고객 여러분 말씀에 늘 귀를 기울이며 <br />
          다양한 제품과 전문 스텝진으로 성실하고 바른 기업이 되도록 최선을
          다하겠습니다.
          <br />
          <br />
          저희 나아짐코리아는 고객 한분 한분의 건강과 마음이 나아지는 행복한
          미래를 가꾸어 가는 아름다운 동반자가 되도록 꾸준히 노력하겠습니다.
          <br />
          감사합니다.
        </p>
      </div>
    </section>
  );
}
