import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const COUNTRY_QUERY =gql`
query Country($code: ID!) {
    country(code: $code) {
        code
   	    name
        native
    	phone
    	capital
        currency
        
    }
  }
`;

export class Country extends Component {
    render() {
        let { code } = this.props.match.params;
        return (
            <Fragment>
                <Query query={COUNTRY_QUERY} variables={{code}}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>Loading ...</h4>
                            if (error) console.log(error); 
                            //console.log(data);

                            const { code,
   	                                name,
                                    native,
    	                            phone,
    	                            capital,
                                    currency,
                                    } = data.country;

                            return <div>
                                <h1 className="display-4 my-3">Name: {name}</h1>
                                <h4 className="mb-3">Country details:</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                    Code: {code}
                                    </li>
                                    <li className="list-group-item">
                                    Native: {native}
                                    </li>
                                    <li className="list-group-item">
                                    Phone: {phone}
                                    </li>
                                    <li className="list-group-item">
                                    Capital: {capital}
                                    </li>
                                    <li className="list-group-item">
                                    Currency: {currency}
                                    </li>
                                </ul>
                                <p/>
                                <Link to="/" className="btn btn-secondary">Back</Link>
                            </div>;
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Country
