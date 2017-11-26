import App from './App'
import { connect } from 'react-redux'
import * as timerActions from '../../actions/timer'

const mapStateToProps = (state) => ({
  start: state.timer.start,
})

const mapDispatchToProps = (dispatch) => ({
  startTimer: () => dispatch(timerActions.start()),
  stopTimer: () => dispatch(timerActions.stop()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)