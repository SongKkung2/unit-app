import './App.css';
import {useState} from 'react';

function App() {
  const [centimeter, setCentimeter] = useState("0")
  const [status, setStatus] = useState(false)
  const [inch, setInch] = useState("0")
  const reset = () =>{
    setCentimeter('값을 입력하세요.')
    setInch('inch로 환산됩니다.')
  }
  const handleChange = (e) => {
    setCentimeter(e.target.value);
  }
  const handleChangeInch = (e) => {
    setInch(e.target.value);
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();//이벤트 전파를 막는 메소드 새로고침을 못하게 막아줌
    setInch(centimeter / 2.54)
  }
  const swichInput = () =>{
    setStatus(!status)
  }

  return (
    <div className="App">
      <h1 className='title'>단위 환산</h1>
      <p className='sub-title'>cm을 inch로 환산하기!</p>
      {/* 1인치 = 2.54센치 */}
      <form onSubmit={handleSubmit}>
        <div className="input-wrap">
          <label><input type="number" value={centimeter} onChange={handleChange} disabled={!status} placeholder='cm값을 입력하세요' />Cm</label>
          <label><input type="number" value={inch} placeholder='inch로 환산됩니다.' onChange={handleChangeInch} disabled={status}/>Inch</label>
        </div>
        <div className="btn-wrap">
          <input className='ok' type="submit" value="환산하기"/>
          <input className='reset' onClick={reset} type="submit" value="초기화 하기"/>
          <input onClick={swichInput} type="submit" value="계산 반대로 하기"/>
        </div>
      </form>
      <p className='footer'>&copy; 채은이 만듦</p>
    </div>
  );
}

export default App;
