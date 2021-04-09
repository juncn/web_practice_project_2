import React, { useContext } from 'react';
import { Room } from '../types';
import { RoomContext } from '../Context';
import Title from './Title';

interface Props {
  rooms?: Room[]
}

const getUniqueRoomType = (rooms: any[], value: string,): string[] => {
  return [...new Set(rooms.map(room => room[value]))];
}

const RoomFilter = ({ rooms }: Props) => {

  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = ['all', ...getUniqueRoomType(rooms as any, 'type')];
  let roomCapacity = getUniqueRoomType(rooms as any, 'capacity');
  const typesHTML = types.map((type, index) => {
    return <option value={type} key={index}>{type}</option>;
  });
  const roomCapacityHTML = roomCapacity.map((capacity, index) => {
    return <option value={capacity} key={index}>{capacity}</option>;
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type"
            id="type" 
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {typesHTML}
          </select>
        </div>
        {/* end select type*/}
        {/* guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select 
            name="capacity"
            id="capacity" 
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {roomCapacityHTML}
          </select>
        </div>
        {/* end guest*/}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input 
            className="form-control"
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  )
}

export default RoomFilter;