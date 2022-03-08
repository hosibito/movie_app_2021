import PropTypes from "prop-types"; //npn i prop-types 로 설치후 이용
import styles from "./Button.module.css";

function Button({ text }) {
    return <button className={styles.title}>{text}</button>;
    // <button class="Button_title__yV-vc">Continue</button> 
}

Button.propTypes = {  // 프로퍼티로 올 타입이나 형식을 지정해 줄수 있다.(틀리면 오류표기!)
    text: PropTypes.string.isRequired,
};

export default Button;
