import React from 'react'
import {Button} from 'react-native'
import {
	  StackNavigator,

} from 'react-navigation';


class HomeScreen extends React.Component {
	static navigationOptions = {
		    title: 'Welcome',
		  
	};
	render() {
		    const { navigate  } = this.props.navigation;
		return (
			      <Button
			        title="Go to Jane's profile"
			        onPress={() =>
							          navigate('Profile', { name: 'Jane'  })
							        }
			      />
			    
		);
		  
	}

}
class ProfileScreen extends React.Component {
	static navigationOptions = {
		    title: 'Welcome',
		  
	};
	render() {
		    const { navigate  } = this.props.navigation;
		return (
			      <Button
			        title="Go to home"
			        onPress={() =>
							          navigate('Home', { name: 'Jane'  })
							        }
			      />
			    
		);
		  
	}

}

export default StackNavigator({
	  Home: { screen: HomeScreen  },
	  Profile: { screen: ProfileScreen  },

});
