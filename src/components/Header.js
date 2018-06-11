import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <View>
        <Title>Dungeon!</Title>
        <Tagline>an adventure game in React</Tagline>
        <Version>v2.0.0</Version>
      </View>
    );
  }
}

const View = styled.div`
  font-family: UnifrakturMaguntia;
  text-align: center;
`;
const Title = styled.h1`
  font-style: italic;
  font-size: 35px;
  margin: 0;
`;
const Tagline = styled.h2`
  font-size: 25px;
  margin: 0;
`;
const Version = styled.div``;

export default Header;
