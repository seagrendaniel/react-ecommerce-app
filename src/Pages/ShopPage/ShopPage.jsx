import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import WithSpinner from '../../Components/WithSpinner/WithSpinner'
import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverview.container'
import CollectionPageContainer from '../CollectionPage/CollectionPage.container'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)