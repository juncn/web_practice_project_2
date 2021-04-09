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
  type: string;
  capacity: number;
  price: number;
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
  breakfast: boolean;
  pets: boolean;
  getRoom: (slug: string) => Room | undefined;
  handleChange: (event: any) => void;
};

const RoomContext = React.createContext<Partial<ContextProps>>({});

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room: Room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
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

  // TODO: fix type
  handleChange = (event: any) => {
    const target = event.target;
    const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, this.filterRooms);
  }

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
    let filteredRooms: Room[] = [...rooms];
    capacity = parseInt(capacity.toString());
    price = parseInt(price.toString());
    minSize = parseInt(minSize.toString());
    maxSize = parseInt(maxSize.toString());

    // Filter by type
    if (type !== 'all') {
      filteredRooms = filteredRooms.filter(room => room.type === type);
    }
    // Filter by capacity
    if (capacity !== 1) {
      filteredRooms = filteredRooms.filter(room => room.capacity >= capacity);
    }
    // Filter by price
    filteredRooms = filteredRooms.filter(room => room.price <= price);
    // Filter by size
    filteredRooms = filteredRooms.filter(room => room.size >= minSize && room.size <= maxSize);
    // Filter by breakfast
    if (breakfast) {
      filteredRooms = filteredRooms.filter(room => room.breakfast === true);
    }
    // Filter by pets
    if (pets) {
      filteredRooms = filteredRooms.filter(room => room.pets === true);
    }
    
    this.setState({
      sortedRooms: filteredRooms
    });
  }

  render() {
    return (
      <RoomContext.Provider 
        value={{
          ...this.state, 
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export const withRoomConsumer = (Component: any) => {
  const ConsumerWrapper = (props: any) => {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  }
  return ConsumerWrapper;
}

export { RoomProvider, RoomConsumer, RoomContext };
