import { FcHome } from "react-icons/fc";
import { FaDev } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa6";
import { LiaVideoSolid } from "react-icons/lia";
import { TiTags } from "react-icons/ti";
import { GiDeskLamp } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { PiStarFourBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { MdWifiCalling } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";
import { TbThumbUp } from "react-icons/tb";
import { MdPolicy } from "react-icons/md";
import { PiEyesDuotone } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaMastodon } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { IoEllipsisHorizontal } from "react-icons/io5";

export default function App(){

  return (
    <main >
      { /*Menu de la izquierda*/}

    <div  className="grid grid-cols-12 justify-items-center gap-2">
      <div div className="rounded-md border-solid justify-center col-span-2 ml-24 w-64">
        <article className="rounded-md ml-3 border border-red-600">
          <p className="ml-3 text-xl">DEV Community is a </p>
          <p className="ml-3 text-xl">Community of </p>
          <p className="ml-3 text-xl">2,121,472 amazing </p>
          <p className="ml-3 text-xl pb-3">developers </p>
          <p className="ml-3 ">We're a place where coders  </p>
          <p className="ml-3 ">share, stay up-to-update and </p>
          <p className="ml-3 pb-4">grow their careers.  </p>
          <div className="pb-3">
          <button className="ml-3 justify-center rounded-md 
                              border-solid border border-red-600
                              w-56 w-56 hover:bg-sky-600">Create Account</button>
           </div>
           <div className="pb-3">
          <button className="ml-3 justify-center rounded-md 
                              border-solid border border-red-600
                              w-56 hover:bg-sky-600 ">Login</button>
          </div>
        </article>
        <div className="ml-3 pl-3 mt-6 rounded-md
            space-y-2 border border-red-600">
          <ol className="hover:bg-sky-600 flex flex-rows-1"><FcHome style={{fontSize:"20px",marginRight:"1rem"}} />  Home</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><FaCode style={{fontSize:"20px",marginRight:"1rem"}} />DEV ++</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1 "><FaPodcast style={{fontSize:"20px",marginRight:"1rem"}} />Podcast</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><LiaVideoSolid style={{fontSize:"20px",marginRight:"1rem"}} />Videos</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><TiTags style={{fontSize:"20px",marginRight:"1rem"}} />Tags</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><GiDeskLamp style={{fontSize:"20px",marginRight:"1rem"}} />DEV Help</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><GiShoppingBag style={{fontSize:"20px",marginRight:"1rem"}} />Forem Shop</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><FaHeart style={{fontSize:"20px",marginRight:"1rem"}} />Advertise on DEV</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><GiTrophyCup style={{fontSize:"20px",marginRight:"1rem"}} />DEV Challenges</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><PiStarFourBold style={{fontSize:"20px",marginRight:"1rem"}}  />DEV Showcase</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><FaDev style={{fontSize:"20px",marginRight:"1rem"}} />About</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><MdWifiCalling style={{fontSize:"20px",marginRight:"1rem"}} />Contact</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><BiLogoPostgresql style={{fontSize:"20px",marginRight:"1rem"}} />Free Postgres Database</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><FaBookOpenReader style={{fontSize:"20px",marginRight:"1rem"}} />Guides</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1 pb-3"><GiThink style={{fontSize:"20px",marginRight:"1rem"}} />Software comparisons</ol>
        </div>
        <div className="flex flex-rows-1 pt-3 space-x-2">
          <div className="hover:bg-sky-600 ml-3 mt-3"><FaXTwitter style={{fontSize:"20px",marginRight:"1rem"}} /></div>
          <div className="hover:bg-sky-600 ml-3 mt-3"><FaFacebook style={{fontSize:"20px",marginRight:"1rem"}} /></div>
          <div className="hover:bg-sky-600 ml-3 mt-3"><FaGithub style={{fontSize:"20px",marginRight:"1rem"}} /></div>
          <div className="hover:bg-sky-600 ml-3 mt-3"><FaInstagramSquare style={{fontSize:"20px",marginRight:"1rem"}} /></div>
          <div className="hover:bg-sky-600 ml-3 mt-3"><FaTwitch style={{fontSize:"20px",marginRight:"1rem"}} /></div>
          <div className="hover:bg-sky-600 ml-3 mt-3"><FaMastodon style={{fontSize:"20px",marginRight:"1rem"}} /></div>
        </div>



        <p className="text-lg mt-3 ml-4 pb-2 pl-3">Other </p>
        <div className="pt-2 mt-3 ml-3 pl-3 space-y-2
        rounded-md border border-red-600">
          
          <ol className="hover:bg-sky-600 flex flex-rows-1"><TbThumbUp style={{fontSize:"20px",marginRight:"1rem"}} />Code of Conduct</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1"><MdPolicy style={{fontSize:"20px",marginRight:"1rem"}} />Privacy Policy</ol>
          <ol className="hover:bg-sky-600 flex flex-rows-1 pb-3"><PiEyesDuotone style={{fontSize:"20px",marginRight:"1rem"}} />Terms of Use</ol>

        </div>
        <br />
        <p className="text-lg ml-4 pb-2 pl-3">Popular tags </p>
        <div className="scrollbar scrollbar-thumb-sky-700 
          scrollbar-none h-56 border-solid 
          rounded-md border border-red-600
          ml-4 pl-3 overflow-y-scroll space-y-4">
          <ol className="hover:bg-sky-600">#webdev</ol>
          <ol className="hover:bg-sky-600">#javascript</ol>
          <ol className="hover:bg-sky-600">#beginners</ol>
          <ol className="hover:bg-sky-600">#programming</ol>
          <ol className="hover:bg-sky-600">#tutorial</ol>
          <ol className="hover:bg-sky-600">#react</ol>
          <ol className="hover:bg-sky-600">#ai</ol>
          <ol className="hover:bg-sky-600">#python</ol>
          <ol className="hover:bg-sky-600">#devops</ol>
          <ol className="hover:bg-sky-600">#productivity</ol>
          <ol className="hover:bg-sky-600">#opensource</ol>
          <ol className="hover:bg-sky-600">#aws</ol>
          <ol className="hover:bg-sky-600">#node</ol>
          <ol className="hover:bg-sky-600">#career</ol>
          <ol className="hover:bg-sky-600">#css</ol>
          <ol className="hover:bg-sky-600">#learning</ol>
          <ol className="hover:bg-sky-600">#typescript</ol>
          <ol className="hover:bg-sky-600">#java</ol>
          <ol className="hover:bg-sky-600">#news</ol>
          <ol className="hover:bg-sky-600">#database</ol>
          <ol className="hover:bg-sky-600">#discuss</ol>
          <ol className="hover:bg-sky-600">#machinelearning</ol>
          <ol className="hover:bg-sky-600">#dotnet</ol>
          <ol className="hover:bg-sky-600">#csharp</ol>
          <ol className="hover:bg-sky-600">#cloud</ol>
          <ol className="hover:bg-sky-600">#html</ol>
          <ol className="hover:bg-sky-600">#testing</ol>
          <ol className="hover:bg-sky-600">#github</ol>
          <ol className="hover:bg-sky-600">#php</ol>
          <ol className="hover:bg-sky-600">#frontend</ol>
        </div>
        <br />
      <div className="">
      {/* Advertise Neon sponsor */}
      <div className="rounded-md border border-red-600
                        ml-3 space-x-1 pt-2
        ">
          <div className="flex flex-cols-3 pl-3 pt-3">
            <div><IoDiamondOutline style={{fontSize:"20px",marginRight:"1rem"}} /></div>
             <div className="text-sm">DEV Daimonds Sponsors  </div>
             <div><IoEllipsisHorizontal style={{fontSize:"20px",marginRight:"1rem"}} /></div>           
          </div>
          <div className="text-base pt-3 pl-3">
            <p>Thank you to our </p>
            <p>Daimond Sponsor Neon</p>
          </div>
          <div className="pt-4 pb-4">
            <img src="/Neon.jpg" alt="" />
          </div>
          <div className="pl-3 pb-3">
            <p>Neon is the official database </p>
            <p>partner of DEV</p>
          </div>
          
        </div>

      </div>
      
      
        


      </div>
      { /*Deploy de los post */}
       <div className="rounded-md border-solid  col-span-8">
        <div className="grid md:grid-cols-11 pb-4 ">
          <div className="hover:bg-sky-700">Relevant</div>
           <div className="ps-2 hover:bg-sky-700" >Latest</div>
           <div className="ps-1 hover:bg-sky-700">Top</div>
           <div className="col-span-3"></div>
           <div className="ps-5 hover:bg-sky-700" >Week</div>
           <div className="ps-3 hover:bg-sky-700"> Month</div>
           <div className="ps-3 hover:bg-sky-700">Year</div>
           <div className="ps-3 hover:bg-sky-700">Infinity</div>
          </div>
          {/*Inicio de los post */}
      <div className="flex flex-col space-y-3">     
          <div className="rounded-md border-solid border border-red-600 w-11/12">  
            <div className="pt-2 pb-2">Check this out</div>        
            <div className="grid grid-cols-1 justify-items-center">
              <img src="/dev.jpg" alt="" />             
            </div>
            
            <div className="pl-8 flex flex-col space-y-4">
              <div className="text-2xl">New Thing</div>
              <div className="grid grid-cols-1 w-11/12 rounded-md border-solid
               border border-red-600">
                   <p className="text-xl pl-4">Introducing DEV++</p>
                   <p className="pl-4">Ben Halpern for The DEV Team . Aug 29.</p>
                   <p className="pl-4">#meta #news #productivity #career</p>
              </div>
              <div className="pb-4">Happy Coding</div>
            </div>
              
            
          </div>
          <div className="rounded-md border-solid border border-red-600 w-11/12">
            
            <div className="grid grid-cols-1 justify-items-center">
              <img src="/Post1.jpg" alt="" />
            </div>
            <div>
                <div className="pl-8"><p>Jagroop Singh</p>
                  <p>Sep 29</p></div>
                <div className="grid grid-cols-1 w-11/12 
                    pl-8 pt-2 pb-2 text-wrap text-2xl">
                    <p>How To Create Your Own Job Board Web App Using</p>
                    <p>React.js, Node.js, SerApi, and MUI</p>
                </div>
                <div className="pl-8"><p>#webdev  #javascript #react #node</p></div>
                <div className="pl-8">26 reactions 8 comments</div>
            </div>
          </div>

          <div className="rounded-md border-solid border border-red-600 w-11/12">
             <p className="pt-4 pb-4">DEV Community</p>
            <div className="grid grid-cols-1 justify-items-center">
              <img src="/dev1.jpg" alt="" />
            </div>
            <div>
              <div className="grid grid-cols-1 w-11/12 
                    pl-8 pt-2 pb-2 text-wrap ">
                      <p className="text-left text-xl">Need to stay up-to-date with the most relevant trends in</p>
                      <p className="text-left text-xl">in software, such as generate IA, cloud computing,</p> 
                      <p className="text-left text-xl"> and all things frontend?</p>
              </div>
              <div className="pl-8 pb-2">
              DEV is free and it only takes one minute to create your account.
              </div>
              <div className="pl-8 text-2xl">
                <a href="#" className="text-sky-600 underline">
                Join the Community</a></div>
              <div>
                <p className="pl-8 pt-2 pb-2">Happy coding</p>
              </div>
            </div>
          </div>
          <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Dhanush N</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Alien defender Game</a></div>
                <div>
                  <p className="pl-8 pt-2">#devchallenge #gamechallenge #gamedev #webdev</p>
                  <p className="pl-8 pt-2">10 reactions      4 comments        3 min read</p>
                </div>
            </div>
            
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Hikolakita</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">WebAssembly - One Byte Explianer </a></div>
                <div>
                  <p className="pl-8 pt-2">#devchallenge #gamechallenge #gamedev #webdev</p>
                  <p className="pl-8 pt-2">10 reactions      4 comments        3 min read</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Mariam Adedeji</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Deploying a Serveless Function witch AWS Lambda</a></div>
                <div>
                  <p className="pl-8 pt-2">#aws #lambda #serveless #beginners</p>
                  <p className="pl-8 pt-2">5 reactions      Add comments        3 min read</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Pragadeeh Nehru</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Alien XO (Alien Themed TicTacToe)</a></div>
                <div>
                  <p className="pl-8 pt-2">#devchallenge #gamechallenge #gamedev #webdev</p>
                  <p className="pl-8 pt-2">10 reactions      4 comments        3 min read</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Ozondu</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Alieno Mercury-Combat</a></div>
                <div>
                  <p className="pl-8 pt-2">#devchallenge #gamechallenge #gamedev #webdev</p>
                  <p className="pl-8 pt-2">Add comment        2 min read</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Ana Paula Mendes</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href=""><p>Da saúde de aplicacoes a saúde humana:Commo a observabilidade </p>
                <p>aplicada ao monitoreamento de glicemia ajuda pessoas diabéticas</p> 
                 
                </a></div>
                <div>
                  <p className="pl-8 pt-2">#monitoramento #observabilidade #metricas #devops</p>
                  <p className="pl-8 pt-2">Add Comment</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Joao Godinho</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Cloud Computing Basics:AWS practitioner</a></div>
                <div>
                  <p className="pl-8 pt-2">#cloud #cloudcomputing #aws #cloudpractitioner</p>
                  <p className="pl-8 pt-2">Add Comment        2 min read</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Okereke Uneke Enyi</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Definitions Terms </a></div>
                <div>
                  <p className="pl-8 pt-2">#cloud #beginners #computerscience #azure</p>
                  <p className="pl-8 pt-2">Add comment</p>
                </div>
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>marriea</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">IEnumerable  Dependence Injection a strategy Pattern
                 </a></div>
                <div>
                  <p className="pl-8 pt-2">#dotnet #csharp #architecture #designpattern</p>
                  <p className="pl-8 pt-2">1Add comment        3 min read</p>
                </div>
                
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Amanda Guan</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">Uber: How Live Activity on iOS Transforms</a></div>
                <div>
                  
                  <p className="pl-8 pt-2">Add comment 3 min read</p>
                </div>
                
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>Sukhpinder Singh</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">[Part 3] If You Can Answer The Additional.
                          </a></div>
                <div>
                  <p className="pl-8 pt-2">#devchallenge #gamechallenge #gamedev #webdev</p>
                  <p className="pl-8 pt-2">10 reactions      4 comments        3 min read</p>
                </div>
                
            </div>
            <div className="rounded-md border-solid border border-red-600 w-11/12">
            <div>
              <p>AnushLinux</p>
              <p>Sep 29</p>
            </div>
            <div className="pl-8 text-2xl ">
              <a className="text-blue-600 hover:text-blue-800" 
                href="">A Brief intro on the correlation between AI an Maths</a></div>
                <div>
                  <p className="pl-8 pt-2">#devchallenge #gamechallenge #gamedev #webdev</p>
                  <p className="pl-8 pt-2">10 reactions      4 comments        3 min read</p>
                </div>
                
            </div>
          

      </div>{/*Fin de los post*/}
  </div> {/* fin Columna de en medio*/}

{ /*Menu de la derecha */}
        <div div className="justify-center col-span-2 mr-24 w-80">
          <div className="grid grid-cols-1 border border-red-600 mr-3 w-80">
           <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
               <h1 className="font-mono text-2xl">#discuss</h1>
              <p className="text-xs"> Discussion threads targeting the whole community </p>
          </div>
             <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                 How do you managa tasks when you have a lot todos</a>  
                <p>4 comments </p>          
              </div>
             <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                Experimentode Expansao da Consciencia com Intelegencias Atifciais</a>  
                <p>New </p>                      
              </div>
             <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                Inevitabot. A future as inevitable as it is unpredictable</a>  
                <p >New </p>          
              </div>
              <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  The truth about test coverage </a>  
                <p>New</p>          
              </div>
              <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Best Price Monitoring Tools in 2024</a>  
                <p>New</p>          
              </div>
          </div>      
          <br />
          <div>    
              <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                   <h1 className="font-mono text-2xl">#Watercooler</h1>
                   <p className="text-xs"> Light, and off-topic conversation. </p>
              </div>
              <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Bad CSS-Dad jokes (III)</a>  
                <p>4 comments</p>          
              </div>
              <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  The NFL's Best Kicker is One Of Us</a>  
                <p>1 comment</p>          
              </div>
              <div className="mr-3 border border-red-600 pt-4 pl-4 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Habit Staking: 100 Small Life Changess That Take Five Minutes or Less</a>  
                <p>New</p>          
              </div>
          </div>
          <br />
          <div>
            <p>trending guides/resources</p>
            <br />
            <div> 
              <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               14 Case Studies: Master System Design in a Month</a>            
              </p>             
            </div>
            <br />
            <div><p className="hover:bg-sky-700">
            <a href="#" className="text-white-600 hover:bg-sky-700">
               9 open-source gems to become the ultimate developer</a>  
               </p>
            </div>
            <br />
            <div>
                <p className="hover:bg-sky-700">
                   <a href="#" className="text-white-600 hover:bg-sky-700">
                    Global Talent Visa: How to Move to UK without an Employer</a>            
                </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Why React won the Front-End Race</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               If you don't write unit tests... it's a skill issue</a>            
              </p>            
            </div>
            <br />
          <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               10 software Design and Programming Best Practices for Developers </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               50 Must-Know VS Code Extensions for Faster Development</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               10 Developer Tools to improve Your Daily Life as a Developer</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               How to Build frontend Apps 10x Faster</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Understanding the Linux Filesystem:
               An In-Depth Guide for Dev Ops Engineers</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Beginner's Guide to Freelancing</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
                Fronend Dev + Data Strctures
                 & Algoritms: How DSA Can power Your React App</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               7 BEST VS Code Extensions for Faster Development - 2024 Edition</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               DevOps Basics reaches 200 stars: A milestone celebration </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               How to implement a distrinuited Lock using Redis</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
                Twitter System Design Example for tech Interviews</a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Using Cursor + Claude to Make Full-Stack SaaS Apps</a>            
              </p>             
            </div>
            <br />
             <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               11 Open Source Python Projects You should Know in 2024</a>            
              </p>             
            </div>
            <br />
          <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
                Hows ts-pattern can improve your code readability</a>            
              </p>             
            </div>
            <br />
          <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Do You still Use Git in the Terminal
               </a>            
              </p>             
            </div>
          </div>  
          <hr />    
          <br />
{/*other division of the menu */}
          recently quiered
          <br />
          <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               BUtton Animation CSS
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Git Revert File
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Vmin CSS
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
                Simulate Slow Internet Chrome
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               INstall Docker on Raspberry Pi
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Sliblime Text vs Vscode
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
                Foreign Key Mysql
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Comments in CSS
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Javascript Playground
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Tree Shaking in React
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               League of Legends Summoner Lookup
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               GCC for Windows
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Scrollbar CSS
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Git Tag
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Double Pointer C
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
                Eslint Vscode
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Gulp vs Webpack
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Git Revert Pushed Commit
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Table CSS
               </a>            
              </p>             
            </div>
            <br />
            <div>
            <p className="hover:bg-sky-700">
               <a href="#" className="text-white-600 hover:bg-sky-700">
               Spotify Shuffle Sucks
               </a>            
              </p>             
            </div>
            <hr />





















          
        </div>

    </div>
</main>
  )
}