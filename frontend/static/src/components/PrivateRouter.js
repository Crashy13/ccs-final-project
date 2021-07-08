import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute ({children, ...rest}) {
  return(
    <Route {...rest} render={() => {
      return !!Cookies.get('Authorization') === true
      ? children
      : <Redirect to='/' />
    }} />
  )
}

export default PrivateRoute
