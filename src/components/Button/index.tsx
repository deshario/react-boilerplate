interface IButton {
  text: string
}

const Button = ({ text }: IButton) => <button>{text}</button>

export default Button
