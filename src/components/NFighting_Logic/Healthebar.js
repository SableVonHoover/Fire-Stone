import { View, Animated } from "react-native"; 
import CustomText from "../CustomText";

const available_width = 100; // add this
    class HealthBar extends Component {
        state = {
            currentHealth: this.props.currentHealth // represents the Pokemon's current health
          };
    
          constructor(props) {
            super(props);
            this.currentHealth = new Animated.Value(this.props.currentHealth); // add this
          }
          getCurrentHealthStyles = () => {
            var animated_width = this.currentHealth.interpolate({
              inputRange: [0, 250, 500],
              outputRange: [0, available_width / 2, available_width]
            });
      
            const color_animation = this.currentHealth.interpolate({
              inputRange: [0, 250, 500],
              outputRange: [
                "rgb(199, 45, 50)",
                "rgb(224, 150, 39)",
                "rgb(101, 203, 25)"
              ]
            });
      
            return {
              width: animated_width,
              height: 8, //height of the health bar
              backgroundColor: color_animation
            };
          };
        render() {
          const { label, currentHealth, totalHealth } = this.props;

        }
    }
      return (
        <View>
          <CustomText styles={styles.label}>{label}</CustomText>
          <View style={styles.container}>
            <View style={styles.rail}>
              <Animated.View style={[this.getCurrentHealthStyles()]} />
            </View>
            <View style={styles.percent}>
              <CustomText styles={styles.percentText}>
                {parseInt(this.state.currentHealth / 5)}%
              </CustomText>
            </View>
          </View>
        </View>
      );
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentHealth !== this.props.currentHealth) { // check if health is updated
          Animated.timing(this.currentHealth, {
            duration: 1500, // 1.5 seconds
            toValue: this.props.currentHealth // final health when the animation finishes
          }).start(); // start the animation
  
          this.currentHealth.addListener(progress => {
            this.setState({
              currentHealth: progress.value
            });
          });
        }
      }