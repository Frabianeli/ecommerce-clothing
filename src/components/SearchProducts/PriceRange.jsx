import Slider from 'rc-slider';
import React, { useEffect, useState } from 'react'

const PriceRange = () => {
    const [min, setMin] = useState();
    const [max, setMax] = useState(500);
  
    const handleMinChange = (event) => {
        console.log(event)
        console.log('MIN')
        setMin(event);
    };
  
    const handleMaxChange = (event) => {
        console.log('MAXxxxx')
        console.log(event)
      //setMax(event);
    };
    const handleChange = (event) => {
        console.log('SOY EL CAMBIO')
    }
    useEffect(() =>{
        console.log('MINIMO', min)
        let refresh = false
        const submit = setTimeout(()=>{
            console.log('---REFRESH---')
        },2000)
        return console.log('RETURN-USEEFECT'),clearTimeout(submit)
    }, [min])

  return (
    <Slider
        range    
        defaultValue={[0, 500]}
        allowCross={false}
        min={0}
        max={500}
        onChange={handleMinChange}
        style={{backgroundColor: 'crimson', height: '30px'}}
        dotStyle={{backgroundColor:'blue'}}
        onFocus={handleChange}
        onClick={() => console.log('HOVER')}
    />
  )
}

export default PriceRange