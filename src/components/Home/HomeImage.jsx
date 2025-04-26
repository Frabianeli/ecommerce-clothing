import React from 'react'

const newImage = [
    //'https://images.contentstack.io/v3/assets/bltb5a8befb95ca5f20/blt5eb9e4ccd1618f4c/65283f792c0536bbd4847f82/topper-full-m-121023-calzado.png?v1697492140564',
    //'https://images.contentstack.io/v3/assets/bltb5a8befb95ca5f20/blt1b95f1e29f2651a8/65283f7931e1fa093f2acd8e/topper-full-121023-calzado.png?v1697492140564',
    //'https://images.falabella.com/v3/assets/bltb5a8befb95ca5f20/blt67cf0dd7600153c9/652d70cafcd7b37fd904c280/hh-161023-telefonia.png?disable=upscale&format=webp&quality=70&width=1920',
    'https://www.theinsidersnet.com/site/public/images/pl_12/4349/201907/090712_29072019_C19_Website_Hisense_TVs_ESP_Banner.jpg',
    'https://i.ytimg.com/vi/KI6GmeFUklE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFsgSihlMA8=&rs=AOn4CLBmq04l6MP6hO0dixMwpX8R_pK9uA',
    'https://lzd-img-global.slatic.net/g/p/125b6dd655d59c9e7a5728578058055e.jpg_720x720q80.jpg',
    //'https://www.olier.com.py/storage/categorias/imagen-banner-hero98-1-1693600795.png',
    'https://www.canal-ar.com.ar/noticias/images/c_samsung_110723_r.jpg',
  
  ]

const HomeImage = () => {
  return (
    <section className='container--image'>
        {
            newImage.map(e => (
                <img  key={e} src={e} alt="" />
            ))
        }
    </section>
  )
}

export default HomeImage