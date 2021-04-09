import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Title from './Title';
import Roomcard from './RoomCard';
import { Room } from '../types';

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms, loading } = this.context;
    const rooms = featuredRooms.map((room: Room) => {
      return <Roomcard key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
