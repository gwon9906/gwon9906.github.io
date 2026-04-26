// App.tsx에 아래 import를 추가하세요.
import AckertonResume from './components/AckertonResume';
import AckertonPortfolio from './components/AckertonPortfolio';

// App() 내부 state에 아래 2개를 추가하세요.
const [showAckertonResume, setShowAckertonResume] = useState(false);
const [showAckertonPortfolio, setShowAckertonPortfolio] = useState(false);

// handleHashChange() 내부에 아래 2개를 추가하세요.
setShowAckertonResume(hash === '#ackerton-resume');
setShowAckertonPortfolio(hash === '#ackerton-portfolio' || hash === '#ackerton');

// return 내부 분기에서 NaverLabsResume보다 위쪽 또는 같은 레벨에 아래 분기를 추가하세요.
{showAckertonResume ? (
  <div className="min-h-screen">
    <AckertonResume />
  </div>
) : showAckertonPortfolio ? (
  <div className="min-h-screen">
    <AckertonPortfolio />
  </div>
) : showNaverLabsResume ? (
  // 기존 분기 유지
  <div className="min-h-screen">
    <NaverLabsResume />
  </div>
) : null}
