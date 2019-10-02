import React, { Component } from "react";
import BucketList from "../BucketList/BucketList";
import "./List.scss";
import { tourData } from "../tourData";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData
    };
  }

  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };

  render() {
    const { tours } = this.state;
    console.log(this.state.list);
    return (
      <section className="tourList">
        {tours.map(tour => (
          <BucketList key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
export default List;
