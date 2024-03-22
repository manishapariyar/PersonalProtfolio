

type Props = {
  children : React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1 className="text-3xl font-bold ">
     { children}
    </h1>
  )
}

export default Htext