import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    
    <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className=' pb-8 md:pb-2'>
    <br/>
    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
    </div>
    <p className=' text-xl mt-20'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec varius lacinia augue, a accumsan lectus placerat ut. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Morbi tincidunt nisi sapien. Nullam turpis orci, scelerisque fermentum aliquam eget, egestas id eros. 
    Praesent enim nisl, viverra rutrum lacinia non, posuere at mi. 
    Fusce mollis, tortor vel ullamcorper pretium, erat massa vulputate leo, et pulvinar velit nibh cursus urna. 
    </p>
    <br/>
    <p className=' text-xl'>
    Suspendisse potenti. Nullam magna justo, convallis at interdum id, ultricies vitae augue. 
    Proin luctus, orci id ullamcorper convallis, mi metus mollis est, sit amet sagittis est orci eu neque. 
    In consectetur finibus accumsan. Cras in sem a odio vestibulum lobortis. Sed vitae tortor quis sapien aliquam euismod.
    Duis elit turpis, mollis at nulla at, dignissim viverra orci. 
    </p>
    </div>
    
    </div>
  )
}

export default About