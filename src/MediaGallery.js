import React from "react";
import PropTypes from "prop-types";
import "./MediaGallery.sass";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

class MediaGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            order: 0,
            media: this.props.media
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handlePrev() {
        this.setState({
            order: this.state.order - 1
        });
    };

    handleNext() {
        this.setState({
            order: this.state.order + 1
        });
    }

    render() {
        return (
            <div>
                <h1 className="media-title">
                    {this.state.title}
                </h1>
                <div className="arrows">
                    <button onClick={this.handlePrev} disabled={this.state.order === 0} type="button" className="arrow"><BiLeftArrow size={32} /></button>
                    <button onClick={this.handleNext} disabled={this.state.order === this.state.media.length - 1} type="button" className="arrow"><BiRightArrow size={32} /></button>
                </div> 
                <div className="col">
                    <img className="media-gallery-img" src={this.state.media[this.state.order].imageUrl} alt={this.state.media[0].alt}/>
                </div>
                <h3 className="media-name">
                    {this.state.media[this.state.order].name}
                </h3>
            </div>
        );
    }
}

MediaGallery.PropTypes = {
    title: PropTypes.string,
    media: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            imageUrl: PropTypes.string,
            alt: PropTypes.string
        })
    )
};

export default MediaGallery;

