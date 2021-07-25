import { Route } from 'react-router-dom';
import {MortgageCalculatePage} from "../features/MortgageCalculator/pages";
import {MortgageOffersPage} from "../features/MortgageOffers/pages";
export const Routes = ()=>{
    return(
        <>
            <Route exact path="/" component={MortgageCalculatePage}/>
            <Route path="/offers" component={MortgageOffersPage}/>
        </>
    )
}