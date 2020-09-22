import React, { Component } from 'react';
import items from './assets/data';

type Room = {
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

type ContextProps = {
  rooms: Room[];
  sortedRooms: Room[];
  featuredRooms: Room[];
  loading: boolean;
  getRoom: (slug: string) => Room | undefined;
};

const RoomContext = React.createContext<Partial<ContextProps>>({});

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room: Room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData = (items: any): Room[] => {
    let tempItems = items.map((item: any) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img: any) => img.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoom = (slug: string): Room | undefined => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room: Room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
