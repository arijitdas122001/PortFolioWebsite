
import "./menu.css"
const menu = (props) => {
    const {state}=props;
  return (
    <div className={'container '+(state && 'active')}>
     <ul>
        <li><a href='#intro'>Intro</a></li>
        <li><a href='#work'>Profiles</a></li>
        <li><a href='#samples'>Samples</a></li>
        <li><a href='#contact'>Contact</a></li>
     </ul>
    </div>
  )
}

export default menu
