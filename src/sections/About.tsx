import React from 'react'
import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

type Props = {}

const About = (props: Props) => {
  const gridImg1 = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`
  const gridImg2 = `https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif`
  const gridImg3 = `https://media0.giphy.com/media/905GG7MjDw61q/200w.gif?cid=6c09b952azrwedwsydm1l0a5ejegdvcxj9iuf1gyeoihwlex&ep=v1_gifs_search&rid=200w.gif&ct=g`
  const gridImg4 = `https://media1.tenor.com/m/6RvyvMjx3XMAAAAd/he-is-speaking-guy-explaining-with-a-whiteboard.gif`
  
  const icon1 = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=`
  const icon2 = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwYmY5MGYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjayI+PHBhdGggZD0iTTIwIDYgOSAxN2wtNS01Ii8+PC9zdmc+`
  const icon3 = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwYmY5MGYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2siPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0ibTkgMTIgMiAyIDQtNCIvPjwvc3ZnPg==`

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText, ('Text that contacts me :)');
    setHasCopied(true);

    setTimeout(()=>{
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={gridImg1} alt="grid-1" 
            className='w-full sm:h-[250px] h-fit object-contain'
            />
            <p className="grid-headtext">Hello, My name is Cipher</p>
            <p className="grid-subtext">Given my 20 years of experience, I have seen all kinds of situations
              from low stake to high stake obstacles. You can trust me to see your vision to the end!
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={gridImg1} alt="grid-1" 
            className='w-full sm:h-[250px] h-fit object-contain opacity-25'
            />
            <p className="grid-headtext">Hello, My name is Phantom Cipher</p>
            <p className="grid-subtext">Given my 2 years of experience, I have barely experienced unique situations.
              You can trust me to learn from the other Cipher and outshine their expertise in a few years!
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[330px] h-fit flex justify-center items-center">
              <Globe 
                height={330}
                width={330}
                backgroundColor='rgba(0,0,0,0)'
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{
                  lat: 25, lng: 200,
                  text: 'I am here!',
                  color: 'green',
                  size: 20,
                }]}
              />
            </div>
            <p className='grid-headtext'>Teleportation</p>
            <p className='grid-subtext'>With the power of technology, I can accomplish any job you send my way. 
              I have skill sets that let me thrive anywhere.
            </p>
            <Button name='Contact Me' isBeam containerClass='w-full mt-5'/>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="flex">
              <img src={gridImg2} alt="" className='w-full sm:h-[270px] h-fit object-contain' />
              <img src={gridImg3} alt="" className='w-full sm:h-[270px] h-fit object-contain' />
            </div>
            <div className="">
              <p className="grid-headtext">Continuously Seek KnAwLeDgE</p>
              <p className="grid-subtext">
                The instance we worm our way into the world, we barely understand how anything operations. 
                It is super important to stay mentally and physical active to avoid being blindsided.
                If you are not learning, your brain cells are burning!
              </p>
            </div>
          </div>
        </div>

        
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex items-center">
            <img src={gridImg4} alt="" className='md:h-[150px] sm:h-[280px] h-fit object-cover sm:object-top'/>
            <div className="space-y-2">
              <div className="space-y-5">
                <p className="grid-subtext text-center">Contact Me</p>
              </div>
              <div className="copy-container" onClick={handleCopy} >
                <img src={hasCopied ? {icon1} : {icon2}} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-yellow-600">
                  emailaddress.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About