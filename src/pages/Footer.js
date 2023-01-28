import './style/footer.scss'
import {Routes, Route, Link} from 'react-router-dom'

export default function Footer() {


  return(
    <>
      <footer>
        <nav className='footer_nav'>
          <ul>
            <li><Link to='/'>홈</Link></li>
            <li><Link to='/'>회사소개</Link></li>
            <li><Link to='/'>이용약관</Link></li>
            <li><Link to='/'>개인정보처리방침</Link></li>
            <li><Link to='/'>이용안내</Link></li>
            <li><Link to='/'>고객센터</Link></li>
          </ul>
        </nav>
        <div className="footer_info_box">
          <nav className='footer_info_left'>
            <ul>
              <li>상호명 : ㈜나아짐 코리아</li>
              <li>대표명 : 신상윤</li>
              <li>사업자 등록번호 : 456-86-01389 [사업자등록확인]</li>
              <li>통신판매신고 : 2019-부산해운대-0022</li>
            </ul>
            <ul>
              <li>부산 해운대구 마린시티2로2 마린파크 1313호</li>
              <li>TEL : 1600-0137 / FAX : 051-624-0589</li>
              <li>Copyrightⓒnaagymkorea.com All right reserved</li>
            </ul>
          </nav>
          
          <nav className='footer_info_right'>
            <ul>
              <strong>CUSTOMER CENTER</strong>
              <li>051-624-0588</li>
              <li>평일 09 : 00 ~ 18 : 00</li>
              <li>토요일/일요일 공휴일 휴무</li>
            </ul>

            <ul>
              <strong>BANK INFO</strong>
              <li>우리은행</li>
              <li>1005-303-604847</li>
              <li>예금주 : ㈜나아짐코리아</li>
            </ul>
          </nav>

        </div>

      </footer>


      <Routes>
        <Route path='/' />
      </Routes>


      
    </>
  )
}