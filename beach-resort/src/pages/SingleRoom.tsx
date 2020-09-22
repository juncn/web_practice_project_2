import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { RoomContext } from '../Context';

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

type State = {
  slug: string;
};

class SingleRoom extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return !room ? (
      <div className="error">
        <h3>No such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    ) : (
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default SingleRoom;
