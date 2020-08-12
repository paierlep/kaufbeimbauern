import React from 'react'

import Map from './Map.js'
import Categories from './Categories.js'
import DetailView from './DetailView.js'
import Imprint from './Imprint.js'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import MatomoTracker from '@datapunt/matomo-tracker-js'

import data from '../data.json'

const tracker = new MatomoTracker({
  urlBase: 'https://analytics.cpaier.com',
  siteId: 1,
  heartBeat: {
    active: true,
    seconds: 10
  },
  linkTracking: true,
  configurations: {
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: 'POST'
  }
})

const MyAppBar = styled(AppBar)({
  background: '#006A40'
});

class Main extends React.Component {
    constructor () {
        super()
        const id = this.getCurrentActivePage(window.location.pathname)

        let imprintIsOpen = false
        if (window.location.pathname === "/kontakt") {
            imprintIsOpen = true
        }

        this.state = {
            activeItemId : id,
            activeCategories: [1, 2],

            imprintOpen : imprintIsOpen,
            filterOpen : false,

            categories: {
                "1": {
                    name: "Bauernmarkt",
                    id: 1,
                },
                "2": {
                    name: "Automat",
                    id: 2,
                }
            }
        }
    }

    getCurrentActivePage = (pathName) => {
        for (const itemId in data) {
            const itemPathName = "/" + encodeURI(data[itemId].title.replace(/\s/g, '_'))
            if (pathName === itemPathName) {
                return itemId
            }
        }
        return -1
    }

    setId = (newId, newTitle) => {
        tracker.trackEvent({
            category: 'sample-page',
            action: 'click-event',
            name: newTitle,
            value: newId,
        })

        this.setState(state => ({activeItemId: newId}))
    }

    toggleCategory = (categoryId) => {
        let cats = this.state.activeCategories
        const index = cats.indexOf(categoryId)
        if (index > -1) {
            cats.splice(index, 1)
        } else {
            cats.push(categoryId)
        }
        this.setState(state => ({activeCategories: cats}))
    }

    onImprintClose = () => {
        this.setState(state =>({imprintOpen: false}))
    }

    imprintOpen = () => {
        window.history.pushState('', '', '/kontakt')
        this.setState(state =>({imprintOpen: true}))
        tracker.trackEvent({
            category: 'sample-page',
            action: 'click-event',
            name: "imprint",
            value: 1,
        })
    }

    onFilterClose = () => {
        this.setState(state =>({filterOpen: false}))
    }

    onFilterOpen = () => {
        this.setState(state =>({filterOpen: true}))
    }

    render() {
        return (
            <div id="wrap">
            <MyAppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        <a className="title-link" href="/">Kauf beim Bauern</a>
                    </Typography>

                    <div>
                    <Button color="inherit" onClick={this.onFilterOpen}>Filter</Button>
                    <Button color="inherit" onClick={this.imprintOpen}>Kontakt</Button>
                    </div>
                </Toolbar>
            </MyAppBar>

            <section id="main-content">
            <Map data={data}
                 activeCategories={this.state.activeCategories}
                 onSelection={this.setId} />
            <DetailView data={data}
                 onClose={() => this.setId(-1)}
                 id={this.state.activeItemId} />
            </section>

            <Imprint open={this.state.imprintOpen}
                     handleClose={this.onImprintClose} />

            <Categories data={this.state.categories}
                        open={this.state.filterOpen}
                        onHandleClose={this.onFilterClose}
                        activeCategories={this.state.activeCategories}
                        toggleCategory={this.toggleCategory} />
            </div>
        )
    }
}

export default () => {
    return (
        <Main />
    )
}
