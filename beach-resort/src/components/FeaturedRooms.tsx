import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Title from './Title';
import Room from './RoomCard';

interface RoomType {
  breakfast: boolean;
  capacity: number;
  description: string;
  extras: [];
  featured: boolean;
  id: string;
  images: [];
  name: string;
  pets: boolean;
  price: number;
  size: number;
  slug: string;
  type: string;
};

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms, loading } = this.context;
    const rooms = featuredRooms.map((room: RoomType) => {
      return <Room key={room.id} room={room} />;
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
