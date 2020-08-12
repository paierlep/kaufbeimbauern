import React from 'react'

import { Slide } from 'react-slideshow-image'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

import "react-slideshow-image/dist/styles.css"

export default class OsmMap extends React.Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }



    on = (newId) => {
        this.setState(state => ({activeItemId: newId}))
    }

    printContents = (items) => {
        return <div>
            {items.map((item, index) =>
                <span key={index}>{item}</span>
            )}
            </div>
    }

    printPayments = (items) => {
        return <div>
            {items.map((item, index) =>
                <span key={index}>{item}</span>
            )}
            </div>
    }

    printContact = (contact) => {

        let web = ""
        let mail = ""
        let phone = ""

        if (contact.web) {
            web = <span>Web: <a href={contact.web}>{contact.web}</a></span>
        }

        if (contact.phone) {
            phone = <span>Phone: {contact.phone}</span>
        }

        if (contact.mail) {
            mail = <span>Mail: <a href={contact.mail}>{contact.mail}</a></span>
        }

        return <span>
            {web}
        {phone}
        {mail}
            </span>
    }

    render() {
        if (this.props.id < 0)
        {
            return (<div></div>)
        }
        else if (!(this.props.id in this.props.data)) {
            // TODO error
            return (<div></div>)
        }

        const item = this.props.data[this.props.id]

        let hasMultipleImages = false
        if (this.props.data[this.props.id].images !== undefined &&
            this.props.data[this.props.id].images.length > 1) {
            hasMultipleImages = true
        }

        const properties = {
            duration: 5000,
            autoplay: false,
            transitionDuration: 500,
            arrows: hasMultipleImages,
            infinite: true,
        };

        return (
            <section id="detail-view">

            <IconButton color="primary" onClick={this.props.onClose}>
            <Icon className="fa fa-window-close"/>
            </IconButton>

            <div className="slide-container">
            {item.images &&
                <Slide ref={this.slideRef} {...properties}>
                {item.images.map((image, index) => (
                    <div key={index} className="each-slide">
                    <img className="lazy"
                         src={process.env.PUBLIC_URL + "/images/" + image.url}
                         alt={image.alt} />
                    </div>
                ))}
                </Slide>
            }
            </div>

            <section className="details content-box">
            <h2 className="title">{item.title}</h2>
            {item.description && <span className="description">{item.description}</span> }
            {item.openingHours && <span className="opening-hours">Öffnungszeiten: {item.openingHours}</span> }
            </section>

            {item.location &&
                <section className="location content-box">
                <h3>Wo:</h3>
                <span>{item.location.street}, {item.location.zip} {item.location.city}</span>
                <span>{item.location.description}</span>
                </section>
            }

            {item.contents &&
                    <section className="contents content-box">
                    <h3>Was:</h3>
                    {this.printContents(item.contents)}
                    </section>
            }

            {item.payment &&
                    <section className="contents content-box">
                    <h3>Wie bezahlen:</h3>
                    {this.printPayments(item.payment)}
                    </section>
            }

            {item.contact &&
                    <section className="contact content-box">
                    <h3>Kontakt:</h3>
                    {this.printContact(item.contact)}
                    </section>
            }
            </section>
        )
    }
}
