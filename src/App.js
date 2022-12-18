import React, {useEffect, useState } from 'react';
import './App.css';

//FIRST HOMEWORK

// const Parent = ()=> {const usersArray = [
//   // { id:1, name: 'Veronika'}, 
//   // { id:2, name: 'Someone'}
// ]
//   return (
//    <>
//   <Child usersArray = {usersArray} isUserLoggedIn = {true} />
//   </>
//   );
// }



// const Child = ({usersArray, isUserLoggedIn})=>{
//   if(!isUserLoggedIn){
//     return <h1>You aren't authorized</h1>
//   }


//   return (
//   <div>
// {usersArray.length > 0 ? (
//    <>
// {usersArray.map((item)=>{
//   return <h1 key={item.id}>{item.name}</h1>;
//    })} 
//   </>
//   ): (  <h1>array is empty</h1> 
//   )}
//   </div>
//   );
  
// };

// const App=() => {
//   return <div> <Parent/></div>
// }
// function App() {
//   return (
//     <div className="App">
//      <h1>hello Veronika</h1>
//     </div>
//   );
// }



//SECOND HOMEWORK
// const Wrapper=({children})=>{
// return <div>
//   <Navbar/>
//   {children}
//   <Footer/>
// </div>
// }

// const Navbar=()=>{
//   return <h1>some text here</h1>
// }

// const Footer=()=>{
//   return <h1>some other text here</h1>
// }


// const App=() => {
//   return <div> <Wrapper>
//     <h1>veronique</h1>
//     <h2>idontknowwhat</h2>
//     <div> <p>lorem ipsum</p> </div>
//   </Wrapper>

//   </div>
// }


//NEW WORKSHOP
// const generateUsers = () => {
//   let users = [ 'someone', 'someone1', 'someone2', 'someone3', 'someonehelpme'
//   ];

 
//   return users;

// };


// function App() {
//   const [x, setX] = useState([]);
//   useEffect(() => {
//     setX(generateUsers());
//   }, []);
  
 
//   return (
//     <>
//     <ul>
//     {x.map((a, b) => {
//         return <li key={a}>{b}</li>;
//       })}
//     </ul>
//     <button onClick={ihavenoidea}> This button should delete some users, but guess what</button>
     
//     </>
//   );
// }



// // const generateUsers = ()=>{
// // const users = ['someone', 'someone1', 'someone2', 'someone3'];
// // // for(let item of Users){
// // //   console.log(item.length);
// // // }
// // }

// // const App=() => {
  
  
  
 

//   // } [x, setX]= useState(10);

//   //  const clickHandler = ()=>{
//   //   // setX(x+1);
//   //   setX((prevX)=> prevX-1)
//   //  }
    
  
//     return <div> 
//       {users}
     

//   {/* <h1> users left {x}  </h1>
//   <button onClick={clickHandler}>
//     Click me
//   </button> */}

//     </div>


// }



const validation = (values) => {
  const error = {};
  if (!values.name || values.name.length < 4) {
    error.name = " name must be more than 4 symbols";
  }
  if (!values.surname || values.surname.length < 4) {
    error.surname = "surname must be more than 4 symbols";
  }
  if (values.email && !values.email.includes("@")) {
    error.email = "your email must include @";
  }
  if (!values.age || values.age < 18) {
    error.age = "username should be 18+";
  }
  if (!values.gender) {
    error.gender = "gender is required";
  }
  
  return error;
};

function App() {
  const [x, setX] = useState([]);
  const [y, setY] = useState(false);
  const [Z, setZ] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
    gender: "",
  });
  
}

export default App;
