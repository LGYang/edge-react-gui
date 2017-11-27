import {connect} from 'react-redux'
import WalletListTokenRow from './WalletListTokenRow.ui'
import type {AbcDenomination} from 'airbitz-core-js'
import * as SETTINGS_SELECTORS from '../../../../Settings/selectors'
import {selectWallet} from '../../../../Wallets/action'

const mapStateToProps = (state, ownProps) => {
  let currencyCode:string = ownProps.currencyCode
  if (currencyCode === 'SUB') currencyCode = 'ETH' // this needs to be changed, multiplier saved to settings.js
  let displayDenomination:AbcDenomination = SETTINGS_SELECTORS.getDisplayDenomination(state, currencyCode)

  return {
    displayDenomination
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectWallet: (walletId, currencyCode) => dispatch(selectWallet(walletId, currencyCode))
})

export default connect(mapStateToProps, mapDispatchToProps)(WalletListTokenRow)
