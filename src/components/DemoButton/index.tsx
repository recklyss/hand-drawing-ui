type DemoButtonProps = {
  text: string
}
export const DemoButton = ({ text }: DemoButtonProps) => {
  return <div>
    <h1>this is a button</h1>
    <button>{text}</button>
  </div>
}
