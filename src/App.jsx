import './App.css' 
import Footer from './layout_coponents/Footer.jsx'
import Header from './layout_coponents/Header.jsx'
import MainContent from './layout_coponents/MainContent.jsx'
import Content from './layout_coponents/Content';
import LeftNavigation from './layout_coponents/LeftNavigation';


export default function App() {
return (
  <div className="app">
    <Header className='primary'/>
    <MainContent className='terciary'>
      <LeftNavigation className='secondary '/>
      <Content className='terciary'/>
    </MainContent>
    <Footer className='secondary'/>
  </div>
  )
}
