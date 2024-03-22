

type Props = {
  children : React.ReactNode;
}

const Button = ({children}: Props) => {
  return (
    <button className="basis-3/5 font-montserrat text-[16px] font-bold border-bodyColor my-6 mx-2 py-1 px-6 border  rounded-[20px] bg-designColor text-stale-300">
      {children}
    </button>
  )
}

export default Button