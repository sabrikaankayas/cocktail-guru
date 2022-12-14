import React, { useEffect, useState } from 'react'


const Random2 = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    const fetchData = async () => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        const json = await res.json()
        setData(json)
    }

  return (
    <div className='detailed__container'>
        {data && data.drinks.map(cock => (
            <div className='detailed__card'>
                <div className='top'>
                    <h2>{cock.strDrink}</h2>
                </div>
                <img src={cock.strDrinkThumb} alt="" />
                <div className='mid'>
                {cock.strIngredient1 && <h4>{cock.strIngredient1} <span>{cock.strMeasure1}</span></h4>}
                {cock.strIngredient2 && <h4>{cock.strIngredient2} <span>{cock.strMeasure2}</span></h4>}
                {cock.strIngredient3 && <h4>{cock.strIngredient3} <span>{cock.strMeasure3}</span></h4>}
                {cock.strIngredient4 && <h4>{cock.strIngredient4} <span>{cock.strMeasure4}</span></h4>}
                {cock.strIngredient5 && <h4>{cock.strIngredient5} <span>{cock.strMeasure5}</span></h4>}
                {cock.strIngredient6 && <h4>{cock.strIngredient6} <span>{cock.strMeasure6}</span></h4>}
                {cock.strIngredient7 && <h4>{cock.strIngredient7} <span>{cock.strMeasure7}</span></h4>}
                {cock.strIngredient8 && <h4>{cock.strIngredient8} <span>{cock.strMeasure8}</span></h4>}
                {cock.strIngredient9 && <h4>{cock.strIngredient9} <span>{cock.strMeasure9}</span></h4>}
                {cock.strIngredient10 && <h4>{cock.strIngredient10} <span>{cock.strMeasure10}</span></h4>}
                {cock.strIngredient11 && <h4>{cock.strIngredient11} <span>{cock.strMeasure11}</span></h4>}
                {cock.strIngredient12 && <h4>{cock.strIngredient12} <span>{cock.strMeasure12}</span></h4>}
                {cock.strIngredient13 && <h4>{cock.strIngredient13} <span>{cock.strMeasure13}</span></h4>}
                {cock.strIngredient14 && <h4>{cock.strIngredient14} <span>{cock.strMeasure14}</span></h4>}
                {cock.strIngredient15 && <h4>{cock.strIngredient15} <span>{cock.strMeasure15}</span></h4>}
                </div>
                <div className='bottom'>
                <h4>{cock.strInstructions}</h4>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Random2