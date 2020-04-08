import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import "@reach/dialog/styles.css"
import "./src/style/style.css"
import "./src/style/fonts.css"
import "./src/style/colours.css"

export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true)
}
