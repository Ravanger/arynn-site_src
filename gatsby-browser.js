import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"
import "@reach/dialog/styles.css"

export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true)
}
