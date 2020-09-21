import React, { Component } from 'react';
import items from './assets/data';

type Room = {
  breakfast: boolean
  capacity: number
  description: string
  extras: []
  featured: boolean
  id: string
  images: []
  name: string
  pets: boolean
  price: number
  size: number
  slug: string
  type: string
}

const RoomContext = React.createContext({
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
});

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    console.log(rooms);
    let featuredRooms = rooms.filter((room: Room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData = (items: any) => {
    let tempItems = items.map((item: any) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img: any) => img.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
