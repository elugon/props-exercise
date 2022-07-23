import React from "react";

export default function Card(props){

   const {name, age, isPremium, country} = props.client

   const isItPremium= isPremium ? 'Yes' : 'No'
   const theme= isPremium? 'premium' : null

   let greeting = ''
   if (country === 'de'){
       greeting = 'Hallo'
   } else if (country === 'en'){
       greeting = 'Hello'        
   } else if (country === 'fr'){
       greeting = 'Bonjour'
   } else if (country === 'es'){
       greeting='Hola'
   }

    console.log(props)

    return(
    <div className={'card '+ theme}>
    <h1>{greeting} {name}</h1>
    <h2>age: {age}</h2>
    <h2>is it a premium client? {isItPremium}</h2>
    </div>
    )
}