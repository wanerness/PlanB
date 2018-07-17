import React,{ Component } from "react";
import { TouchableHighlight,TouchableOpacity,Text,StyleSheet } from "react-native";
import PropTypes from 'prop-types';

class CustomButton extends Component{
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
        this._enable = this._enable.bind(this);
        this._disable = this._disable.bind(this);

        this.state = {
            disable: false
        }
    }

    
    static _setDifferentButtonStyle(buttonColor, buttonRadius, buttonType, borderWidth) {

        if (buttonType == "normal") {

            return CustomButton._setDifferentStyle(buttonColor, buttonRadius, buttonColor);

        } else if (buttonType == 'stroke') {

            return CustomButton._setDifferentStyle('transparent', buttonRadius, buttonColor, borderWidth);

        } else if (buttonType == 'text') {

            return CustomButton._setDifferentStyle('transparent', 0, 'transparent');
        }
    }

    static _setDifferentStyle(backgroundColor, borderRadius, borderColor, borderWidth) {

        return {
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            borderColor: borderColor,
            borderWidth: borderWidth
        };

    }
    _onPress() {
        if (this.props.onPress) {
            this._disable();
            this.props.onPress(this._enable);
        }
    }

    _enable() {
        this.setState({
            disable: false
        });
    };

    _disable() {
        this.setState({
            disable: true
        });
    };
    _renderTouchableHighlight(selectedColor, type, style) {

        return (
            <TouchableHighlight
                underlayColor={selectedColor}
                onPress={this._onPress}
                style={[styles.container, type, style, this.state.disable && { backgroundColor: this.props.disableColor }]}
                disabled={this.state.disable}
            >
                <Text style={this.props.textStyle}>{this.props.text}</Text>

            </TouchableHighlight>
        );
    }



    _renderTouchableOpacity(type, style) {

        return (
            <TouchableOpacity
                onPress={this._onPress}
                style={[styles.container, type, style]}
                disabled={this.state.disable}
            >
                <Text style={this.props.textStyle}>{this.props.text}</Text>

            </TouchableOpacity>
        );
    }

    
    render() {

        //这里是将props中属性进行解构，es6语法，可查看阮一峰的《ES6标准与入门》
        let { selectedColor, buttonColor, buttonRadius, buttonType, borderWidth, style } = this.props;
        let type = CustomButton._setDifferentButtonStyle(buttonColor, buttonRadius, buttonType, borderWidth);

        if (selectedColor) {
            {
                return this._renderTouchableHighlight(selectedColor, type, style);
            }
        } else {
            {
                return this._renderTouchableOpacity(type, style);
            }
        }
    }
}

const styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'  //这个属性定义溢出元素内容区的内容会如何处理,内容会被修剪，并且其余内容是不可见的。
    },
})

CustomButton.propTypes = {

    text: PropTypes.string.isRequired,
    textStyle: Text.propTypes.style,
    buttonType: PropTypes.oneOf(['normal', 'stroke', 'text']).isRequired,
    selectedColor: PropTypes.string,
    onPress: PropTypes.func,
    buttonColor: PropTypes.string,
    buttonRadius: PropTypes.number,
    borderWidth: PropTypes.number,
};

//属性默认值
CustomButton.defaultProps = {

    borderWidth: 1
};


export default CustomButton