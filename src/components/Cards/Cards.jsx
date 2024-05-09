import React from 'react';

// import jamb from '../../assets/waec2.png';
import cambridge from '../../assets/Ellipse 363 (4).png';
import waec from '../../assets/Ellipse 363 (5).png';
import gce from '../../assets/Ellipse 363 (6).png'
import ui from '../../assets/Ellipse 363 (7).png';
// import unilag from '../../assets/unilag.png';
// import waec2 from '../../assets/waec2.png';
// import search from '../../assets/tabler_search.png';
// import filter from '../../assets/bi_filter.png';
// import icon1 from '../../assets/Frame 35224.png';
// import card from '@material-tailwind/react/theme/components/card';


const Cards = () => {

const cardData = [
  {
    img : cambridge,
    text : "UTME",
  },
  {
    img : waec,
    text : "WASSCE",
    id : 1
  },
  {
    img : cambridge,
    text : "JAMB",
    id : 2
  },
  {
    img : gce,
    text : "GCE Nov/Dec",
    id : 3
  },
  {
    img : cambridge,
    text : "CAMBRIDGE",
    id : 4
  },
  {
    img : ui,
    text : "UI P.UTME",
    id : 5
  },
]


const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Berries",
  "Carrots",
  "Cherry",
  "Cucumber",
  "Dates",
  "Dragon fruit",
  "Elder berry",
  "Fig",
  "Grape",
  "Garden egg"
];




  return(
    <>
    <div className='grid grid-cols-3 gap-[0] mt-20'>
      {cardData.map((card, index) =>(
          <div key={index} className=''>
            <img src={card.img} alt="cards" className='m-auto mb-8 mt-4'/>
            <p className='text-center'>{card.text}</p>
          </div>
        )
      )}
      </div>

      <div className='flex flex-col items-center justify-center'>
          <input 
          className='flex items-center text-center justify-center mt-8 border-2 rounded-md outline-none' 
          type='text' 
          placeholder='search fruits...' />
           {fruits.map(fruit => (
            <div className=''>
              <p>{fruit}</p>
            </div>
          ))}
      </div>
     
    </>
  )
}

export default Cards;














































//const Cards = () => {
  // const data = {
  //   text1 : "UTME",
  //   text2 : "WASSCE",
  //   text3 : "GCE Nov/Dec",
  //   text4 : "CAMBRIDGE",
  //   text5 : "UI P.UTME",
  //   text6 : "UNILAG P.UTME"
  // }

  // const images = {
  //   img1 : jamb,
  //   img2 : waec,
  //   img3 : gce,
  //   img4 : cambridge,
  //   img5 : ui,
  //   img6 : unilag,
  //   img7 : waec2,
  // }



  //return (
  //   <section>
  //     <div className='flex flex-col justify-center items-center mt-24'>
  //       <h1 className='text-3xl font-inter mb-3'>Our Programs</h1>
  //       <p className='text-lg'>Select the exam you are preparing for</p>
  //     </div>

  //     <div className='flex ml-6 mt-12'>
  //       <input className='p-3 border-rounded border-2 rounded-2xl w-full outline-none lmobile:w-[480px] lmobile:py-1 lmobile:ml-12' type='text' placeholder='Search'/>
  //      <img className='relative left-[-40px] h-6 mt-4' src={search} alt='search icon'/>
  //       <div className='mt-3 p-0'>
  //         <img className='mr-14 lmobile:border-2 rounded-2xl lmobile:px-2 lmobile:py-1 lmobile:mb-3' src={filter} alt='filter'/>
  //       </div>
  //     </div>

  //     <div className='grid grid-cols-3 gap-6 px-6 mt-12 lmobile:grid-cols-4 lmobile:m-12'>
  //       
  //           <img className='border-2 rounded-xl px-4 py-8' src={images.img5} alt='img'/>
  //           <p className='text-center'>{data.text2}</p>
  //       </div>
  //       <div>
  //          <img className='border-2 rounded-xl px-4 py-8' src={images.img2} alt='img'/>
  //          <p className='text-center'>{data.text4}</p>
  //       </div>
  //       <div>
  //       <img className='border-2 rounded-xl px-4 py-8' src={images.img3} alt='img'/>
  //       <p  className='text-center'>{data.text3}</p>
  //       </div>
  //       <div>
  //       <img className='border-2 rounded-xl px-4 py-8' src={images.img4} alt='img'/>
  //       <p  className='text-center'>{data.text1}</p>
  //       </div>
  //       <div>
  //       <img className='border-2 rounded-xl px-4 py-8' src={images.img5} alt='img'/>
  //       <p  className='text-center'>{data.text2}</p>
  //       </div>
  //       <div>
  //       <img className='border-2 rounded-xl px-6 py-10' src={images.img2} alt='img'/>
  //       <p className='text-center'>{data.text2}</p>
  //       </div>
  //     </div>

  //     <div className='flex flex-row gap-4 mt-8 justify-center lmobile:top-20'>
  //       <div>
  //           <button className='bg-white rounded-full border-2 transform rotate-180'>
  //             <img src={icon1} alt='icon2'/>
  //           </button>
  //       </div>
  //       <div>
  //       <button className='bg-white rounded-full border-2'>
  //             <img src={icon1} alt='icon1'/>
  //           </button>
  //       </div>
  //     </div>
  //   </section>
  // )
//}

//export default Cards;