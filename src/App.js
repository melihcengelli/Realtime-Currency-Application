import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import DiamondIcon from '@mui/icons-material/Diamond';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
function App() {

  const [currency,setCurrency] = useState()
  const [inputsituation, setInputSituation] = useState(false)
  const [inputindex, setInputIndex] = useState()
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
      
      axios.get('https://api2.binance.com/api/v3/ticker/24hr')
        .then(res => {
          setCurrency([res.data])
          setIsLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
      
  },[])
  const [coininput,setCoinInput] = useState()
  const [allcoin,setAllCoin] = useState("none")
  const handleCoinInput = (event) => {
    setCoinInput(event.target.value)
  }
  
  const [choiceinputcolor,setChoiceInputColor] = useState()
  const findcoin = (string) => {
    if (currency){
      for (let i = 0; i < currency[0].length; i++) {
        if (currency[0][i].symbol==string){
          console.log("İndex: "+i)
          setInputSituation(true)
          setInputIndex(i)
          if (currency[0][i].priceChangePercent<0){
            setChoiceInputColor('red')
          } else {
            setChoiceInputColor('green')
          }
        }
      }
    }
  }
  useEffect(()=>{
    setInterval(()=>{
      axios.get('https://api2.binance.com/api/v3/ticker/24hr')
        .then(res => {
          setCurrency([res.data])
        })
        .catch(err => {
          console.log(err)
        })
    },30000)
  },[])

  
  
 

  return (
    <div className="App">
      <div>

        <div className='textarea'>
          <TextField id="filled-basic" label="Coin Kodu" color="success"   variant="filled" style={{color:'white',backgroundColor:'white',borderRadius:'25px',overflow:'hidden'}} onChange={handleCoinInput}/>
          <Button variant="outlined" color="success" style={{marginLeft:'10px',height:'50px'}} onClick={()=> findcoin(coininput)}>ARA</Button>
        </div>
        <div className='appcontainer'>
  
        </div>
        { inputsituation==true ? 
        <>
          <div id="areatitle">Aramış olduğunuz coin;</div>
          <div className='smallboxcontainer'>
            <div className='smallboxinput' style={{backgroundColor:choiceinputcolor}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}><PaidIcon style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}/>{currency && currency[0][inputindex].symbol}</div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}><DoubleArrowIcon/>{currency && currency[0][inputindex].lastPrice}</div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}>{currency && currency[0][inputindex].priceChangePercent>0 ? <ArrowUpwardIcon/>:<ArrowDownwardIcon/>}%{currency && currency[0][inputindex].priceChangePercent}</div>
            </div>
          </div></>
          : <></>
        }
        { currency && 
        <div className='smallboxcontainer'>
          <div className='smallbox'>
            <div id="coinstitle"><CurrencyBitcoinIcon style={{color:'gold',marginRight:'5px'}}/>{currency && currency[0][682].symbol}</div>
            <div id='coinrate'>{currency[0][682].priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red',fontFamily:'Montserrat'}}/><p>%{currency[0][682].priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>{currency[0][682].priceChangePercent}</p></>}</div>
            <div id='coinrate'>{currency && currency[0][682].lastPrice}</div>
          </div>
          <div className='smallbox'>
            <div id="coinstitle"><AttachMoneyIcon style={{color:'gold',marginRight:'5px'}}/>{currency && currency[0][687].symbol}</div>
            <div id='coinrate'>{currency[0][687].priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p>%{currency[0][687].priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>{currency[0][687].priceChangePercent}</p></>}</div>
            <div id='coinrate'>{currency && currency[0][687].lastPrice}</div>
          </div>
          <div className='smallbox'>
            <div id="coinstitle"><PaidIcon style={{color:'gold',marginRight:'5px'}}/>{currency && currency[0][683].symbol}</div>
            <div id='coinrate'>{currency[0][683].priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p>%{currency[0][683].priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>{currency[0][683].priceChangePercent}</p></>}</div>
            <div id='coinrate'>{currency && currency[0][683].lastPrice}</div>
          </div>
          <div className='smallbox'>
            <div id="coinstitle"><HdrAutoIcon style={{color:'gold',marginRight:'5px'}}/>{currency && currency[0][1171].symbol}</div>
            <div id='coinrate'>{currency[0][1171].priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p>%{currency[0][1171].priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>{currency[0][1171].priceChangePercent}</p></>}</div>
            <div id='coinrate'>{currency && currency[0][1171].lastPrice}</div>
          </div>
          <div className='smallbox'>
            <div id="coinstitle"><PetsIcon style={{color:'gold',marginRight:'5px'}}/>{currency && currency[0][1263].symbol}</div>
            <div id='coinrate'>{currency[0][1263].priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p>%{currency[0][1263].priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>{currency[0][1263].priceChangePercent}</p></>}</div>
            <div id='coinrate'>{currency && currency[0][1263].lastPrice}</div>
          </div>
        
        </div>
        }
        { currency &&
          <>
            <div className='smallboxcontainergreen'>
                <div id="areatitle">Değeri %10 üzerinde artanlar</div>
                <div id="boxarea">
                  {
                    currency && currency[0].map((item)=>{
                      
                      if (item.priceChangePercent>10){
                        return(
                          <div className='smallbox' style={{marginRight:'10px',backgroundColor:'green'}}>
                            <div id="coinstitle"><DiamondIcon style={{color:'gold'}}/>{item.symbol}</div>
                            <div className='smallboxdown'>
                              <div id='coinrate'>{item.priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p>%{item.priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>%{item.priceChangePercent}</p></>}</div>
                              <div id='coinrate'>{item.lastPrice}</div>
                            </div>
                          </div>
              
                        )
                      }
                      
                    })
                  }
                </div>
            </div>
          </>
        }
        
        
                { currency &&
          <>
          
          <div className='smallboxcontainerred'>
            <div id="areatitle">Değeri %10 üzerinde düşenler</div>
            <div id="boxarea">
            {
              currency && currency[0].map((item)=>{
                if (item.priceChangePercent<-10){
                  return(
                    <div className='smallbox' style={{marginRight:'10px',backgroundColor:'#84060A'}}>
                      <div id="coinstitle"><ScubaDivingIcon style={{color:'gold',marginRight:'5px'}}/>{item.symbol}</div>
                      <div id='coinrate'>{item.priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p>%{item.priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p>{item.priceChangePercent}</p></>}</div>
                      <div id='coinrate'>{item.lastPrice}</div>
                    </div>
        
                  )
                }
                
              })
            }
            </div>
          </div>
          </>
        }


        { currency && <div id="areatitle" onClick={()=>{allcoin=="flex" ? setAllCoin("none") : setAllCoin("flex")}} style={{cursor:'pointer',textAlign:'center',justifyContent:'center',alignContent:'center',alignItems:'center',display:'flex',flexDirection:'row'}}><div>{currency && (currency[0].length+" adet coin bilgisi")}</div><div><PanToolAltIcon/></div></div>}
        <div className='container' style={{display:allcoin}}>
          
          { currency && currency[0].map((item)=>{
            let choiceColor;
            {item.priceChangePercent>10 ? choiceColor="green" : choiceColor="rgb("+"3, 103, 143"+")"}

            return (
              

                  <>
                  
                  { item.lastPrice==0.00000000 ? <></> :
                    <>
                    {item.symbol=="BTCTRY" ? 
                      <div className='bitcoin' >
                        <div id='coinrateikibin'><CurrencyBitcoinIcon/>{item.symbol}<div id='coinrate'>{item.priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p style={{fontWeight:'300'}}>%{item.priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p style={{fontWeight:'300'}}>%{item.priceChangePercent}</p></>}</div></div>
                        <div id='coindetail'>
                            <div id='detailtitle'>Last Price : </div>
                            <div id='detail'>{item.lastPrice}</div>
                        </div>
                        <div id='coindetail'>
                            <div id='detailtitle'>Price Change :</div>
                            <div id='detail'>{item.priceChange}</div>
                          </div>
                        <div id='coindetail'>
                            <div id='detailtitle'>Weighted Average Price :</div>
                            <div id='detail'>{item.weightedAvgPrice}</div>
                        </div>
                        <div id='coindetail'>
                            <div id='detailtitle'>Volume : </div>
                            <div id='detail'>{item.volume}</div>
                        </div>
                      </div> 
                    : 
                      <Tooltip title={item.symbol}>
                        <div className='box' style={{backgroundColor:choiceColor}}>
                          <div id="coinrateikibin"><MonetizationOnIcon/>{item.symbol}<div id='coinrate'>{item.priceChangePercent<0 ? <><ArrowDownwardIcon style={{color:'red'}}/><p style={{fontWeight:'300'}}>%{item.priceChangePercent}</p></> : <><ArrowUpwardIcon style={{color:'#B2FDCE'}}/><p style={{fontWeight:'300'}}>%{item.priceChangePercent}</p></>}</div></div>
                          <div id='coindetail'>
                            <div id='detailtitle'>Last Price : </div>
                            <div id='detail'>{item.lastPrice}</div>
                          </div>
                          <div id='coindetail'>
                            <div id='detailtitle'>Price Change :</div>
                            <div id='detail'>{item.priceChange}</div>
                          </div>
                          <div id='coindetail'>
                            <div id='detailtitle'>Weighted Average Price :</div>
                            <div id='detail'>{item.weightedAvgPrice}</div>
                          </div>
                          <div id='coindetail'>
                            <div id='detailtitle'>Volume : </div>
                            <div id='detail'>{item.volume}</div>
                          </div>
                          
                        </div>
                      </Tooltip>}
                    </>
                  
                    
                  }
                 </>
              
            )
          })
          }
          
        </div>

      </div>
      <div>Melih Cengelli</div>

    </div>
  );
}

export default App;
