import { useLanguage } from "../../contexts/Language";
import {Link} from 'react-router-dom'
const Footer = () => {
  const { language } = useLanguage();
  return (
   

    <footer style={{ fontSize: "12px"}}>
      {language === "en"
        ? <div>          
         Read more about  <Link to="https://github.com/nourhan-ashraf/Hangman-Game" target="_blank" rel="noopener">this project</Link>       
          </div>
        : <div>  
      اعرف المزيد عن   <Link to="https://github.com/nourhan-ashraf/Hangman-Game" target="_blank" rel="noopener">هذا المشروع</Link>
           </div>}
    </footer>
  );
};

export default Footer;
