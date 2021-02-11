import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import CountryItem from './CountryItem';
import COUNTRIES_QUERY from '../graphQL/countries';

export class Countries extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Countries</h1>
                <Query query={COUNTRIES_QUERY}>
                    {
                        ({ loading, error, data }) =>{
                            if(loading) return <h4>Loading ...</h4>
                            if (error) console.log(error); 
                            //console.log(data);



                            return <Fragment>
                                {
                                    data.countries.map(country => (
                                        <CountryItem key={country.code} country={country}/>
                            ))
                                }
                            </Fragment> ;
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Countries
