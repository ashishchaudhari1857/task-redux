import classes from './Counter.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state=> state.counter);
  const dispatch=useDispatch()
   const incremetHandler=()=>{
     dispatch({type:"increment"})
   }
   const DecrementHandler=()=>{
    dispatch({type:"decrement"})
  }
  const increment=()=>{
      dispatch({type:"incrementbypayload" ,value:5})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

     <button onClick={incremetHandler} ></button> 
      <button onClick={DecrementHandler}></button> 
      <div>bjhbdfjasj</div>
      <button onClick={increment}></button> 
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
