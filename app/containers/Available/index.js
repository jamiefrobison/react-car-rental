/*
 *
 * Available
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectAvailable from './selectors';
import { loadAction } from './actions'
import { Icon,Image, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'
import CardCar from '../../components/CardCar'
import NewSearch from '../../components/NewSearch'


export class Available extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Helmet
          title="Available"
          meta={[
            { name: 'description', content: 'Description of Available' },
          ]}
        />
        <div className="divSearchAvailable">
          <NewSearch />
        </div>
        <Header as="h3" className="titleCar">Mini</Header>
        <Grid columns={5} className="contentAvailable">
          <Grid.Row id='rowAvailable'>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
          </Grid.Row>
        </Grid>
        <Header as="h3" className="titleCar">Economico</Header>
        <Grid columns={5} className="contentAvailable">
          <Grid.Row id='rowAvailable'>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

Available.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Available: makeSelectAvailable(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAction: (type)=>{
      dispatch(loadAction(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Available);
