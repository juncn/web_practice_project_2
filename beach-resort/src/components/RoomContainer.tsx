//! First option:

import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';
import { withRoomConsumer } from '../Context';

const RoomContainer = ({context}: any) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);


//! Second options: 

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../Context';
// import Loading from './Loading';

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       { value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <div>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomContainer;