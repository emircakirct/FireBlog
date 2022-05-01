import { BsInstagram, BsGithub } from 'react-icons/bs';


export default function Footer() {
    return(
        <footer style={{backgroundColor:"orangered",width:"100%",height:"10%", left:"0", bottom:"0",position:"relative",marginTop:"20px"}}>
            <p style={{color:"white"}}>Emir Web Design, Copyright &copy; 2022</p>
            <div style={{textAlign:"center"}}>
            <a href="https://instagram.com/ecakir.x">
           <BsInstagram  size={30}/>
           </a>
           <a href="https://github.com/emirhancakirct">
           <BsGithub  size={30}/>
           </a>
            </div>
        </footer>
    )
}
