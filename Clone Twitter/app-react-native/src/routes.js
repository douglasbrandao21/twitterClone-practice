/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Login from './pages/login'
import Timeline from './pages/Timeline'
import New from './pages/New'
 
const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App: createStackNavigator({
            Timeline,
            New
        })
    })
)

export default Routes