import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors'
import WithSpinner from '../../Components/WithSpinner/WithSpinner'
import CollectionPage from './CollectionPage'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
