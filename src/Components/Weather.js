import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p className="weather__key">
            {" "}
            Location:
            <span className="weather__value">
              {" "}
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.temp && <p>Temperature: {this.props.temp}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <p> Ops: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
