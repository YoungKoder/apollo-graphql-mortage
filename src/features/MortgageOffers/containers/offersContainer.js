import React, { useEffect, useState } from "react"
import { useQuery,query,ApolloConsumer,gql,Query} from '@apollo/client';
import { GqlQueries } from "../../../queries";
import {OffersList} from "../components/offersList";
import {MyContext} from "../../../App";
const OffersContainerInner = ({setIsLoading})=>{
    const {error,data} = useQuery(GqlQueries.GET_OFFERS,{
        variables:{}
    });
    if (error) return `Error! ${error.message}`;

    return(
        <OffersList offers={data&&data.offer}/>
    )
}

export const OffersContainer = ()=>(
    <MyContext.Consumer>
        {value=><OffersContainerInner setIsLoading={value.handleSetLoading}/>}
    </MyContext.Consumer>
)