import React from 'react'
import HomeMark from './HomeMark'
import Slider from './Slider'
import puma2  from '../../assets/pum_portada_2.jpg'

import './styles/homeScreen.css'
import SearchScreen from '../SearchProducts/SearchScreen'
import SearchProductCard from '../SearchProducts/SearchProductCard'
import SearchProduct from '../SearchProducts/SearchProduct'

const HomeScreen = () => {

  const array = [
    {
        title: 'Nike air force 1',
        price: 350.00,
        description: 'zapatillas urbanas de estilo casual',
      brand: 'Nike',
      images: [
        'https://i.pinimg.com/736x/f8/eb/60/f8eb60bd8b58cbb40c97fbb23b2fa527--nike-air-force-air-force-.jpg',
        'https://photos.enjoei.com.br/tenis-nike-air-force-1-lv-8-utility-tm-promocao-original-envio-mais-rapido-unidades-limitadas-colecao-exclusiva-estilo-e-moda-53575658/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xODg2OTQ1OC9mOWQ0ZGNhMmZkOTEyYzM4ODA2YjFhZWE0MzE5OGE0ZC5qcGc',
        'https://i.pinimg.com/736x/8f/16/6c/8f166cfeac69e2aac23174b6ef3d3be2.jpg',
        'https://i.pinimg.com/736x/e9/75/6e/e9756e3a3267d6b5ad67ab42d7bdd936.jpg',
        
      ]
    },
    {
        title: 'Adidas super star',
        price: 320.00,
        description: 'zapatillas urbanas de estilo casual',
      brand: 'Adidas',
      images: [
        'https://www.exisport.com/151960-thickbox_default/exisport-panska-vychadzkova-obuv-adidas-originals-superstar-ftwwht-cblack-ftwwht.jpg',
        'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F09%2Fadidas-yeezy-boost-350-v2-static-closer-look-on-foot-1.jpg?q=75&w=800&cbr=1&fit=max',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lL6gBqiFv_BDTQez5LBWyyCbReabvAD0AWhzzFaiuQptVPMJJ39AzB6AunDMG_KnVm0&usqp=CAU',
        'https://images.asos-media.com/products/zapatillas-negras-de-adidas-originals-superstar/13309494-1-bk1black1?$n_640w$&wid=513&fit=constrain',
        
      ]
    },
    {
        title: 'Puma react 1',
    price: 310.00,
    description: 'zapatillas urbanas de estilo casual',
      brand: 'Puma',
      images: [
        puma2,
        'https://i.pinimg.com/originals/e7/32/55/e732552f0f00637c81b8039fc475d8c2.jpg',
        'https://i.pinimg.com/originals/5c/7d/c1/5c7dc1454b3d78d8eaa4ccba6ce55853.jpg',        
        'https://i.pinimg.com/236x/57/bb/94/57bb94cec6da08ec583a7198f25979c3.jpg',

      ]
    }
  ]

  return (
    <div className='home'>
        <Slider />
          {
            array.map((product, index) =>
                <HomeMark 
                  product={product}
                  key={index}  
                />
              )
          }
        <h2 className='home__subtitle'>Algunos productos : </h2>
        <SearchProduct />
    </div>
  )
}

export default HomeScreen