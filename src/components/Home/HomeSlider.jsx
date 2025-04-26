import React, { useEffect, useRef, useState } from 'react';
import Slider from 'rc-slider';
import './styles/homeSlider.css';

const HomeSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://www.panasonic.com/content/dam/pim/es/es/TX/TX-65M/TX-65MX710E/ast-1940525.jpg.pub.crop.pc.thumb.640.1200.jpg',
    'https://www.elmueble.com/medio/2020/09/28/interior-armario-distribucion-ikea-04_a7e88f00_2000x2000.jpg',
    'https://falabella.scene7.com/is/image/FalabellaPE/18403998_10?wid=800&hei=800&qlt=70',
    'https://promart.vteximg.com.br/arquivos/ids/6920716-1000-1000/1459319_09.jpg?v=638176142269200000',
    'https://plazavea.vteximg.com.br/arquivos/ids/27354971-512-512/20175688-11.jpg',  
    'https://es.digitaltrends.com/wp-content/uploads/2019/06/lg-instaview-feat-image-1.jpg?resize=1200%2C630&p=1',
    'https://www.eltiempo.com/contenido-dj/contenido-comercial/IMAGEN/IMAGEN-16889820-2.png',
   // 'https://img.freepik.com/fotos-premium/fondo-pared-color-azul-oscurodecoracion-moderna-sala-estar-tv-gabinete3d-rendering_41470-4426.jpg',
    //'https://ae01.alicdn.com/kf/H14abb02f1e114ccba1c975e432b3fbd9E/Hisense-Smart-TV-de-55-pulgadas-TV-4K-55AE7200F-HDR-rango-din-mico-ultra-alto-modo.jpg',
    //'https://s7d2.scene7.com/is/image/Tottus/21275480_7?wid=800&hei=800&qlt=70',
    'https://i.pinimg.com/736x/fc/cf/ab/fccfab52dcd4a5aaf98cd3bbb2e00fcf.jpg',
    //'https://image-us.samsung.com/us/smartphones/galaxy-s22/rmx/ExploreFeatures_PageAssets/CompareTheSeries_554x338.png',
    'https://www.proandroid.com/wp-content/uploads/2020/12/Samsung-Galaxy-s21.png',
  ] 

const handleSliderChange = (value) => {
    setCurrentImageIndex(value);
  };
  const interval = useRef()
  useEffect(() => {
    // Automáticamente avanza al siguiente slider cada 3 segundos
    console.log('images.length', images.length)
    
    console.log('USEED')
    setTimeout(()=>{
      interval.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    },1000)

    return () => clearInterval(interval.current); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  const prev = () => {
    console.log(currentImageIndex)
    console.log(interval)
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 1 - 1 ? images.length-1 : prevIndex - 1
    );
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      console.log('INTERVAL');
    }, 3000);
  }

  const next = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      console.log('INTERVAL');
    }, 3000);
  }

  const changeIndex = (index) => {
    setCurrentImageIndex(index)
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      console.log('INTERVAL');
    }, 3000);
  }

  return (
    <>
      <div className="image-slider-container">
        <img
          src={images[currentImageIndex]}
          alt="Image"
          className="image-transition"
          style={{ opacity: 1 }}
        />
      </div>
      <div className='container__buttons'>
        {
          images.map((e,i) =>(
            <button onClick={() =>changeIndex(i)} className={`${currentImageIndex == i ? 'btn-index btn-index--active' : 'btn-index'}`} key={i}></button>
          ))
        }
      </div>
    </>
  );
};

export default HomeSlider;
