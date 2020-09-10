import React from 'react'
import { Route } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'

import WithSpinner from '../../Components/WithSpinner/WithSpinner'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selectors'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const {match, isCollectionFetching, isCollectionLoaded} = this.props

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}
          render={(props) =>
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
        />
        <Route path={`${match.path}/:collectionId`}
          render={(props) =>
            <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)