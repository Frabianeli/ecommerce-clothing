import React, { useEffect, useState } from 'react'
import HomeMark from './HomeMark'
import Slider from './Slider'
import puma2  from '../../assets/pum_portada_2.jpg'

import './styles/homeScreen.css'
import SearchProduct from '../SearchProducts/SearchProduct'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Shared/Loading'
import { setIsLoading } from '../../store/slices/isLoading'
import { getAllProducts, setProduct } from '../../store/slices/products'
import SliderSimilarProducts from '../Product/SliderSimilarProducts'
import axios from 'axios'
import HomeHeader from './HomeHeader'
import HomeCategories from './HomeCategories'
import HomePresentation from './HomePresentation'
import HomeSlider from './HomeSlider'
import HomeImage from './HomeImage'

const product = [
  {
  "id": "1af86b94-1ec9-49c7-993b-b4f0565dea3b",
  "title": "Adidas Super Star",
  "description": "La zapatilla adidas Superstar es un icono del estilo urbano desde hace varias décadas. Esta versión conserva la puntera de goma, las 3 bandas dentadas y el logotipo de adidas Superstar del modelo original.",
  "price": "250",
  "createdAt": "2023-10-18T17:51:21.218Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "adidas"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/736x/f8/eb/60/f8eb60bd8b58cbb40c97fbb23b2fa527--nike-air-force-air-force-.jpg",
  "createdAt": "2023-10-18T17:51:21.226Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671660304227-adidas-super-star-1-2.jpg",
  "createdAt": "2023-10-18T17:51:21.227Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671660305091-adidas-super-star-1-3.jpg",
  "createdAt": "2023-10-18T17:51:21.227Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671660314453-adidas-super-star-1-4.jpg",
  "createdAt": "2023-10-18T17:51:21.227Z"
  }
  ],
  "product_stocks": [
  {
  "id": "dd061a69-d0e8-4b5e-828c-e246b407aaa2",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "7c210520-9992-446c-9888-602ecbbf5c87",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "50db306e-6d56-4c43-abe6-0118060ddc87",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "2c5e36ad-c255-43cc-b597-2b7a11827784",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "75fbe0ab-da81-4342-bbb9-6dd301dc8e4a",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "253ef1b1-a7b3-4f0b-acf3-d4764edc3b87",
  "stock": 50,
  "product_size": {
  "id": "ba576826-f1cd-4077-a382-592186b8a3a2",
  "name": "43"
  }
  }
  ]
  },
  {
  "id": "abafe1d7-235c-4353-851d-c277c261c26a",
  "title": "Adidas Super Star White",
  "description": "Adidas de estilo casual, ideal para aquellos que les gusta el estilo urbano",
  "price": "300",
  "createdAt": "2023-10-18T17:51:21.182Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "adidas"
  },
  "products_imgs": [
  {
  "url": "https://photos.enjoei.com.br/tenis-nike-air-force-1-lv-8-utility-tm-promocao-original-envio-mais-rapido-unidades-limitadas-colecao-exclusiva-estilo-e-moda-53575658/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xODg2OTQ1OC9mOWQ0ZGNhMmZkOTEyYzM4ODA2YjFhZWE0MzE5OGE0ZC5qcGc",
  "createdAt": "2023-10-18T17:51:21.191Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671605543791-adidas-super-star-white-1-2.jpg",
  "createdAt": "2023-10-18T17:51:21.192Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671605543792-adidas-super-star-white-1-3.jpg",
  "createdAt": "2023-10-18T17:51:21.192Z"
  }
  ],
  "product_stocks": [
  {
  "id": "92d9a1b1-f182-4ab7-b93e-3749ab3c18c0",
  "stock": 50,
  "product_size": {
  "id": "ba576826-f1cd-4077-a382-592186b8a3a2",
  "name": "43"
  }
  },
  {
  "id": "1488639a-2813-4fac-8615-449d525d920f",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "3913da6b-0ca2-4543-b7ab-52f80adeb9fe",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "aa709121-7654-48cc-8c2d-1941c832b176",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "cf53bd0b-671e-41ed-b5b5-84f3f3eea1ed",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "5390bb97-8990-4544-8d91-aed81f428357",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  }
  ]
  },
  {
  "id": "0efc4714-0872-4ede-bbdc-47e593e5de37",
  "title": "Nike Hypervenom Phantom 3 df fg azul blanco",
  "description": "Nike Hypervenom Phantom, para jugadores que les gusta la velocidad y el ataque.Parte superior de piel sintética con textura para un mejor tacto. ",
  "price": "500",
  "createdAt": "2023-10-18T17:51:21.147Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/736x/8f/16/6c/8f166cfeac69e2aac23174b6ef3d3be2.jpg",
  "createdAt": "2023-10-18T17:51:21.150Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671600497446-nike-hypervenom-phantom-3-df-fg-azul-blanco-1-2.jpg",
  "createdAt": "2023-10-18T17:51:21.151Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671600497447-nike-hypervenom-phantom-3-df-fg-azul-blanco-1-3.jpg",
  "createdAt": "2023-10-18T17:51:21.151Z"
  }
  ],
  "product_stocks": [
  {
  "id": "39db7022-e0a4-4f92-93c2-5be51e6e8f47",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "2c632c13-5372-417e-a589-dffa59062037",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "5ba87a68-67f0-4db8-96dc-c9bd6d79e284",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "186ec217-7ebb-4edd-8bdf-7be02ea18323",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "a4cc70e1-7363-4e16-a035-6e5bff0b37e9",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  }
  ]
  },
  {
  "id": "134d4f15-6708-4dc2-b117-5658003fe5b8",
  "title": "Hypervenom Phantom 3 white",
  "description": "La nike hypervenom iii textura HyperReactive ofrece una amortiguación óptima en los controles y mayor potencia en los chutes.",
  "price": "500",
  "createdAt": "2023-10-18T17:51:21.081Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/originals/5c/7d/c1/5c7dc1454b3d78d8eaa4ccba6ce55853.jpg",
  "createdAt": "2023-10-18T17:51:21.092Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671597872006-nike-hypervenom-phantom-III-white-1-2.jpg",
  "createdAt": "2023-10-18T17:51:21.092Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671597872007-nike-hypervenom-phantom-III-white-1-3.jpg",
  "createdAt": "2023-10-18T17:51:21.092Z"
  }
  ],
  "product_stocks": [
  {
  "id": "3d11b0f5-f7cf-4bfd-b210-011443fc633f",
  "stock": 50,
  "product_size": {
  "id": "ba576826-f1cd-4077-a382-592186b8a3a2",
  "name": "43"
  }
  },
  {
  "id": "4ad760ac-2d0f-4324-a26e-9832b82bf43b",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "2dc105f9-bd32-4c65-955c-fe3e1ff1dfeb",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "08819fb1-eb87-46b6-b187-31102ec12dc8",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "9fc8c35b-2e3b-4b4d-af8d-dfe8fef66ee4",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "f6a91aec-d2ed-4b1f-83d4-5a8ffbd1169e",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "6e7fa53e-288a-48c9-8bec-401ad5ebbd1e",
  "stock": 50,
  "product_size": {
  "id": "9d145fb2-6e8d-4a05-b8ed-b64415f3bb03",
  "name": "37"
  }
  }
  ]
  },
  {
  "id": "bf4dbbd7-479f-4e10-b143-6d304153f544",
  "title": "Nike Hypervenom Phantom 3 DF Fg",
  "description": "Nike Hypervenom Phatal 3 DF para hombre, han sido concebidas para añadir velocidad al arremate y permitir cambios rápidos de dirección en campos de césped corto.",
  "price": "500",
  "createdAt": "2023-10-18T17:51:21.031Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://www.exisport.com/151960-thickbox_default/exisport-panska-vychadzkova-obuv-adidas-originals-superstar-ftwwht-cblack-ftwwht.jpg",
  "createdAt": "2023-10-18T17:51:21.037Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671597163378-nike-hypervenom-phantom-3-1-2.jpg",
  "createdAt": "2023-10-18T17:51:21.038Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671597163378-nike-hypervenom-phantom-3-1-3.jpg",
  "createdAt": "2023-10-18T17:51:21.038Z"
  }
  ],
  "product_stocks": [
  {
  "id": "2fb02bfe-d0a9-4fbd-8dd0-b0f913038b96",
  "stock": 50,
  "product_size": {
  "id": "9d145fb2-6e8d-4a05-b8ed-b64415f3bb03",
  "name": "37"
  }
  },
  {
  "id": "d6606aa7-7cc9-4eb0-83b1-c1af0236a4ff",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "b6cb5930-1435-4d1e-905c-1f2af109e368",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "28289515-7c05-439f-b398-16849219a80c",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "a0d955a9-65f3-453e-a6e8-aa1427b88d83",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "9ac783c4-2e49-4865-9c59-c3b8e08587a5",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "3225bb11-7c99-4639-8e4b-c4448169667c",
  "stock": 50,
  "product_size": {
  "id": "ba576826-f1cd-4077-a382-592186b8a3a2",
  "name": "43"
  }
  }
  ]
  },
  {
  "id": "b74f8a25-aaa8-409b-a3c8-a3684e59c313",
  "title": "Nike mercurial victory VI CR7",
  "description": "chimpunes Nike mercurial victory VI CR7, tallas 42,41,40",
  "price": "360",
  "createdAt": "2023-10-18T17:51:20.973Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/236x/57/bb/94/57bb94cec6da08ec583a7198f25979c3.jpg",
  "createdAt": "2023-10-18T17:51:20.993Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1670556978708-nike-mercurial-victory-VI-CR7-1-2.jpg",
  "createdAt": "2023-10-18T17:51:20.992Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1670556976910-nike-mercurial-victory-VI-CR7-1-3.jpg",
  "createdAt": "2023-10-18T17:51:20.992Z"
  }
  ],
  "product_stocks": [
  {
  "id": "5f9586b0-82b3-4a8e-88a0-9bd8d9609029",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "7c9efb1e-aa2a-4f09-86e4-61d845764bb5",
  "stock": 50,
  "product_size": {
  "id": "ba576826-f1cd-4077-a382-592186b8a3a2",
  "name": "43"
  }
  },
  {
  "id": "3e97a7d4-9249-4257-9ef1-df7bcc9f89ff",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "88f3e77d-348c-4753-8343-923bd3930394",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "9cd2a742-49a1-4b37-b8dd-395cfa96f750",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "ecb72b38-2f5e-4532-b8ce-a8e85843fc4d",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  }
  ]
  },
  {
  "id": "c086ecf5-4dc3-4b20-aeee-63b8bfb756ba",
  "title": "Nike Air Force 1 low white",
  "description": "Nike Air Force 1 07 LV8 Utility Black 100% Original ",
  "price": "350",
  "createdAt": "2023-10-18T17:51:20.892Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/736x/f8/eb/60/f8eb60bd8b58cbb40c97fbb23b2fa527--nike-air-force-air-force-.jpg",
  "createdAt": "2023-10-18T17:51:20.938Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671673436194-nike-air-force-white-1-2.jpg",
  "createdAt": "2023-10-18T17:51:20.939Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671673436288-nike-air-force-white-1-3.jpg",
  "createdAt": "2023-10-18T17:51:20.939Z"
  }
  ],
  "product_stocks": [
  {
  "id": "18cc5a6b-34ef-4b88-baf3-7be5b6851f04",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "7d6ae327-ae04-471e-b249-3dd542dd6643",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "d91f047c-7a5e-4efd-9803-a44d93c97293",
  "stock": 50,
  "product_size": {
  "id": "ba576826-f1cd-4077-a382-592186b8a3a2",
  "name": "43"
  }
  },
  {
  "id": "fde5df34-ad66-4a01-b386-a92be30ef0df",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "013a47b3-4cca-45dc-a8cc-1cdee6f90f43",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "253f63cb-5113-4999-8606-9cf29d75295d",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  }
  ]
  },
  {
  "id": "58eae8b0-8f2f-4bf8-b1c4-fd6232ed3632",
  "title": "Nike Air Force 1 Low Utility Black White",
  "description": "Nike Air Force 1 07 LV8 Utility Black 100% Original ",
  "price": "350",
  "createdAt": "2023-10-18T17:51:20.829Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://photos.enjoei.com.br/tenis-nike-air-force-1-lv-8-utility-tm-promocao-original-envio-mais-rapido-unidades-limitadas-colecao-exclusiva-estilo-e-moda-53575658/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xODg2OTQ1OC9mOWQ0ZGNhMmZkOTEyYzM4ODA2YjFhZWE0MzE5OGE0ZC5qcGc",
  "createdAt": "2023-10-18T17:51:20.832Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671670987731-nike-air-force-5-2.jpg",
  "createdAt": "2023-10-18T17:51:20.832Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671670987885-nike-air-force-5-3.jpg",
  "createdAt": "2023-10-18T17:51:20.832Z"
  }
  ],
  "product_stocks": [
  {
  "id": "9df4778b-3a47-4b4c-8c50-b7945d933de3",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "b43ef617-97df-4842-804a-ee74dc9a19d8",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "d2b2b567-1d49-4489-a06b-594606bf6fa2",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "95a1025a-2bc5-4bc2-989f-9e271e025abc",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "4b8c2ca3-e198-4ab3-9606-dc78c989eafe",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  }
  ]
  },
  {
  "id": "f2a7f68a-807a-46d9-9573-c8760ef76baf",
  "title": "Nike Air Force 1 low white-black",
  "description": "Nike Air Force 1 07 LV8 Utility Black 100% Original ",
  "price": "350",
  "createdAt": "2023-10-18T17:51:20.796Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/736x/8f/16/6c/8f166cfeac69e2aac23174b6ef3d3be2.jpg",
  "createdAt": "2023-10-18T17:51:20.799Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671669474920-nike-air-force-white-black-1-2.jpg",
  "createdAt": "2023-10-18T17:51:20.799Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671669806230-nike-air-force-white-black-1-3.jpg",
  "createdAt": "2023-10-18T17:51:20.799Z"
  }
  ],
  "product_stocks": [
  {
  "id": "45e28aec-0f1b-4f2f-bc4f-5defd5c2b01c",
  "stock": 50,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  },
  {
  "id": "b1446e05-1f28-4f04-814a-61b117c6f623",
  "stock": 50,
  "product_size": {
  "id": "c2d4f898-372f-4a9e-b6dd-6d9dcc29708c",
  "name": "42"
  }
  },
  {
  "id": "6e08feb4-bb72-4675-9667-b03383dd3539",
  "stock": 50,
  "product_size": {
  "id": "8339fdc6-4ff1-47ad-820a-6c5b02bbd268",
  "name": "41"
  }
  },
  {
  "id": "51db87a3-d3e1-4f03-b2d5-5eb1b5732817",
  "stock": 50,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "6181c8c7-3df1-4503-b8ed-4bdc3dbe0a06",
  "stock": 50,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  }
  ]
  },
  {
  "id": "d983efc9-e0fc-4226-8561-25f9d3945e00",
  "title": "Air Force 1 07 LV8 Utility Negras",
  "description": "Nike Air Force 1 07 LV8 Utility Black 100% Original ",
  "price": "350",
  "createdAt": "2023-10-18T17:51:20.770Z",
  "category": {
  "name": "moda"
  },
  "sub_category": {
  "name": "zapatillas"
  },
  "brand": {
  "name": "nike"
  },
  "products_imgs": [
  {
  "url": "https://i.pinimg.com/236x/57/bb/94/57bb94cec6da08ec583a7198f25979c3.jpg",
  "createdAt": "2023-10-18T17:51:20.777Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671666341128-nike-air-force-3-2.jpg",
  "createdAt": "2023-10-18T17:51:20.777Z"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1671666341283-nike-air-force-3-3.jpg",
  "createdAt": "2023-10-18T17:51:20.777Z"
  }
  ],
  "product_stocks": [
  {
  "id": "211a2cfe-0959-40cf-89ea-5bcb097dd13f",
  "stock": 10,
  "product_size": {
  "id": "2ea6c788-ec0c-43f1-ad2c-d5eb9e0e5837",
  "name": "38"
  }
  },
  {
  "id": "c9d8ba47-c5bb-4ff8-bed4-0cce0a9ebed4",
  "stock": 20,
  "product_size": {
  "id": "3e80439c-8415-420a-94d1-974009bcd958",
  "name": "39"
  }
  },
  {
  "id": "c78134b6-8bee-401d-9a53-e0041e7545eb",
  "stock": 30,
  "product_size": {
  "id": "669f123c-0d09-4be7-9254-60182500b434",
  "name": "40"
  }
  }
  ]
  },
]
const tv =  [
  {
  "id": "31920c97-4367-45a6-99eb-eb528acf503a",
  "title": "Televisor Samsung 85\" Led Crystal UHD 4K Smart Tv",
  "description": "Tv Led 85\" Smart Crystal UHD 4K 2022 de pantalla plana con procesador de Crystal Processor 4K y sistema operativo Tizen.",
  "price": "8499",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/19844529_1?wid=240&hei=240&qlt=70&fmt=webp"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689912467223-Televisor-Samsung-85-Led-Crystal-UHD-4K-Smart-Tv-1-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689912467166-Televisor-Samsung-85-Led-Crystal-UHD-4K-Smart-Tv-1-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "28f9afdf-0c3d-4d36-b0ce-531335ec1c09",
  "stock": 20,
  "product_size": null
  }
  ]
  },
  {
  "id": "7781086e-17e5-4c4f-9209-902320a65dda",
  "title": "Televisor Samsung Smart TV 65\" Crystal UHD 4K",
  "description": "Tv Led 65\" Crystal UHD 4K 2023 de pantalla plana y sistema operativo Tizen.",
  "price": "1749",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/19844531_1?wid=240&hei=240&qlt=70&fmt=webp"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962749203-Televisor-Samsung-Smart-TV-65-Crystal-UHD-4K-1-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962757318-Televisor-Samsung-Smart-TV-65-Crystal-UHD-4K-1-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "50023a86-d004-4195-b50a-3e96f4986a59",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "e3fb1faf-72ee-486d-b36f-9206c8c0b000",
  "title": "Televisor Samsung 55\" QLED 4K Smart Tv",
  "description": "Tv Led 55\" QLED 4K UHD 2022 de pantalla plana y sistema operativo Tizen.",
  "price": "1699",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/882720682_01?wid=240&hei=240&qlt=70&fmt=webp"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962722090-Televisor-Samsung-Smart-TV-55-QLED-4K-1-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962731191-Televisor-Samsung-Smart-TV-55-QLED-4K-1-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "4624be01-d3b9-43fb-a8f8-fa606e3af80a",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "ecafb15b-850d-4dcc-832d-46c01661afaf",
  "title": "Televisor Samsung 75\" QLED 4K Smart Tv",
  "description": "Tv Led 75\" QLED 4K UHD 2022 de pantalla plana y sistema operativo Tizen.",
  "price": "4199",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "http://localhost:3000/api/v1/upload/1690144728024-Televisor-Samsung-Smart-TV-75-QLED-4K-1.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690144740987-Televisor-Samsung-Smart-TV-75-QLED-4K-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690144751838-Televisor-Samsung-Smart-TV-75-QLED-4K-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "52604068-6315-4dbb-9488-ae75b5d017a3",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "603dafa1-f2c7-4728-a39d-fa5add9e7e1f",
  "title": "Televisor Samsung Smart TV 65\" Neo QLED 8K Mini LED",
  "description": "TV Samsung Smart TV 65\" Neo QLED 8K Mini LED con sistema operaivo Tizen y resolución 8K Ultra HD.",
  "price": "11999",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "http://localhost:3000/api/v1/upload/1690150336777-Televisor-Samsung-Smart-TV-65-Neo-QLED-8K-Mini-LED-1.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690150347269-Televisor-Samsung-Smart-TV-65-Neo-QLED-8K-Mini-LED-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690150354323-Televisor-Samsung-Smart-TV-65-Neo-QLED-8K-Mini-LED-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "a7c2b502-a145-4372-b219-383981df54ea",
  "stock": 10,
  "product_size": null
  }
  ]
  }
  ]
const smarphone =  [
  {
  "id": "31920c97-4367-45a6-99eb-eb528acf503a",
  "title": "Televisor Samsung 85\" Led Crystal UHD 4K Smart Tv",
  "description": "Tv Led 85\" Smart Crystal UHD 4K 2022 de pantalla plana con procesador de Crystal Processor 4K y sistema operativo Tizen.",
  "price": "8499",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/gsc_123413280_3680650_1?wid=800&hei=800&qlt=70"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689912467223-Televisor-Samsung-85-Led-Crystal-UHD-4K-Smart-Tv-1-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689912467166-Televisor-Samsung-85-Led-Crystal-UHD-4K-Smart-Tv-1-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "28f9afdf-0c3d-4d36-b0ce-531335ec1c09",
  "stock": 20,
  "product_size": null
  }
  ]
  },
  {
  "id": "7781086e-17e5-4c4f-9209-902320a65dda",
  "title": "Televisor Samsung Smart TV 65\" Crystal UHD 4K",
  "description": "Tv Led 65\" Crystal UHD 4K 2023 de pantalla plana y sistema operativo Tizen.",
  "price": "1749",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "https://exitocol.vtexassets.com/arquivos/ids/18574642/celular-samsung-galaxy-a54-256gb-8gb-ram-blanco.jpg?v=638210560834430000"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962749203-Televisor-Samsung-Smart-TV-65-Crystal-UHD-4K-1-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962757318-Televisor-Samsung-Smart-TV-65-Crystal-UHD-4K-1-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "50023a86-d004-4195-b50a-3e96f4986a59",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "e3fb1faf-72ee-486d-b36f-9206c8c0b000",
  "title": "Televisor Samsung 55\" QLED 4K Smart Tv",
  "description": "Tv Led 55\" QLED 4K UHD 2022 de pantalla plana y sistema operativo Tizen.",
  "price": "1699",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/882720682_01?wid=240&hei=240&qlt=70&fmt=webp"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962722090-Televisor-Samsung-Smart-TV-55-QLED-4K-1-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1689962731191-Televisor-Samsung-Smart-TV-55-QLED-4K-1-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "4624be01-d3b9-43fb-a8f8-fa606e3af80a",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "ecafb15b-850d-4dcc-832d-46c01661afaf",
  "title": "Televisor Samsung 75\" QLED 4K Smart Tv",
  "description": "Tv Led 75\" QLED 4K UHD 2022 de pantalla plana y sistema operativo Tizen.",
  "price": "4199",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "http://localhost:3000/api/v1/upload/1690144728024-Televisor-Samsung-Smart-TV-75-QLED-4K-1.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690144740987-Televisor-Samsung-Smart-TV-75-QLED-4K-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690144751838-Televisor-Samsung-Smart-TV-75-QLED-4K-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "52604068-6315-4dbb-9488-ae75b5d017a3",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "603dafa1-f2c7-4728-a39d-fa5add9e7e1f",
  "title": "Televisor Samsung Smart TV 65\" Neo QLED 8K Mini LED",
  "description": "TV Samsung Smart TV 65\" Neo QLED 8K Mini LED con sistema operaivo Tizen y resolución 8K Ultra HD.",
  "price": "11999",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "televisores"
  },
  "brand": {
  "name": "samsung"
  },
  "products_imgs": [
  {
  "url": "http://localhost:3000/api/v1/upload/1690150336777-Televisor-Samsung-Smart-TV-65-Neo-QLED-8K-Mini-LED-1.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690150347269-Televisor-Samsung-Smart-TV-65-Neo-QLED-8K-Mini-LED-2.jpg"
  },
  {
  "url": "http://localhost:3000/api/v1/upload/1690150354323-Televisor-Samsung-Smart-TV-65-Neo-QLED-8K-Mini-LED-3.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "a7c2b502-a145-4372-b219-383981df54ea",
  "stock": 10,
  "product_size": null
  }
  ]
  }
  ]

const latop =[
  {
  "id": "31920c97-4367-45a6-99eb-eb528acf503a",
  "title": "MSI THIN GF63 LAPTOP GAMER 15.6' 16:9 FHD 144HZ INTEL CORE I7 16GB RAM 1TB SSD RTX 4060 BLACK (2023)",
  "description": "La MSI Thin GF63 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Su pantalla LED de 15.6' y 1920x1080 px de resolución te brindará colores más vivos y definidos. Su procesador Intel Core i7, está pensado para aquellas personas generadoras y consumidoras de contenidos.",
  "price": "7845",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "laptop"
  },
  "brand": {
  "name": "msi"
  },
  "products_imgs": [
  {
  "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FB0BT3CD75G_1.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=72e5ee0058f018d59cea710de40e5924"
  },
  {
  "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FB0BT3CD75G_2.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=19f569b79a64226bd0b9df67bcd31396"
  },
  {
  "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FB0BT3CD75G_5.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=5f79f11c9daa870b20191b3d5fe464f7"
  },
  {
    "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FB0BT3CD75G_5.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=5f79f11c9daa870b20191b3d5fe464f7"
  }
  ],
  "product_stocks": [
  {
  "id": "28f9afdf-0c3d-4d36-b0ce-531335ec1c09",
  "stock": 20,
  "product_size": null
  }
  ]
  },
  {
  "id": "7781086e-17e5-4c4f-9209-902320a65dda",
  "title": "Laptop MSI Katana 15 B13VFK, i7-13620H, 16GB, SSD 512GB, 8GB RTX4060, FHD 15.6\", W11H",
  "description": "Laptop MSI Katana 15 B13VFK, i7-13620H, 16GB DDR5, SSD 512GB, 8GB RTX. Las GPU NVIDIA® GeForce RTX™ Serie 40 Laptop son el motor de los portátiles más rápidos del mundo para gamers y creadores. Están equipados con la arquitectura ultra eficiente Ada Lovelace de NVIDIA, que proporciona un salto cualitativo tanto en rendimiento como en gráficos basados en IA.",
  "price": "1749",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "laptop"
  },
  "brand": {
    "name": "msi"
  },
  "products_imgs": [
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/gsc_124186149_3886142_1?wid=1500&hei=1500&qlt=70"
  },
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/gsc_124186149_3886142_2?wid=1500&hei=1500&qlt=70"
  },
  {
  "url": "https://falabella.scene7.com/is/image/FalabellaPE/gsc_124186149_3886142_3?wid=1500&hei=1500&qlt=70"
  }
  ],
  "product_stocks": [
  {
  "id": "50023a86-d004-4195-b50a-3e96f4986a59",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "e3fb1faf-72ee-486d-b36f-9206c8c0b000",
  "title": "MSI GE76 LAPTOP GAMER 17.3' 144HZ INTEL CORE I7 16GB RAM 1TB SSD RTX 3060 RGB KEYBOARD BLACK (2021)",
  "description": "Procesador Intel Core i7-11800H de 11ª generación, 16 GB DDR4 3200 MHz de RAM, unidad de estado sólido NVMe de 1 TB. Pantalla IPS FHD (1920 x 1080) de 144 Hz, gráficos NVIDIA GeForce RTX 3060, 6 GB. Microsoft Windows 10 Home (64 bits), actualización gratuita a Windows 11 cuando esté disponible. Intel Wi-Fi 6E (2x2/160) Gig+ Bluetooth 5.2, cámara web integrada FHD de 1080p, Killer Gaming Network E3100 (10/100/1000 mbps) Ethernet LAN. 2 altavoces Dynaudio de 2 W + 2 woofers de 1 W, incluidos con tarjeta SD Tikbot de 32 GB.",
  "price": "7505",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "laptop"
  },
  "brand": {
  "name": "msi"
  },
  "products_imgs": [
  {
  "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FUF06292_1.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=6361c8c5f5c697e7fc23ca0ff0ac1ed4"
  },
  {
  "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FUF06292_4.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=cfe9ac9c6f4a4a64c89a5c433dfb3012"
  },
  {
  "url": "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FLAPTOP%2FUF06292_5.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=98594ff87bf8c1b7299d6caca54d5f15"
  }
  ],
  "product_stocks": [
  {
  "id": "4624be01-d3b9-43fb-a8f8-fa606e3af80a",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "ecafb15b-850d-4dcc-832d-46c01661afaf",
  "title": "ASUS ROG Strix G16 16 pulgadas 165Hz Intel Core i7 16GB RAM 512GB SSD RTX 4060 Eclipse Gray",
  "description": "Mejore su juego y lleve a su escuadrón con el nuevo ROG Strix G16, una poderosa computadora portátil para juegos que cuenta con Windows 11, un procesador Intel Core de 13.a generación y una GPU para computadora portátil NVIDIA GeForce RTX Serie 40. El sistema ROG Intelligent Cooling con metal líquido mejorado en la CPU y tecnología Tri-Fan garantiza que la computadora portátil pueda manejar la potencia que puede ofrecer. El rápido panel FHD de 165 Hz garantiza que no te pierdas ni un momento, y el conmutador MUX con Advanced Optimus optimiza tanto el rendimiento de los juegos como la duración de la batería.",
  "price": "7819",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "laptop"
  },
  "brand": {
  "name": "asus"
  },
  "products_imgs": [
  {
  "url": "https://promart.vteximg.com.br/arquivos/ids/7190895-1000-1000/image-6db3e208108348b69c37766f39187bf9.jpg?v=638234145440900000"
  },
  {
  "url": "https://promart.vteximg.com.br/arquivos/ids/7190899-1000-1000/image-471184d6e91e40ef96d3036178ae4f77.jpg?v=638234145441200000"
  },
  {
  "url": "https://promart.vteximg.com.br/arquivos/ids/7190892-1000-1000/image-80ea76b79b6b4459a04a6673bc7dbe16.jpg?v=638234145440570000"
  }
  ],
  "product_stocks": [
  {
  "id": "52604068-6315-4dbb-9488-ae75b5d017a3",
  "stock": 10,
  "product_size": null
  }
  ]
  },
  {
  "id": "603dafa1-f2c7-4728-a39d-fa5add9e7e1f",
  "title": "Laptop ASUS ROG Strix SCAR II GL704GV-EV057T (90NR01Y1-M01210)",
  "description": "La computadora portátil para juegos Asus ROG Strix SCAR 2 es la opción correcta para quienes buscan altos fps. La pantalla Full HD de 17,3\" tiene un tiempo de respuesta de sólo 3 ms y una frecuencia de 144 Hz. El procesador Intel Core de octava generación y los gráficos avanzados de Nvidia garantizan un funcionamiento fluido.",
  "price": "11999",
  "category": {
  "name": "tecnologia"
  },
  "sub_category": {
  "name": "laptop"
  },
  "brand": {
  "name": "asus"
  },
  "products_imgs": [
  {
  "url": "https://www.gigantti.fi/image/dv_web_D180001002184797/12824/asus-rog-strix-scar-ii-173-pelikannettava-musta--pdp_zoom-3000--pdp_main-650.jpg"
  },
  {
  "url": "https://www.gigantti.fi/image/dv_web_D180001002184798/12824/asus-rog-strix-scar-ii-173-pelikannettava-musta--pdp_zoom-3000--pdp_main-960.jpg"
  },
  {
  "url": "https://www.gigantti.fi/image/dv_web_D180001002184813/12824/asus-rog-strix-scar-ii-173-pelikannettava-musta--pdp_zoom-3000--pdp_main-650.jpg"
  }
  ],
  "product_stocks": [
  {
  "id": "a7c2b502-a145-4372-b219-383981df54ea",
  "stock": 10,
  "product_size": null
  }
  ]
  }
  ]

const newImage = [
  //['https://images.contentstack.io/v3/assets/bltb5a8befb95ca5f20/blt5eb9e4ccd1618f4c/65283f792c0536bbd4847f82/topper-full-m-121023-calzado.png?v1697492140564',],
  //['https://images.contentstack.io/v3/assets/bltb5a8befb95ca5f20/blt1b95f1e29f2651a8/65283f7931e1fa093f2acd8e/topper-full-121023-calzado.png?v1697492140564',],
  //['https://images.falabella.com/v3/assets/bltb5a8befb95ca5f20/blt67cf0dd7600153c9/652d70cafcd7b37fd904c280/hh-161023-telefonia.png?disable=upscale&format=webp&quality=70&width=1920',],
  ['https://www.theinsidersnet.com/site/public/images/pl_12/4349/201907/090712_29072019_C19_Website_Hisense_TVs_ESP_Banner.jpg',],
  ['https://i.ytimg.com/vi/KI6GmeFUklE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFsgSihlMA8=&rs=AOn4CLBmq04l6MP6hO0dixMwpX8R_pK9uA',
  ],
  ['https://lzd-img-global.slatic.net/g/p/125b6dd655d59c9e7a5728578058055e.jpg_720x720q80.jpg',
  'https://back.panafoto.com/media/wysiwyg/1_3.jpg'],
  ['https://www.olier.com.py/storage/categorias/imagen-banner-hero98-1-1693600795.png',],
  ['https://www.canal-ar.com.ar/noticias/images/c_samsung_110723_r.jpg',],
  ['https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUwVKYt8nU07w_QLTupr3pltfVSWRq-KlRQ1GyqZFOIFUCOgRGVBpETigN9D2xGPal2d_MTnGJUfIRxztP-_kIzuNz_LRn2vhPQq4wsYzy1slVqDPNysTqq7kogXEoYVywC2WVhJHtdKLRSHTMuuVOZTuFEsHFhDsZDPbKZQ6WNf-XfU8EoIS7Z8iHkw/s791/Hisense_U7_KV_AM_H_18-9.png'],

  //['https://back.panafoto.com/media/wysiwyg/1_3.jpg',],
  ['https://back.panafoto.com/media/wysiwyg/1_2_.jpg',],
  ['https://image.ceneostatic.pl/data/article_picture/5b/bd/46cb-b93b-4f6f-bf56-59db2246f540_large.jpg'],
  
  ['https://back.panafoto.com/media/wysiwyg/BrandShop/Hisense/2023-02-24-BANNER-MINI-LED_U8.jpg'],
  ['https://m.media-amazon.com/images/S/aplus-media/vc/063041c0-7452-4eec-a7b5-a274aa64becb.__CR0,0,1464,600_PT0_SX1464_V1___.jpghttps://m.media-amazon.com/images/S/aplus-media/vc/063041c0-7452-4eec-a7b5-a274aa64becb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'],
  ['https://m.media-amazon.com/images/S/aplus-media/vc/994c9952-ca8f-4f90-a4c7-c8c80b9fab65.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'],
 // ['https://m.media-amazon.com/images/S/aplus-media/vc/670870d3-d5c7-442d-8c8b-7c6e32ce1750.__CR22,0,1876,769_PT0_SX1464_V1___.jpg'],

  ['https://m.media-amazon.com/images/S/aplus-media/vc/c45d16aa-8ee5-4d37-ade8-7f57ecf9d4ca.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'],
]

const smarphoneTv = [ 
  {img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/eb9ad7ab-9c4f-4da1-a465-9e4922e705a3.__CR0,0,970,600_PT0_SX970_V1___.jpg', 
  source: [{img: 'https://back.panafoto.com/media/wysiwyg/1_2_.jpg', media: 'min-width: 930px'},]
  },
 
  {img: 'https://i0.wp.com/www.revistaonoff.es/app/uploads/2021/08/Hisense-PORTADA-web.jpg?resize=860%2C450&ssl=1', source: [
    {img: 'https://back.panafoto.com/media/wysiwyg/1_3.jpg', media: 'min-width: 930px'}
  ]},

  {img: 'https://media.pasionmovil.com/2021/07/uled-4k-hisense.jpg',
  source :[{img: 'https://back.panafoto.com/media/wysiwyg/BrandShop/Hisense/2023-02-24-BANNER-MINI-LED_U8.jpg', media : 'min-width: 900px'}]
  },
  
  {img: 'https://images.walts.com/system/hisense-brand-banner.jpg'},

  {img: 'https://www.theinsidersnet.com/site/public/images/pl_12/67/202308/101519_17082023_610_C23_Website_Hisense_TVs_ESP_Banner.jpg',
    source: [{img: 'https://m.media-amazon.com/images/S/aplus-media/vc/063041c0-7452-4eec-a7b5-a274aa64becb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg', media: 'min-width: 840px'}]
  },

  {img: 'https://www.avmagazine.it/immagini/2022_01_07_hisense_%2065a9h.jpg',
    source: [{img: 'https://m.media-amazon.com/images/S/aplus-media/vc/c45d16aa-8ee5-4d37-ade8-7f57ecf9d4ca.__CR0,0,1464,600_PT0_SX1464_V1___.jpg', media: 'min-width: 840px'}]
  },

  {img: 'https://www.theinsidersnet.com/site/public/images/pl_12/67/202303/100215_24032023_610_C23_SG_OLEDTV_UK_Banner.jpg'},

]
const banner = [
  ['https://f.fcdn.app/imgs/cd659a/www.ltienda.com.uy/lguy/7d45/original/recursos/456/1920x400/banner-0.jpg',],
  ['https://www.hisense.es/wp-content/uploads/2023/08/No2-mundial-ordenador.jpg',],
  ['https://www.loginstore.com/imagenes/banner-superior-laptops-notebooks-ofertas-2.jpg'],
]

const smarphoneBanner1 = [
  ['https://celularoutlet.com/wp-content/uploads/2023/07/banner_samsung.jpg',],

  // hasta 1100
  ['https://d30wkz0ptv5pwh.cloudfront.net/media/wysiwyg/mobileciti/landingpages/Samsung-S10-TopBanner1.jpg',],
  // desde 1100px
  ['https://image.winudf.com/v2/image/YXR3Lmh1YXdlaS5tYXRlMTAubWF0ZTEwcHJvLm5va2lhNy5tYXRlMTBwb3JzY2hlLmdhbGF4eUoyLmxlbm92b2s4Lms4cGx1cy5sYXVuY2hlci50aGVtZV9zY3JlZW5fMF8xNTEwMzEwNzYzXzA3Mg/screen-0.webp?fakeurl=1&type=.webp'],
  
  
  // hasta 860px
  ['https://clxlatin.com/wp-content/uploads/2020/05/nuevo-reto-clx-samsung-tiktok.jpg'],
  //desde 740px
  ['https://cdn.shopify.com/s/files/1/0877/3052/files/banner_coleccion-huawei_2048x2048.jpg?v=1683300821',],
  
  // hasta 1000px
  ['https://www.teknofilo.com/wp-content/uploads/2021/07/MOTOROLA_EDGE_20_KV_HORIZONTAL.jpg'],
  // 740px - 1400px
  ['https://i2.wp.com/webadictos.com/media/2021/08/motorola-edge-20-2021.jpeg?fit=1512%2C681&ssl=1'],
  
  // hasta - 1210px
  ['https://celularoutlet.com/wp-content/uploads/2023/07/banner_honor.jpg'],
  // desde  1200 or 1300px
  ['https://tienda.movistar.com.uy/media/wysiwyg/1400x350-banner-apple-libres-v4_1.jpg'],
  
  //desde 1250px - 1500
  //['https://images.squarespace-cdn.com/content/v1/5af72836ec4eb775ef56a720/1583694230076-40BYTFB9VVR9RGKVP8PL/banner+site+web+size+galaxy+a51+a50s+2-1140x380.jpg?format=1000w'], 
  
  //  hasta  880px
  //['https://tecnocat.com.mx/wp-content/uploads/2021/07/MOTOROLA_EDGE_20_LITE_KV_HORIZONTAL-1220x606-1-1024x509.png'],
  // hasta 640px
  //['https://jornada.com.bo/wp-content/uploads/2023/01/Samsung-presenta-el-Galaxy-A14-5G-disponible-en-America-Latina-a-partir-de-febrero.jpg'],
  
]

const smarphoneBanner = [
  {img: 'https://celularoutlet.com/wp-content/uploads/2023/07/banner_samsung.jpg'},
  {img: 'https://d30wkz0ptv5pwh.cloudfront.net/media/wysiwyg/mobileciti/landingpages/Samsung-S10-TopBanner1.jpg', source : [
    {img: 'https://image.winudf.com/v2/image/YXR3Lmh1YXdlaS5tYXRlMTAubWF0ZTEwcHJvLm5va2lhNy5tYXRlMTBwb3JzY2hlLmdhbGF4eUoyLmxlbm92b2s4Lms4cGx1cy5sYXVuY2hlci50aGVtZV9zY3JlZW5fMF8xNTEwMzEwNzYzXzA3Mg/screen-0.webp?fakeurl=1&type=.webp',
    media: 'min-width: 1100px'}
  ]},
  {img: 'https://clxlatin.com/wp-content/uploads/2020/05/nuevo-reto-clx-samsung-tiktok.jpg', source: [
    {img: 'https://cdn.shopify.com/s/files/1/0877/3052/files/banner_coleccion-huawei_2048x2048.jpg?v=1683300821', media: 'min-width: 860px'}
  ]},
  {img: 'https://www.teknofilo.com/wp-content/uploads/2021/07/MOTOROLA_EDGE_20_KV_HORIZONTAL.jpg', source : [
    {img: 'https://i2.wp.com/webadictos.com/media/2021/08/motorola-edge-20-2021.jpeg?fit=1512%2C681&ssl=1', media: 'min-width: 850px'}
  ]},
  {img: 'https://celularoutlet.com/wp-content/uploads/2023/07/banner_honor.jpg', source: [
    {img: 'https://tienda.movistar.com.uy/media/wysiwyg/1400x350-banner-apple-libres-v4_1.jpg', media: 'min-width: 1210px'}
  ]},
]

const latopBanner = [
  {img: 'https://www.evetech.co.za/repository/ProductImages/intel-rtx-3080-gaming-laptops-banner-980px-v1.jpg'},
  {img: 'https://www.evetech.co.za/repository/ProductImages/MSI-3080Series-RTX-Slider-Banner-980px-v01.jpg'},
  {img: 'https://m.media-amazon.com/images/S/aplus-media/vc/a9dac5b5-edad-458e-8f15-1114d449309e.__CR0,0,970,300_PT0_SX970_V1___.jpg'},
  {img: 'https://1.bp.blogspot.com/-DtFga_fvH2I/X9Lv5ZACerI/AAAAAAAAbdc/slD_FY18pboA86x8GXrV1_-nhTZBqtI5ACLcBGAsYHQ/s0/huawei-matebook-serie-laptop.webp', source: [
    {img: 'https://cdn.pccomponentes.com/img/landing/msi/store/msi-store-header-ago19.jpg', media: 'min-width: 600px'}
  ]},

  {img: 'https://blog.daraz.pk/wp-content/uploads/2020/01/Gaming_laptops_Banner.png'},
  {img: 'https://images.antonline.com/features/MSI-laptopsl-.6.23.22top-banner_1900.jpg?v=1672355335'},
  {img: 'https://compudel.com.pe/modules/labslideshow/images/d56679ff686f01d5e125154071ac69222fb6debc_COMPRA%20LO%20MEJOR.png'},
  {img: 'https://383ce1f52f.cbaul-cdnwnd.com/2f84a0a0083d5bc0de6f4899cbe45243/200000002-7eac27eac3/banner-hotspot-web-gamer04-home-marketplace-2-pfyk7yfsltlrrnzslp4pdcvepq3u7ujklxrpnb5mcw.jpg?ph=383ce1f52f'},
  {img: 'https://dlcdnwebimgs.asus.com/gain/55B5876D-2419-46EB-A5D9-B4D57B74C7DC/fwebp'},
/*
  ['https://www.evetech.co.za/repository/ProductImages/intel-rtx-3080-gaming-laptops-banner-980px-v1.jpg'],
  ['https://www.evetech.co.za/repository/ProductImages/MSI-3080Series-RTX-Slider-Banner-980px-v01.jpg'],
  ['https://m.media-amazon.com/images/S/aplus-media/vc/a9dac5b5-edad-458e-8f15-1114d449309e.__CR0,0,970,300_PT0_SX970_V1___.jpg'],
 //min-width 600px
  ['https://cdn.pccomponentes.com/img/landing/msi/store/msi-store-header-ago19.jpg'],
  ['https://1.bp.blogspot.com/-DtFga_fvH2I/X9Lv5ZACerI/AAAAAAAAbdc/slD_FY18pboA86x8GXrV1_-nhTZBqtI5ACLcBGAsYHQ/s0/huawei-matebook-serie-laptop.webp',], 

  ['https://blog.daraz.pk/wp-content/uploads/2020/01/Gaming_laptops_Banner.png',],
  ['https://images.antonline.com/features/MSI-laptopsl-.6.23.22top-banner_1900.jpg?v=1672355335'],
  
  ['https://compudel.com.pe/modules/labslideshow/images/d56679ff686f01d5e125154071ac69222fb6debc_COMPRA%20LO%20MEJOR.png'],
  ['https://383ce1f52f.cbaul-cdnwnd.com/2f84a0a0083d5bc0de6f4899cbe45243/200000002-7eac27eac3/banner-hotspot-web-gamer04-home-marketplace-2-pfyk7yfsltlrrnzslp4pdcvepq3u7ujklxrpnb5mcw.jpg?ph=383ce1f52f'],
  ['https://dlcdnwebimgs.asus.com/gain/55B5876D-2419-46EB-A5D9-B4D57B74C7DC/fwebp'],*/
]

const shirt = [
  ['https://agenciaswayonline.com/wp-content/uploads/2019/07/cel_banner.jpg',],
  ['https://www.deportescasais.es/uploads/brand/image1_row1/2/nike_banner.png',],
  ['https://unicosmoderna.com/cdn/shop/collections/BANNER-TEXTIL.jpg?v=1693585888&width=2800']
  
]
const HomeScreen = ({intervalSlider}) => {

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

  const isLoading = useSelector(state => state.isLoading)
  const [productsHome, setProductsHome] = useState()
  
  const products = useSelector(state => state.product)
  const dispatch = useDispatch()
  console.log(isLoading)
  console.log(products)

  const [productModa, setProductModa] = useState()

  const getByBrand = () => {
    axios.get('http://localhost:3000/api/v1/products/categories/tecnologia')
      .then(res => setProductModa(res.data.products))
  }

  useEffect(() => {
    if(products.length){
      console.log('first')
      let productsHome = []
      for(let i = 0; i < 8; i++){
        if(products[i]){
          productsHome.push(products[i])
        }
      }
      setProductsHome(productsHome)
    }
    if(products == ''){
      axios.get('http://localhost:3000/api/v1/products')
        .then(res => {
          let productsHome = []
          for(let i = 0; i < 8; i++){
            if(res.data.products[i]){
              productsHome.push(res.data.products[i])
            }
          }
        setProductsHome(productsHome)
        })
    }
    //getByBrand()
  }, [])

  const goTo = () => {
    scrollTo(0,0)
  }
  
  return (
    <div className='home' >
      <HomePresentation />
      <Slider img={smarphoneTv}/>
      <div style={{width: '90%',margin:'0 auto'}}>
        <SliderSimilarProducts data={tv} />
      </div>
      <Slider img={smarphoneBanner}/>
      <div style={{width: '90%',margin:'0 auto'}}>
        <SliderSimilarProducts data={smarphone} />
      </div>
      <Slider img={latopBanner}/>
      <div style={{width: '90%',margin:'0 auto'}}>
        <SliderSimilarProducts data={latop} />
      </div>

      <Slider img={shirt}/>
      <picture>
        <source srcSet="https://www.lg.com/cac_en/images/plp-b2c/oled10dp.jpg"
         media="(min-width: 600px)" />
        <img style={{width: '100%'}} src="https://www.lg.com/cac_en/images/plp-b2c/oled10dp.jpg" alt="MDN" />
      </picture>
        <HomeCategories />
        <div style={{width: '90%',margin:'0 auto'}}>

              {
                array.map((product, index) =>
                    <HomeMark 
                      product={product}
                      key={index}  
                    />
                  )
              }
              <HomeImage />
              <SliderSimilarProducts data={product} />
              <h2 className='home__subtitle'>Algunos productos : </h2>
              {/*
                !productsHome?
                  <Loading />
                :*/
                <SearchProduct productsHome={productsHome}/>
              }
              <h3 className='home__link-products'>
                <NavLink to={'/products'} onClick={goTo}>Ver mas...</NavLink>
              </h3>
          </div>
        </div>
  )
}

export default HomeScreen