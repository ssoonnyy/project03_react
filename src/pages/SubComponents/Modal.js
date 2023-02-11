import { useNavigate } from "react-router-dom";

function ModalPopup(props) {
  const { setModalPopup, type, link } = props;
  const navigate = useNavigate();

  return (
    <div className="cartPopup_alert">
      <header className="cartPopup_header">
        <span>알림</span>
        <span
          className="popup_close"
          onClick={() => {
            setModalPopup(false);
          }}
        ></span>
      </header>
      <div className="cartpopup_main">
        <p>{type}에 추가되었습니다.</p>
      </div>
      <div className="cartpopup_btnbox">
        <button
          onClick={() => {
            setModalPopup(false);
          }}
        >
          Shop more
        </button>
        <button
          onClick={() => {
            navigate(link);
          }}
        >
          Go {type}
        </button>
      </div>
    </div>
  );
}

export default ModalPopup;
