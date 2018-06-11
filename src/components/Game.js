import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import mapStateToProps from '../utils/mapStateToProps';
import mapDispatchToProps from '../utils/mapDispatchToProps';

import Header from './Header';

class Game extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}

const View = styled.div`
  background: black;
  color: white;
  min-height: 100%;
  padding: 8px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
