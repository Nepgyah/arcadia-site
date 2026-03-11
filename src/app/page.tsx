import '@/styles/pages/_home.scss';
import { Button } from '@chakra-ui/react';
import HeroSlider from './heroSlider';
import FadeIn from '@/components/animation/fadeIn';

export default function Page() {
  return (
    <div id="page-home">
      
      <div id="hero">
        <img className='bg' src="/pages/home/hero-background.png" alt="" />
        <div className='mask'></div>
        <img id='furina' className='element desktop-only' src="/pages/home/queen_one.png" alt="" />
        <div className="wrapper">
          <div>
            <div className='hero-text'>
              <h1>Your <HeroSlider /> <br />Your Way</h1>
              <p>Arcadia is your home base for everything otaku. Where fans come together to celebrate what they love and find something new.</p>
              <div className="cta-container">
                <Button className='primary'>
                  Explore Arcadia
                </Button>
              </div>
              <div className='bg-arc-base-dark clr-txt-light p-a-md border-radius-md shadow'>
                <p>Arcadia Server Status</p>
              </div>
              <div id='main-points'></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      
      <section id='catchphrase' className='bg-arc-accent clr-txt-light'>
        <div className='wrapper'>
          <div id='part-one'>
            <div>
              <FadeIn direction='right'>
                <img src="/pages/home/catchphrase-one.png" alt="" />
              </FadeIn>
            </div>
            <div>
              <h2>Your Otaku</h2>
            </div>
          </div>
          <div id='part-two'>
            <div>
              <h2 className='clr-arc-highlight'>Sanctuary</h2>
            </div>
            <div>
              <FadeIn direction='left'>
                <img src="/pages/home/catchphrase-two.png" alt="" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}