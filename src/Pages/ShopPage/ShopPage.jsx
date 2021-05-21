import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverview.container'
import CollectionPageContainer from '../CollectionPage/CollectionPage.container'

import { fetchCollectionsStart } from '../../redux/shop/shop.sagas'


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render() {
    const apple;
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)