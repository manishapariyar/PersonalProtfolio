import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'
type Props = {
  children:React.ReactNode;
  setSelectedPage:(value: SelectedPage)=>void;
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink className='rounded-md 
    bg-blue text-black
    px-10 py-2 hover:bg-yellow
     hover:text-deep-blue'
    onClick={()=> setSelectedPage(SelectedPage.Contact)}
    href={`#${SelectedPage.Contact}`}>
    {children}
  
    </AnchorLink>
  )
}
export default ActionButton;