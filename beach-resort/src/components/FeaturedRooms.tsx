import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);
    return (
      <div>Featured Rooms <Loading /></div>
    );
  }
}

export default FeaturedRooms;