import ShoppingCard from './ShoppingCard'
import './style/shoppingScreen.css'

const ShoppingScreen = () => {


  /*useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])*/

  const product = [
    { images : ['https://www.innvictus.com/medias/IN-DD8959-100-1.jpg?context=bWFzdGVyfGltYWdlc3w3NDA3MnxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDk1LzExMjE2ODA5NTkwODE0LmpwZ3xlZGQ4NGZkZDQ4ZjVjYzA4YjllZDg5MDhhMzVlYWM4MmYyMjNlZTk1Yjg5NWFjMzI0YmVlNTZjZmFhNTRjMGY5',
                'https://www.innvictus.com/medias/IN-DD8959-100-4.jpg?context=bWFzdGVyfGltYWdlc3w3Mzc0M3xpbWFnZS9qcGVnfGltYWdlcy9oYzYvaDM4LzExMjE2Nzc4NjU3ODIyLmpwZ3xjZTYxMGMxNGFmZmM0ZmNkZmUxZmI1ZWEwNmIwM2QxZjRlZTRkMzU1NDVlNDE0ZjAwYTFkNjgwYzg1ZTkwODRm',
                'https://www.innvictus.com/medias/IN-DD8959-100-3.jpg?context=bWFzdGVyfGltYWdlc3w3MTgyOHxpbWFnZS9qcGVnfGltYWdlcy9oMTAvaDgxLzExMjE2NzU1NTg5MTUwLmpwZ3w4ZTkyNTE2NDE1NzJkMGYzNmQxNjJjMGMyYjFmNTJjOGRkODdiNWVmY2IyNWM5Nzk5ZTRkYmFiMjc3NGFhZGI1'
        ],
        title: 'Nike air max white',
        price: 350,
        stock: 100,
        description: 'nike air max color blanco unisex',
        tallas: ['39','40', '41', '42'],
        categoria: 'tenis',
        productsInCart:{
          quantity: 5
        }
    }
]
console.log(product[0])
  const array = [1,2,3,4,5]
  return (
    <div className='purchases'>
      <h2 className='purchases__title'>My Purchases</h2>
      <div className='purchases__container'>
        {
          array?.map((a, index) => (
            <ShoppingCard 
              key={index}
              product={product[0]}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ShoppingScreen