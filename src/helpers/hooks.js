import { useEffect, useState } from "react";
import { InMemoryCache, ApolloClient} from '@apollo/client';
import { GqlQueries } from '../queries';

const useCalculations = (loanAmount,downPayment,loanTerm,propertyTax)=>{
    /** 
     * X= (loanAmount-downPayment) * (P + (P/((1+P)^loanTerm-1))); 
     * P = propertyTax/100/12 - (tax per month)
     * */
    const [X,setX] = useState();
    
    useEffect(()=>{
        const P = propertyTax/100/12;
        const S = loanAmount-downPayment;
        const X = (S * (P + (P/(Math.pow((1+P),loanTerm)-1))));
        setX(Number((X/1000).toFixed(3)))
    },[loanAmount,downPayment,loanTerm,propertyTax])
    
    return {
        result:X
    }
}
const useCreateOffers = ()=>{
    const client = new ApolloClient({
      cache:new InMemoryCache(),
    })
  
    useEffect(()=>{
      client.writeQuery({
        query:GqlQueries.WRITE_OFFER,
        data:{
          offer:[{
            __typename:'Offer',
            id:1,
            title:'UniCredit Bank',
            monthlyPayment:682.75,
            rateType:'30 year fixed',
            totalFees:'1,424',
            initialRate:1.29,
            followOnRate:5.14,
            aprc:4.57,
            trueCost:'17,810.09',
            aditionalInfo:`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit`
          },{
            __typename:'Offer',
            id:2,
            title:'Otp Bank',
            monthlyPayment:682.75,
            rateType:'30 year fixed',
            totalFees:'1,424',
            initialRate:1.29,
            followOnRate:5.14,
            aprc:4.57,
            trueCost:'17,810.09',
            aditionalInfo:`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit`
          }]
        },
        variables:{}
      })
    })
    return client
  }
export const CustomHooks = {
    useCalculations,
    useCreateOffers
}