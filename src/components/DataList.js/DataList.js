import { useEffect, useState, useCallback } from "react";
import {useNavigate} from 'react-router-dom';

import "./DataList.css"

const UseFetch = () => {
    const navigate = useNavigate();

    const [text, setText] = useState("")
    const [init, setInit] = useState(false)
    const [init2, setInit2] = useState(false)
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [data3, setData3] = useState(null)
    const [data4, setData4] = useState(null)
    const [data5, setData5] = useState(null)
    const [data6, setData6] = useState(null)
    const [data7, setData7] = useState(null)
    const [data8, setData8] = useState(null)
    const [data9, setData9] = useState(null)
    const [data10, setData10] = useState(null)
    const [data11, setData11] = useState(null)
    const [data12, setData12] = useState(null)
    const [data13, setData13] = useState(null)
    const [data14, setData14] = useState(null)
    const [data15, setData15] = useState(null)
    const [data16, setData16] = useState(null)
    const [data17, setData17] = useState(null)
    const [data18, setData18] = useState(null)
    const [data19, setData19] = useState(null)
    const [data20, setData20] = useState(null)
    const [data21, setData21] = useState(null)
    const [data22, setData22] = useState(null)
    const [data23, setData23] = useState(null)
    const [data24, setData24] = useState(null)
    const [data25, setData25] = useState(null)
    const [data26, setData26] = useState(null)
    const [dataArr, setDataArr] = useState(null)
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    let url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b"
    let url3 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"
    let url4 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d"
    let url5 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e"
    let url6 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f"
    let url7 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
    let url8 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h"
    let url9 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i"
    let url10 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j"
    let url11= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k"
    let url12 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l"
    let url13 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m"
    let url14 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n"
    let url15 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o"
    let url16 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p"
    let url17= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q"
    let url18= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r"
    let url19= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s"
    let url20= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t"
    let url21= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u"
    let url22= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v"
    let url23= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w"
    let url24= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x"
    let url25= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y"
    let url26= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z"

  useEffect(() => {
    fetchData()
    fetchData2()
    fetchData3()
    fetchData4()
    fetchData5()
    fetchData6()
    fetchData7()
    fetchData8()
    fetchData9()
    fetchData10()
    fetchData11()
    fetchData12()
    fetchData13()
    fetchData14()
    fetchData15()
    fetchData16()
    fetchData17()
    fetchData18()
    fetchData19()
    fetchData20()
    // fetchData21()
    fetchData22()
    fetchData23()
    // fetchData24()
    fetchData25()
    fetchData26()
  }, [])

    const fetchData = async () => {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
    }
    const fetchData2 = async () => {
      const res = await fetch(url2)
      const json = await res.json()
      setData2(json)
    }
    const fetchData3 = async () => {
        const res = await fetch(url3)
        const json = await res.json()
      setData3(json)
    }
    const fetchData4 = async () => {
      const res = await fetch(url4)
      const json = await res.json()
      setData4(json)
    }
    const fetchData5 = async () => {
        const res = await fetch(url5)
        const json = await res.json()
      setData5(json)
    }
    const fetchData6 = async () => {
      const res = await fetch(url6)
      const json = await res.json()
      setData6(json)
    }
    const fetchData7 = async () => {
        const res = await fetch(url7)
        const json = await res.json()
        setData7(json)
    }
    const fetchData8 = async () => {
      const res = await fetch(url8)
      const json = await res.json()
      setData8(json)
    }
      const fetchData9 = async () => {
        const res = await fetch(url9)
        const json = await res.json()
        setData9(json)
    }
    const fetchData10 = async () => {
      const res = await fetch(url10)
      const json = await res.json()
      setData10(json)
    }
    const fetchData11 = async () => {
        const res = await fetch(url11)
        const json = await res.json()
        setData11(json)
    }
    const fetchData12 = async () => {
      const res = await fetch(url12)
      const json = await res.json()
      setData12(json)
    }
      const fetchData13 = async () => {
        const res = await fetch(url13)
        const json = await res.json()
        setData13(json)
    }
    const fetchData14 = async () => {
      const res = await fetch(url14)
      const json = await res.json()
      setData14(json)
    }
    const fetchData15 = async () => {
        const res = await fetch(url15)
        const json = await res.json()
        setData15(json)
    }
    const fetchData16 = async () => {
      const res = await fetch(url16)
      const json = await res.json()
      setData16(json)
    }
      const fetchData17 = async () => {
        const res = await fetch(url17)
        const json = await res.json()
        setData17(json)
    }
    const fetchData18 = async () => {
      const res = await fetch(url18)
      const json = await res.json()
      setData18(json)
    }
    const fetchData19 = async () => {
        const res = await fetch(url19)
        const json = await res.json()
        setData19(json)
    }
    const fetchData20 = async () => {
      const res = await fetch(url20)
      const json = await res.json()
      setData20(json)
    }
      const fetchData21 = async () => {
        const res = await fetch(url21)
        const json = await res.json()
        setData21(json)
    }
    const fetchData22 = async () => {
      const res = await fetch(url22)
      const json = await res.json()
      setData22(json)
    }
    const fetchData23 = async () => {
        const res = await fetch(url23)
        const json = await res.json()
        setData23(json)
    }
    const fetchData24 = async () => {
      const res = await fetch(url24)
      const json = await res.json()
      setData24(json)
    }
    const fetchData25 = async () => {
        const res = await fetch(url25)
        const json = await res.json()
        setData25(json)
    }
    const fetchData26 = async () => {
      const res = await fetch(url26)
      const json = await res.json()
      setData26(json)
    }
    
  


    const handleOnClick = useCallback((id) => navigate(`/${id}`, {replace: false}), [navigate]);


  return (
    <>
    <div className="search-container">
    <input type="text" placeholder="Search for cocktails..." onChange={(e) => setText(e.target.value)}/>
    </div>
    <div className="card-container">
        {data && data.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data2 && data2.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data3 && data3.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data4 && data4.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data5 && data5.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data6 && data6.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data7 && data7.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data8 && data8.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data9 && data9.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data10 && data10.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data11 && data11.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data12 && data12.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data13 && data13.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data14 && data14.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data15 && data15.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data16 && data16.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data17 && data17.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data18 && data18.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data19 && data19.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data20 && data20.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data21 && data21.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data22 && data22.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data23 && data23.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data24 && data24.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data25 && data25.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
        {data26 && data26.drinks.filter((drink) =>drink.strDrink.toLowerCase().includes(text.toLowerCase())).map((data) => (
            <div onClick={() => handleOnClick(data.idDrink)} className="card">
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} alt="" />
            </div>
        ))}
    </div>
    </>
  )
}

export default UseFetch
