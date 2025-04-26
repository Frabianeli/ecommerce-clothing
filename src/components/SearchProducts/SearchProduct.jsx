import React, { useEffect } from 'react'
import SearchProductCard from './SearchProductCard'
import './style/searchProductCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { setProduct } from '../../store/slices/products'

const p = [
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

const SearchProduct = ({cart, productsHome}) => {

  const products = useSelector(state => state.product)
  const search = useSelector(state => state.search)
  const [ searchParams ] = useSearchParams()
  const querySearch = searchParams.get('search')
  console.log('querySearch', querySearch)
  const location = useLocation()
  const dispatch = useDispatch()
  console.log('PRODUCTS-ALL', products)
 /* 
    console.log('product', products)
  useEffect(() => {
    console.log('USEEFECT-------SEARCH---PR')
    const pathParts = location.pathname.split('/')
    console.log('---------PATH-------------',pathParts)
    if(pathParts.length > 2){
      console.log('ENRTRE')
      const lastPathPart = pathParts[pathParts.length - 1]
      const arrayProduct = [...products]
      console.log(arrayProduct)
      const filter = arrayProduct.filter(e => e.category.name == lastPathPart)
      console.log('filter', filter)
      if(filter.length){
        dispatch(setProduct(filter))
      }
    }
  }, [location])*/

  const conditionSearch = () => {
    if(querySearch && products.length){
      return products.map((e, i )=>
              <SearchProductCard 
                cart={cart}
                key={i}
                product={e}
              />)
    } else if (!querySearch && products.length){
      console.log('ENTRE EN PRODUCT-LENGTH')
      return products?.map((e, i )=>
              <SearchProductCard 
                cart={cart}
                key={i}
                product={e}
              />)
    } else {
      console.log('ELSE PRODUCTS')
      return <h1>No hay productos</h1>
    }
  }
  
  return (
    <section className='container-product'>
        {
          productsHome &&
          productsHome.map((e, i )=>
          <SearchProductCard 
            key={i}
            product={e}
          />)
        }
        { 
          !productsHome &&
          conditionSearch()
        }
        {/*
          p.map((e, i )=>
          <SearchProductCard 
            key={i}
            product={e}
          />)
        */}
    </section>
  )
}

export default SearchProduct