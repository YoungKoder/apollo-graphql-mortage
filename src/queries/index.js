import { gql } from "@apollo/client";

const WRITE_OFFER = gql`
  query WriteOffer{
      offer{
          id
          title
          monthlyPayment
          rateType
          totalFees
          initialRate
          followOnRate
          aprc
          trueCost
          aditionalInfo
      }
  }
`;

const GET_OFFERS = gql`
  query GetOffers{
    offer{
        id
        title
        monthlyPayment
        rateType
        totalFees
        initialRate
        followOnRate
        aprc
        trueCost
        aditionalInfo
    }
  }
`
export const GqlQueries = {
    WRITE_OFFER,
    GET_OFFERS
}