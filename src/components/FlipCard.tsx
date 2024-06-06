import React, { Component } from 'react'

import ReactCardFlip from 'react-card-flip';

type Props = {
  image: string
};

type State = {
  isFlipped: boolean;
};

class FlipCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip containerClassName='h-64 w-48' isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div className='h-full w-full'>
        <button className='h-full w-full' onClick={this.handleClick}>
            <img className='h-full w-full' src="/images/card.png" alt="" />
          </button>
        </div>

        <div className="h-full w-full">
          <button className='h-full w-full' onClick={this.handleClick}>
            <img className='w-full h-full' src={this.props.image} alt="" />
          </button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default FlipCard;