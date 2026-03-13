import '@/styles/pages/_home.scss';
import { Button, Card } from '@chakra-ui/react';
import HeroSlider from '../components/pages/home/heroSlider';
import FadeIn from '@/components/animation/fadeIn';
import IconFeature from '@/components/iconFeature';
import { Blocks, Layers, LayoutTemplate, Link, TestTube, Webhook } from 'lucide-react';
import HomeCaseStudy from '@/components/pages/home/caseStudy';

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
                <a href="https://arcadia-platform.vercel.app" target="_blank">
                  <Button className='primary'>
                    Explore Arcadia
                  </Button>
                </a>
              </div>
              <div className='bg-arc-base-dark clr-txt-light p-a-md border-radius-md shadow'>
                <p><b>Latest Release - Alpha v0.4</b></p>
                <ul>
                  <li>- Linked account system to D2X</li>
                </ul>
              </div>
              <div id='main-points'></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      
      <div className='bg-gradient-one'>
        <section id='catchphrase' className='clr-txt-light'>
          <div className='wrapper'>
            <div id='part-one'>
              <div>
                <FadeIn direction='right'>
                  <img src="/pages/home/catchphrase-one.png" alt="" />
                </FadeIn>
              </div>
              <div className='center-v'>
                <h2>Your Otaku</h2>
              </div>
            </div>
            <div id='part-two'>
              <div className='center-b'>
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
        <section id='sponsor'>
          <img id='broken-circle' className='element' src="/assets/broken-circle.svg" alt="" />
          <div className='wrapper'>
            <div>
              <div id='sponsor-container'>
                <div className='sponsor-card'>
                  <img src="/sponsors/eagle-jump.png" alt="" />
                </div>
                <div className='sponsor-card'>
                  <img src="/sponsors/astral-express.png" alt="" />
                </div>
                <div className='sponsor-card'>
                  <img src="/sponsors/aniplex-white.svg" alt="" />
                </div>

                <div className='sponsor-card'>
                  <img src="/sponsors/fromsoft.png" alt="" />
                </div>
                <div className='sponsor-card'>
                  <img src="/sponsors/hoyoverse-white.png" alt="" />
                </div>
                <div className='sponsor-card'>
                  <img src="/sponsors/jc-staff.png" alt="" />
                </div>

                <div className='sponsor-card'>
                  <img src="/sponsors/myanimelist.svg" alt="" />
                </div>
                <div className='sponsor-card'>
                  <img src="/sponsors/nexon-white.png" alt="" />
                </div>
                <div className='sponsor-card'>
                  <img src="/sponsors/yostar-white.svg" alt="" />
                </div>
              </div>
              <div className='center-v'>
                <div className='text text--white'>
                  <p className='mini-title'>Arcadia Partners</p>
                  <h2>Industry Leaders <span className='clr-arc-highlight'>Collab</span> With Arcadia</h2>
                  <p>Anime Studios, Game Developers, and more collaborate with Arcadia to build something special. </p>
                  <p><b>Names used here are purely fictional for Arcadia/D2X world building. These companies do not sponsor or endorse Arcadia.</b></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='primary-apps'>
          <div className='wrapper'>
            <div>
              <div id='top-half'>
                <div className='text text--white'>
                  <p className='mini-title'>Arcadia Apps</p>
                  <h2>Essentials for the <span className='clr-arc-highlight'>Ultimate</span> Otaku</h2>
                  <p>Your all-in-one toolkit for tracking, streaming, gaming, and shopping. These flagship apps form the heart of your ultimate otaku experience.</p>
                </div>
                <FadeIn direction='left'>
                  <div id='miru-card' className='app-card bg-miru-base clr-txt-dark p-a-md shadow border-radius-md'>
                    <h3>Miru - みる [見る]</h3>
                    <p>The Ultimate Anime App</p>
                    <img src="/pages/home/apps/miru-mascots.png" alt="" />
                    <div className='circle bg-miru-dark'></div>
                  </div>
                </FadeIn>
              </div>

              <div id='bottom-half'>

                <div id='left-half'>
                  <FadeIn direction='right'>
                    <div id='yomu-card' className='app-card bg-yomu-base clr-txt-dark p-a-md shadow border-radius-md'>
                      <h3>Yomu - よる [読む]</h3>
                      <p>Stories that stay with you</p>
                      <div className='circle'></div>
                      <img src="/pages/home/apps/yomu-mascots.png" alt="" />
                      <div className='circle bg-yomu-dark'></div>
                    </div>
                  </FadeIn>
                  <FadeIn direction='right' delay={.3}>
                    <div id='asobu-card' className='app-card bg-asobu-base clr-txt-light p-a-md shadow border-radius-md'>
                      <h3>Asobu - あそぶ [遊ぶ]</h3>
                      <p>Gaming adventures begin here</p>
                      <div className='circle'></div>
                      <img src="/pages/home/apps/asobu-mascots.png" alt="" />
                      <div className='circle bg-asobu-dark'></div>
                    </div>
                  </FadeIn>
                </div>

                <div id='right-half'>
                  <FadeIn direction='left'>
                    <div id='kiku-card' className='app-card bg-kiku-base clr-txt-dark p-a-md shadow border-radius-md'>
                      <h3>Kiku - きく [聞く]</h3>
                      <p>Gaming adventures begin here</p>
                      <div className='circle'></div>
                      <img src="/pages/home/apps/kiku-mascots.png" alt="" />
                      <div className='circle bg-kiku-dark'></div>
                    </div>            
                  </FadeIn>
                  <FadeIn direction='left' delay={.4}>
                    <div id='iku-card' className='app-card bg-iku-base clr-txt-light p-a-md shadow border-radius-md'>
                      <h3>Iku - いく [行く]</h3>
                      <p>Make every meetup a adventure</p>
                      <div className='circle'></div>
                      <img src="/pages/home/apps/iku-mascots.png" alt="" />
                      <div className='circle bg-iku-dark'></div>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <section id='testimonials'>
        <div className='wrapper'>
          <div className='text text--half'>
            <p className='mini-title'>Arcadia Testimonials</p>
            <h2>Otakus Agree, Arcadia is a must for Fanatics</h2>
          </div>
          
          <div className='testimonial-container'>
            <Testimonial 
              id='keanu'
              person='Keanu Reaves'
              src='keanu.avif'
              description='I’ve been a fan of anime for years, and Arcadia feels like the ultimate place for fans. Their app Asobu makes modding games a breeze.'
            />
            <Testimonial 
              id='lebron'
              person='LeBron James'
              src='lebron.jpg'
              description='Arcadia is signature, just like my taco tuesdays. I’ve used Tsunagu and Shiru to finally understand what Bronny meant by “Diamond on Siege”.'
            />
            <Testimonial 
              id='aoba'
              flip
              person='Aoba'
              src='aoba.png'
              description='Arcadia allowed me to find my dream games from my favorite company. When I heard they were partnering up, I couldnt let the opporitunity slip. Thank you Team Arcadia!'
            />
            <Testimonial 
              id='jamaal'
              flip
              person='Jamaal Williams'
              src='jamaal.jpg'
              description='This is like the ultimate training ground for otaku. Everything you need: tracking, merch, community. All in one place.'
            />
          </div>
        </div>
      </section>

      {/* At a glance */}

      <div className='bg-gradient-one'>
        <section id='cc-highlight'>
          <div className='wrapper'>
            <FadeIn direction='right'>
              <img src="/pages/home/robin-splash.png" />
            </FadeIn>
            <div>
              <div className='text text--white'>
                <p className='mini-title'>Featured Content Creator</p>
                <h2>The Virtuoso of Penacony Steps onto the <span className='clr-arc-highlight'>Arcadian Stage</span></h2>
                <p>Known for her breathtaking performances that inspire harmony across worlds, Robin now streams exclusive concerts and creative sessions on Todokeru, connecting with fans through the universal language of music.</p>
                <p>Her arrival marks a new chapter in Arcadia’s creator ecosystem: where passion, art, and fandom intertwine to build something extraordinary.</p>
              </div>
            </div>
          </div>
        </section>

        <HomeCaseStudy />
      </div>

      <section id='stack'>
        <div className='wrapper'>
          <div id='technologies'>
            <div className='text'>
              <p className='mini-title'>Tech Ecosystem</p>
              <h2>Modern Tech Defines Arcardia</h2>
              <p>Arcadia is being built with the most reliable and trusted technologies on the market. The result: a robust and modern platform that hosts the best Otaku ecosystem there is.</p>
            </div>
            <div id='stack-container'>
              <div className='center-b'> 
                <img src="/pages/home/stack/next.png" alt="" />
              </div>
              <div className='center-b'> 
                <img src="/pages/home/stack/chakra.png" alt="" />
              </div>
              <div className='center-b'> 
                <img src="/pages/home/stack/zustand.svg" alt="" />
              </div>
              <div className='center-b'> 
                <img src="/pages/home/stack/python.png" alt="" />
              </div>
              <div className='center-b'> 
                <img src="/pages/home/stack/django.png" alt="" />
              </div>
              <div className='center-b'> 
                <img src="/pages/home/stack/graphql.png" alt="" />
              </div>
            </div>
          </div>
          <div id='tech-feats'>
            <div>
              <IconFeature 
                icon={Webhook}
                title='Flexible API'
                description='A combination of REST and Graphql allow for optimizated requests for otaku data.'
              />
              <IconFeature 
                icon={LayoutTemplate}
                title='Responive Platform'
                description='No matter the device, Arcadia aims to make its displays versitile for any device.'
              />
            </div>
            <div>
              <IconFeature 
                icon={Layers}
                title='Modular Architecture'
                description="Arcadia's foundation is through layered architecture, allowing for ease of integration and testing."
              />
              <IconFeature 
                icon={Link}
                title='D2X Integration'
                description='With D2X serving as the auth server, Arcadia allows for one account for all apps.'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='d2x'>
        <div className='wrapper'>
          <div className='text'>
            <p className='mini-title'>Who We Are</p>
            <h2>Born From Fandom, Forged With Passion</h2>
            <p>Team Double Dragon was forged upon passion: passion for Esports and passion for doing things the right way and for the right things.</p>
            <p>What started with what-ifs and no technical skill, Arcadia began with two friends, countless fandom debates, and a dream to build the otaku platform we always wished existed.</p>
            <a href="https://d2x-site.vercel.app" target='_blank'>
              <Button className='primary'>
                Visit D2X Today
              </Button>
            </a>
          </div>
          <div className='center-b'>
            <img src="/logos/d2x.svg" alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

function Testimonial( 
  {
    id, person, src, description, flip = false
  } : {
    id: string, person: string, src: string, description: string, flip?: boolean
}) {
  return (
    <div id={id} className={`testimonial ${flip && 'flip'}`}>
      <img className='border-radius-md shadow' src={`/pages/home/testimonials/${src}`} alt="" />
      <Card.Root className='p-a-lg shadow border-radius-md'>
        <Card.Body gap={2}>
          <Card.Title>{person}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
      </Card.Root>
    </div>
  )
}