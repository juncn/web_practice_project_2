import React from 'react';
import { Room } from '../types';
import RoomCard from './RoomCard';

interface Props {
  rooms: Room[];
}

const RoomsList = ({ rooms }: Props) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => {
          return <RoomCard key={room.id} room={room} />
        })}
      </div>
    </section>
  );
}

export default RoomsList;