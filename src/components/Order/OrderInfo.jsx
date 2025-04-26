import React from 'react'
import './style/orderInfo.css'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

const OrderInfo = ({setOrderInfo, setPayment}) => {

    const { handleSubmit, reset, register } = useForm()
    const navigate = useNavigate()


    const submit = (data) => {
        const { name, country, lastName, address, phone, dni, city, postalCode, shipment } = data
        let account = {
            country,
            name,
            lastName,
            dni,
            address,
            city,
            postalCode,
            phone,
            shipment
        }
        Cookies.set('checkout_account', JSON.stringify(account))
        console.log(account)
        console.log(data)
        //setOrderInfo(false)
        //setPayment(true)
        window.scrollTo(0,0)
        navigate(`/checkouts/payment`)
    }

  return (
    <section className='order-info'>
        <form action="" onSubmit={handleSubmit(submit)}>
            <h3>Informacion del comprador</h3>
            <h4>Forma de entrega</h4>
            <div className='order__delivery'>
                <input className='input__checkbox' 
                    name='checkbox__shipment' 
                    id='checkbox__shipment'
                    type="radio"
                    value='envio'
                    {...register("shipment")}
                    defaultChecked
                />
                <input 
                    className='input__checkbox'
                    value='recojo'
                    type="radio" 
                    name='checkbox__shipment'
                    id='checkbox__shipment' 
                    {...register("shipment")}
                />
                <label className='label__checkbox' htmlFor="checkbox__shipment">
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>Envio</p>
                </label>
            </div>
            <div className='order__address'>
                <h4 className='order__address__title'>Dirección de envio</h4>
                <div className='order__address__container'>
                    <div className='order___address__box'>
                        <input 
                            placeholder='País'
                            className='input__address'
                            type="text" 
                            {...register("country")}
                            required/>
                        <label className='label__address' htmlFor="">País/región</label>
                    </div>
                    <div className='order___address__box order__address__box-name'>
                        <input 
                            placeholder='Nombre'
                            className='input__address'
                            type="text"
                            {...register("name")}
                            required
                        />
                        <label className='label__address' >Nombre</label>
                    </div>
                    <div className='order___address__box order__address__box-lastname'>
                        <input 
                            placeholder='Apellido'
                            className='input__address'
                            type="text"
                            {...register("lastName")}
                            required
                        />
                        <label className='label__address' >Apellido</label>
                    </div>
                    <div className='order___address__box'>
                        <input 
                            placeholder='DNI'
                            className='input__address'
                            type="text"
                            {...register("dni")}
                            required/>
                        <label className='label__address' >DNI</label>
                    </div>
                    <div className='order___address__box'>
                        <input 
                            placeholder='Dirección'
                            className='input__address'
                            type="text"
                            {...register("address")}
                            required/>
                        <label className='label__address' >Dirección</label>
                    </div>
                    <div className='order___address__box'>
                        <input 
                            placeholder='Ciudad' 
                            className='input__address' 
                            type="text" 
                            {...register("city")}
                            required/>
                        <label className='label__address' >Ciudad</label>
                    </div>
                    <div className='order___address__box'>
                        <input 
                            placeholder='Código postal'
                            className='input__address' 
                            type="number" 
                            {...register("postalCode")}
                            required/>
                        <label className='label__address' >Código postal</label>
                    </div>
                    <div className='order___address__box'>
                        <input placeholder='Teléfono' 
                            className='input__address' 
                            type="number" 
                            {...register("phone")}
                            required/>
                        <label className='label__address' >Teléfono</label>
                    </div>
                </div>
            </div>
            <button className='btn-address'>
                Enviar
            </button>
        </form>
    </section>
  )
}

export default OrderInfo