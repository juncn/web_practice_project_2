import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../assets/images/room-1.jpeg';
import { Room } from '../types';

interface Props {
  room: Room;
};

const RoomCard = ({ room }: Props) => {
  const { name, slug, images, price } = room;
  return (
    <article>
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default RoomCard;
