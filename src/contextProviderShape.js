import { PropTypes } from 'react'

export default PropTypes.shape({
  location: PropTypes.number,
  locationFloat: PropTypes.number,
  end: PropTypes.number,
  viewHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
  scrollable: PropTypes.bool,
  moving: PropTypes.bool,
  resting: PropTypes.bool,
  onStart: PropTypes.bool,
  onMiddle: PropTypes.bool,
  onEnd: PropTypes.bool,
  touch: PropTypes.object,
  children: PropTypes.array,
  node: PropTypes.object,
  setNode: PropTypes.func,
  unsetNode: PropTypes.func,
  setPropsToContext: PropTypes.func,
  handleScroll: PropTypes.func,
  handleWheel: PropTypes.func,
  handleTouchStart: PropTypes.func,
  handleTouchMove: PropTypes.func,
  handleTouchEnd: PropTypes.func,
  scrollTo: PropTypes.func,
  scrollToPosition: PropTypes.func,
  scrollToIndex: PropTypes.func,
  scrollToTop: PropTypes.func,
  scrollToBottom: PropTypes.func,
  scrollToName: PropTypes.func,
  findChildByName: PropTypes.func,
  scrollToElement: PropTypes.func,
  setMoving: PropTypes.func,
  setRest: PropTypes.func,
})

// export default PropTypes.object
