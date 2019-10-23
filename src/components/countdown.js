import React from "react"

class Countdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
    this.end = new Date(props.data.date)
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  remaining() {
    // Find the distance between now and the count down date
    const distance = this.end - this.state.date

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`
  }

  render() {
    return (
      <div style={{ "margin-bottom": "4em" }}>
        <h3>Only {this.remaining()} to go!</h3>
      </div>
    )
  }
}

export default Countdown
