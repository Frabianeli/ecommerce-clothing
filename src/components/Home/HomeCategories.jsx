import React from 'react'
import './styles/homeCategories.css'

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



const HomeCategories = () => {
  return (
    <div className='categories'>
        <h3 className='categories__title'>Algunas Categorias</h3>
        <section className='categories__container'>
            {
                arrayImage.map(image => (
                    <div key={image} className='categories__container__item'>
                        <div className='categories__container__item__img'>
                            <img src={image} alt="categoria" />
                        </div>
                        <h4 className='categories__item__title'>Refrigeradora</h4>
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default HomeCategories