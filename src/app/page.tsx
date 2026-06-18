import '@/styles/pages/_home.scss';
import { Button, Card } from '@chakra-ui/react';
import HeroSlider from '../components/pages/home/heroSlider';
import FadeIn from '@/components/animation/fadeIn';
import IconFeature from '@/components/iconFeature';
import { Blocks, Book, Building2, Cpu, Earth, Gamepad2, Heart, Layers, LayoutTemplate, Link, Map, Mic2, Music, Sprout, TestTube, Ticket, Tv, Users, UsersRound, Webhook } from 'lucide-react';
import HomeCaseStudy from '@/components/pages/home/caseStudy';
import { Tooltip } from '@/components/ui/tooltip';

export default function Page() {
  return (
    <div id="page-home">
      
      <div id="hero">
        <img className='bg' src="/pages/home/hero-background.jpg" alt="" />
        <div className='mask'></div>
        <div className='collaboration desktop bg-arc-base-dark clr-txt-light p-a-md shadow'>
          <p>In collaboration with:</p>
          <div className='m-t-sm'>
            <img src="/pages/home/hero/collaboration/adventure-guild.png" alt="" />
            <img src="/pages/home/hero/collaboration/astral-express.png" alt="" />
            <img src="/pages/home/hero/collaboration/endfield-industries.png" alt="" />
            <img src="/pages/home/hero/collaboration/schale.webp" alt="" />
          </div>
        </div>
        <img id='queens' className='element desktop-only' src="/pages/home/queens.png" alt="" />
        <div className="wrapper">
          <div>
            <div className='hero-text'>
              <h1>Your <HeroSlider /> <br />Your Way</h1>
              {/* <p>Arcadia is your home base for everything otaku. Where fans come together to celebrate what they love and find something new.</p> */}
              <div className="button-container">
                <a href="https://arcadia-platform.vercel.app" target="_blank">
                  <Button className='primary'>
                    Enter Arcadia
                  </Button>
                </a>
                <a href="#primary-apps">
                  <Button className='secondary'>
                    Explore Apps
                  </Button>
                </a>
              </div>
              <div className='collaboration mobile bg-arc-base-dark clr-txt-light p-a-md shadow'>
                <p>In collaboration with:</p>
                <div className='m-t-sm'>
                  <img src="/pages/home/hero/collaboration/adventure-guild.png" alt="" />
                  <img src="/pages/home/hero/collaboration/astral-express.png" alt="" />
                  <img src="/pages/home/hero/collaboration/endfield-industries.png" alt="" />
                  <img src="/pages/home/hero/collaboration/schale.webp" alt="" />
                </div>
              </div>
              <div id='main-points'></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      
      <div className='bg-gradient-one'>
        <section id='catchphrase' className='clr-txt-light'>
          <img id='catchphrase-line-one' className='element' src="/assets/triple-lines-two.png" alt="" />
          <div className='wrapper'>
            <div id='part-one'>
              <div>
                <FadeIn direction='right'>
                  <img src="/pages/home/catchphrase-one.png" alt="" />
                </FadeIn>
              </div>
              <div className='center-v'>
                <h2>Built For Fans</h2>
              </div>
            </div>
            <div id='part-two'>
              <div id='part-two-image'>
                <FadeIn direction='right'>
                  <img src="/pages/home/catchphrase-two.png" alt="" />
                </FadeIn>
              </div>
              <div className='center-b'>
                <h2>Powered By Passion</h2>
              </div>
            </div>
            <div id='part-three'>
              <div className='center-b'>
                <h2 className='clr-arc-highlight'>United Through Arcadia</h2>
              </div>
              <div>
                <FadeIn direction='left'>
                  <img src="/pages/home/catchphrase-three.png" alt="" />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section id='about'>
          <img id='jp-banner' className='element' src="/pages/home/jp-banner.png" alt="" />
          <img id='about-anime-world' className='element desktop-only' src="/pages/home/anime-world.png" alt="" />
          <img id='jp-slogan' className='element desktop-only' src="/pages/home/jp-slogan.png" alt="" />
          <div className='wrapper'>
            <div className='layout layout--two-col'>
              <div></div>
              <div className='text'>
                
                <div className='p-a-lg bg-arc-base clr-txt-light border-radius-md shadow'>
                  <div>What is Arcadia</div>
                  <p>An ecosystem of the biggest Otaku spaces. Whether you're watching anime, reading manga, discovering music, attending conventions, or exploring new games, Arcadia has a community for you.</p>
                </div>
                <div className='p-a-lg bg-arc-base clr-txt-light border-radius-md shadow'>
                  <div>Why we made Arcadia</div>
                  <p>No need for multiple logins and accounts. Arcadia combines the communities you need and want, all in one place. Switch between your worlds within seconds.</p>
                </div>
                <div className='p-a-lg bg-arc-base clr-txt-light border-radius-md shadow'>
                  <div>Who Arcadia is for</div>
                  <p>Anime, manga, gaming, music, and conventions are more than hobbies—they're communities, stories, and experiences that connect people across the world. Arcadia is built for those who cherish them.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id='features'>
        <img id='sakura-tree' className='element desktop-only' src="/assets/sakura-tree.png" alt="" />
        <img id='feature-gate' className='element' src="/assets/gate-1.png" alt="" />
        <div className='wrapper'>
          <div className='text text--half'>
            <p className='mini-title'>The Arcadia Difference</p>
            <h2>Project Arcadia: <br />The Flagship <span className='clr-arc-accent'>Otaku Platform</span></h2>
          </div>
          <div id='features-container'>
            <div className='feature-row'>
              <IconFeature icon={Earth} title='One account. Endless possibilities.' description='Arcadia unites every corner of your fandom under a single login.'/>
              <IconFeature icon={Building2} title='Direct Connections' description='Official partnerships with studios for authentic experiences'/>
              <div className='desktop-only'></div>
            </div>
            <div className='feature-row'>
              <IconFeature icon={UsersRound} title='Made for every fan' description='Customize your profile, track your interests, and receive recommendations tailored to the things you love most.'/>
              <div className='desktop-only'>
                <img id='arcadia-mask' src="/logos/arcadia-mask.png" alt="" />
              </div>
              <IconFeature icon={Cpu} title='Modern Technologies' description='Built with modern frameworks to adapt to whatever comes next'/>
            </div>
            <div className='feature-row'>
              <div className='desktop-only'></div>
              <IconFeature icon={Sprout} title='Constantly evolving' description='Arcadia is always looking for ways to improve, whether features or QoLs'/>
              <IconFeature icon={Heart} title='By fans, for fans' description='Every feature is created with a genuine appreciation for the communities, stories, and hobbies that inspire us'/>
            </div>
            
          </div>
        </div>
      </section>

      <div className='bg-gradient-one'>
        <section id='sponsor'>
          <img id='broken-circle' className='element' src="/assets/broken-circle.svg" alt="" />
          <div className='wrapper'>
            <div>
              <div id='sponsor-container'>
                <FadeIn direction='up' className='sponsor-card' delay={.1}>
                  <img src="/sponsors/eagle-jump.png" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.2}>
                  <img src="/sponsors/astral-express.png" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.3}>
                  <img src="/sponsors/aniplex-white.svg" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.4}>
                  <img src="/sponsors/fromsoft.png" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.5}>
                  <img src="/sponsors/hoyoverse-white.png" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.6}>
                  <img src="/sponsors/jc-staff.png" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.7}>
                  <img src="/sponsors/myanimelist.svg" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.8}>
                  <img src="/sponsors/nexon-white.png" alt="" />
                </FadeIn>
                <FadeIn direction='up' className='sponsor-card' delay={.9}>
                  <img src="/sponsors/yostar-white.svg" alt="" />
                </FadeIn>
              </div>
              <div className='center-v'>
                <div className='text clr-txt-light'>
                  <p className='mini-title'>Arcadia Partners</p>
                  <h2 className='clr-txt-light'>Industry Leaders <span className='clr-arc-highlight'>Collab</span> With Arcadia</h2>
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
        <img id='pink-ribbon' className='element' src="/assets/pink-ribbon.png" alt="" />
        <div className='wrapper'>
          <div className='text text--half'>
            <p className='mini-title'>Arcadia Testimonials</p>
            <h2>Otakus Agree, Arcadia is a must for Fanatics</h2>
          </div>
          
          <div className='testimonial-container'>
            <FadeIn direction='down' delay={.2}>
              <Testimonial 
                id='keanu'
                person='Keanu Reaves'
                src='keanu.avif'
                description='I’ve been a fan of anime for years, and Arcadia feels like the ultimate place for fans. Their app Asobu makes modding games a breeze.'
              />
            </FadeIn>
            <FadeIn direction='left' delay={.3}>
              <Testimonial 
                id='lebron'
                person='LeBron James'
                src='lebron.jpg'
                description='Arcadia is signature, just like my taco tuesdays. I’ve used Tsunagu and Shiru to finally understand what Bronny meant by “Diamond on Siege”.'
              />
            </FadeIn>
            <FadeIn direction='right' delay={.6}>
              <Testimonial 
                id='aoba'
                flip
                person='Aoba'
                src='aoba.png'
                description='Arcadia allowed me to find my dream games from my favorite company. When I heard they were partnering up, I couldnt let the opporitunity slip. Thank you Team Arcadia!'
              />
            </FadeIn>
            <FadeIn direction='up' delay={.4}>
              <Testimonial 
                id='jamaal'
                flip
                person='Jamaal Williams'
                src='jamaal.jpg'
                description='This is like the ultimate training ground for otaku. Everything you need: tracking, merch, community. All in one place.'
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id='at-a-glance'>
        <div className='wrapper'>
          <div className='stat-container'>
            <div id='title-tile'>
              <h2 className='clr-txt-light'><span className='clr-arc-highlight'>Arcadia</span> at a Glance</h2>
            </div>
            <div id='image-tile'>
              <img src="/pages/home/sunset.png" alt="" />
            </div>
            <div id='asobu-tile' className='stat-tile'>
              <p className='value'>7</p>
              <p className='app'>Games</p>
            </div>
            <div id='miru-tile' className='stat-tile'>
              <p className='value'>8</p>
              <p className='app'>Anime</p>
            </div>
            <div id='yomu-tile' className='stat-tile'>
              <p className='value'>0</p>
              <p className='app'>Manga</p>
            </div>
            <div id='iku-tile' className='stat-tile'>
              <p className='value'>26</p>
              <p className='app'>Events</p>
            </div>
            <div id='filler-one'>
              <img src="/pages/home/furina.png" alt="" />
            </div>
            <div id='filler-two'>
              <Tv />
              <Gamepad2 />
              <Book />
            </div>
            <div id='filler-three'>
              <Music />
              <Ticket />
            </div>
            <div id='filler-four'>
              <img src="/pages/home/umas.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className='bg-gradient-one'>
        <HomeCaseStudy />
        
        {/* CTA */}
        <section id='cta'>
          <img id='cta-sunset' className='element desktop-only' src="/pages/home/sunset.png" alt="" />
          <div className='wrapper'>
            <div className='layout layout--two-col'>
              <div>
                <div className='text text--white'>
                  <p className='mini-title'>Get Started</p>
                  <h2>Ready to Enter Arcadia?</h2>
                  <p>Set up your account and get started exploring anime, manga and games. Your own otaku world is just clicks away.</p>
                  <div className='button-container'>
                    <a href="https://arcadia-platform.vercel.app/auth" target='_blank'>
                      <Button variant={'solid'} className='primary'>Explore Arcadia</Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='desktop-only'></div>
            </div>
          </div>
        </section>
      </div>

      <section id='stack'>
        <img id='triple-lines-one' className='element desktop-only' src="/assets/triple-lines-one.png" alt="" />
        <img id='triple-lines-two' className='element desktop-only' src="/assets/triple-lines-two.png" alt="" />
        <div className='wrapper'>
          <div id='technologies'>
            <div className='text'>
              <p className='mini-title'>Tech Ecosystem</p>
              <h2>Modern Tech Defines Arcardia</h2>
              <p>Arcadia is being built with the most reliable and trusted technologies on the market. The result: a robust and modern platform that hosts the best Otaku ecosystem there is.</p>
            </div>
            <div id='stack-container'>
              <Tooltip showArrow content="Next Js" positioning={{placement: 'top'}} >
                <div className='center-b'> 
                  <img src="/pages/home/stack/next.png" alt="" />
                </div>
              </Tooltip>
              <Tooltip showArrow content="Chakra UI" positioning={{placement: 'top'}} >
                <div className='center-b'> 
                  <img src="/pages/home/stack/chakra.png" alt="" />
                </div>
              </Tooltip>
              <Tooltip showArrow content="Zustand" positioning={{placement: 'top'}} >
                <div className='center-b'> 
                  <img src="/pages/home/stack/zustand.svg" alt="" />
                </div>
              </Tooltip>
              <Tooltip showArrow content="Python" positioning={{placement: 'top'}} >
                <div className='center-b'> 
                  <img src="/pages/home/stack/python.png" alt="" />
                </div>
              </Tooltip>
              <Tooltip showArrow content="Django" positioning={{placement: 'top'}} >
                <div className='center-b'> 
                  <img src="/pages/home/stack/django.png" alt="" />
                </div>
              </Tooltip>
              <Tooltip showArrow content="Graphql" positioning={{placement: 'top'}} >
                <div className='center-b'> 
                  <img src="/pages/home/stack/graphql.png" alt="" />
                </div>
              </Tooltip>
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
        <img id='fangyi' src="/pages/home/fangyi.png" className='element' alt="" />
        <div className='wrapper'>
          <div id='d2x__overview' className='layout layout--three-col'>
            <div>
              <img src="/pages/home/d2x-interns.png" alt="" />
            </div>
            <div className='text'>
              <p className='mini-title'>Team Double Dragon</p>
              <h2>Make Things Happen At D2X</h2>
              <p>We focus on building a space where fandom, creativity and technology can come together. Flexible and chill where it counts, but serious when it comes to quality and impact. </p>
              <p>No template or molds to fill at D2X. Come as you are. Grow how you want. Let’s make something unforgettable.</p>
            </div>
            <div className='flex flex--vertical flex--center-vertical flex--row-gap-md'>
              <IconFeature icon={Users} title='50+ Members' description={null} />
              <IconFeature icon={Map} title='8 Locations' description={null} />
              <IconFeature icon={Mic2} title='30 Yearly Karaoke Nights' description={null} />
            </div>
          </div>
          <div id='d2x__quote'>
            <div className='layout layout--two-col'>
              <div className='text'>
                <p className='mini-title'>Message from a founder</p>
                <h2>Motivated By Passion, The D2X Way</h2>
              </div>
              <div className='text'>
                <p>"At D2X, passion is at the heart of everything we create. We believe the communities built around anime, games, music, and storytelling deserve platforms designed by people who genuinely share those interests. That's what inspires us every day.</p>
                <p>Our goal is to build experiences that bring fans together, foster connections, and create a place where everyone feels they belong. As we grow, we'll continue to be guided by the same passion that started this journey."</p>
              </div>
            </div>
          </div>
          <div id='d2x__fangyi'></div>
        </div>
      </section>

      {/* <section id='cc-highlight'>
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
        </section> */}

      {/* FAQ */}
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