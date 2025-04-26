import React from 'react'
import './styles/homePresentation.css'
import HomeSlider from './HomeSlider'
const arrayImage = [
    'https://samsungplusnuevo.s3.amazonaws.com/product-family-item-image-image/normal/product-family-item-image-image_4JuPHt1WvOwDnmYhZ6rA.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4K0ah9riBoFhiYQuah0N_gzpWqc0DtlCyBtDETpc2LYC8LnSxZkpD5cFDH_bH9EwW1g&usqp=CAU',
    'https://hiraoka.com.pe/media/catalog/product/1/2/129797_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560',
    'https://cdn.shopify.com/s/files/1/2358/2817/products/Nike-AIr-Force-1-Low-White-Metallic-Silver-DD1523-100-Wethenew-3.png?v=1643189723',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5eMui59uP7y1FtPuE1ew8ptf4PNb2nF8QQ&usqp=CAU',
    'https://www.computerlounge.co.nz/data/media/images/catalogue/Products2/Laptops/Laptops/ASUS/43627_1.jpg',
    'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Asus_ROG_Flow_X1689.jpeg',
    'https://i0.wp.com/tecnopymes.com.ar/wp-content/uploads/2020/07/Samsung-A71.gif?fit=1000%2C600&ssl=1',
]

const arr = [
    'https://img.freepik.com/vector-premium/fondo-abstracto-curvas-degradado-colores-negros_444390-8380.jpg',
    'https://segwitz.com/wp-content/uploads/2021/09/why-ecommerce-need-mobile-apps.jpg',
    'https://img.freepik.com/vector-premium/fondo-negro-degradado-lineas-onduladas_23-2149158057.jpg',
    'https://img.freepik.com/fotos-premium/fondo-textura-papel-negro-arrugado_53876-148454.jpg',
    'https://media.istockphoto.com/id/1208012425/es/foto/textura-de-papel-arrugado-negro-con-pliegues-fondo-negro-fondo-de-pantalla.jpg?s=170667a&w=0&k=20&c=iGF5LDX3mWehwTWXXDxbCLVVE_s7RAa3L3zTmak0Xq0=',
    'https://img.freepik.com/foto-gratis/fondo-pantalla-patron-fondo-abstracto-grunge-negro-foto-gratis_1340-33908.jpg?w=360',
    'https://img.freepik.com/free-photo/blank-dark-wall-in-a-living-room_53876-103958.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=sph',
    'https://img.freepik.com/vector-gratis/diseno-fondo-negro-lineas-diagonales_1061-350.jpg',
    'https://img.freepik.com/vector-premium/fondo-negro-abstracto_1078-705.jpg',
    'https://img.freepik.com/fotos-premium/textura-grunge-fondos-texturizados-polvo-rayados-grano-socorro-superposicion-polvo_196290-9444.jpg?w=2000',
    'https://img.freepik.com/fotos-premium/fondo-pared-blanco-negro-grunge-fondo-grunge-arenoso-blanco-negro-abstracto_196290-9570.jpg?size=626&ext=jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20220629/pngtree-abstract-black-background-with-white-scratches-and-a-textured-black-metal-overlay-suitable-for-design-purposes-photo-image_32168542.jpg',
    'https://img.freepik.com/fotos-premium/fondo-abstracto-textura-grunge-oscuro_761958-769.jpg',
    ]
const typeProducts = [
    'https://www.panasonic.com/content/dam/pim/es/es/TX/TX-65M/TX-65MX710E/ast-1940525.jpg.pub.crop.pc.thumb.640.1200.jpg',
    'https://www.elmueble.com/medio/2020/09/28/interior-armario-distribucion-ikea-04_a7e88f00_2000x2000.jpg',
    'https://falabella.scene7.com/is/image/FalabellaPE/18403998_10?wid=800&hei=800&qlt=70',
    'https://img.freepik.com/fotos-premium/fondo-pared-color-azul-oscurodecoracion-moderna-sala-estar-tv-gabinete3d-rendering_41470-4426.jpg',
    'https://ae01.alicdn.com/kf/H14abb02f1e114ccba1c975e432b3fbd9E/Hisense-Smart-TV-de-55-pulgadas-TV-4K-55AE7200F-HDR-rango-din-mico-ultra-alto-modo.jpg',
    'https://s7d2.scene7.com/is/image/Tottus/21275480_7?wid=800&hei=800&qlt=70',
    'https://i.pinimg.com/736x/fc/cf/ab/fccfab52dcd4a5aaf98cd3bbb2e00fcf.jpg',
    //'https://image-us.samsung.com/us/smartphones/galaxy-s22/rmx/ExploreFeatures_PageAssets/CompareTheSeries_554x338.png',
    'https://www.proandroid.com/wp-content/uploads/2020/12/Samsung-Galaxy-s21.png',
]
const HomePresentation = () => {
  return (
    <article className='home__presentation'>
        <div className='presentation__content'>
            <h2>Bienvenido a Rome</h2>
            <h4>Tenemos productos de todo tipo:</h4>
            <h4>Lapto, Televisores, Ropa, Refrigeradora, Smarphone y muchos más</h4>
            <h4>Encuentra todo lo que buscas aqui</h4>
            <button >Ver más</button>
        </div>
        <div className='presentation__slider'> {/*
          {
            typeProducts.map((e,i) =>(
              <img className='img__slider' key={i} src={e} alt="image" />
            ))
          }            */}
          <HomeSlider />
        </div>
    </article>
  )
}

export default HomePresentation