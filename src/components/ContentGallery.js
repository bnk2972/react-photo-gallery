import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class ContentGallery extends Component {
    state = {
        currentImage: 0
    };

    constructor() {
        super();
    }

    openLightbox = (event, obj) => {
        console.log(obj)
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true
        });
    }

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    render() {
        const photos_set = [
            {
                src: "http://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/20245407_1434501773282166_4562608665801984383_n.jpg?oh=56f816c72c5196c4a109a78acf5ccbd5&oe=5A9D2596",
                width: 5,
                height: 3
            },
            {
                src: "http://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/22196282_1509932522405757_5811834123958272271_n.jpg?oh=437d177ae6b2f84789f99f48a67677cd&oe=5A9DE5C4",
                width: 1,
                height: 1
            },
            {
                src: "https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/20156144_1434501789948831_1482406309705238848_n.jpg?oh=c0a6396b2540aea78d991cb5c9c74c4b&oe=5A9E28AC",
                width: 5,
                height: 3
            },
            {
                src: "https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/20229301_1434501843282159_5698478928781606794_n.jpg?oh=27458e48d66d831b2e4836959b92b975&oe=5A62D09A",
                width: 5,
                height: 3
            },
            {
                src: "https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/20245381_1434501683282175_746531997622050431_n.jpg?oh=ca05d6bfc0423f628f28023a09f5815c&oe=5A6F42C0",
                width: 5,
                height: 3
            },
            {
                src: "https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/20294207_1434501623282181_2947835043760648717_n.jpg?oh=8edd9de0514f1d69a000f3d0d0ef1340&oe=5AA028FC",
                width: 5,
                height: 3
            },
            {
                src: "https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/20293118_1434501593282184_2244054225658418553_n.jpg?oh=26ffb692cdb6f6b59388789fdb9f1c79&oe=5AA45B18",
                width: 5,
                height: 3
            }
        ];

        return (
            <div>
                <Gallery photos={photos_set} onClick={this.openLightbox} />
                <Lightbox 
                    images={photos_set}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen} 
                />
            </div>
        )
    }
}

export default ContentGallery;