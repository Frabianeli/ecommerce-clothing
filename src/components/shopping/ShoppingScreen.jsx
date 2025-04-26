import axios from 'axios'
import { useEffect, useState } from 'react'
import { getConfig } from '../../utils/getConfig'
import ShoppingCard from './ShoppingCard'
import './style/shoppingScreen.css'
import Loading from '../Shared/Loading'

const ShoppingScreen = ({intervalSlider}) => {

  const [payments, setPayments] = useState()
  const [loading, setLoading] = useState(true)

  clearInterval(intervalSlider.current)

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/payments', getConfig())
      .then(res => {
        setPayments(res.data.payments_date)
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  console.log('PAYMENTS', payments)
  return (
    <div className='purchases'>
      {
        payments &&
          <>
            <h2 className='purchases__title'>My Purchases</h2>
            <div className='purchases__container'>
              {
                payments?.map((payment) => (
                  <ShoppingCard 
                    key={payment.id}
                    product={payment}
                  />
                ))
              }
            </div>
          </>
      }
      {
        loading &&
        <Loading screen={true}/>
      }
      {
        !loading && !payments &&
        <h2>NO TIENES PAGOS</h2>
      }
    </div>
  )
}

export default ShoppingScreen 