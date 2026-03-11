import '@/styles/pages/_home.scss';
import { Button } from '@chakra-ui/react';

export default function Page() {
  return (
    <div id="page-home">
      
      <div id="hero">
        <img className='bg-element' src="/pages/home/hero-background.png" alt="" />
        <div className="wrapper">
          <div>
            <div className='hero-text'>
              <h1>Your Anime <br />Your Way</h1>
              <p>Arcadia is your home base for everything otaku. Where fans come together to celebrate what they love and find something new.</p>
              <div className="cta-container">
                <Button className='primary'>
                  Explore Arcadia
                </Button>
              </div>
              <div id='main-points'></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}