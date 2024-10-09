import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif" alt="grid-1" 
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
            <img src="https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif" alt="grid-1" 
            className='w-full sm:h-[250px] h-fit object-contain'
            />
            <p className="grid-headtext">Hello, My name is also Cipher</p>
            <p className="grid-subtext">Given my 20 years of experience, I have seen all kinds of situations
              from low stake to high stake obstacles. You can trust me to see your vision to the end!
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <img src="https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif" alt="grid-1" 
            className='w-full sm:h-[250px] h-fit object-contain'
            />
            <p className="grid-headtext">Hello, My name is surprisingly also Cipher</p>
            <p className="grid-subtext">Given my 20 years of experience, I have seen all kinds of situations
              from low stake to high stake obstacles. You can trust me to see your vision to the end!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About