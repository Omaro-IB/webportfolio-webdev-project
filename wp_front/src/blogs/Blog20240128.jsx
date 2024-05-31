import '../App.css';
import NavbarEx from "../components/NavbarEx";
import Image from "/assets/temp.png"
import { PiMediumLogoFill } from "react-icons/pi";
import {FaLinkedin} from 'react-icons/fa';


function Blog20240128() {
  return (
      <div className="bg-beige h-full w-screen flex flex-row">
        <NavbarEx />
          <br></br>
          <div className="origin-center mx-auto flex flex-col mt-[15vh] w-[90vw] sm:w-[50vw]">
              {/* TODO: Update title and date */}
              <h1 className="font-bold text-3xl sm:text-5xl">Lorem ipsum dolor sit amet</h1>
              <h2>Month XX, 20XX &nbsp; &nbsp; • &nbsp; &nbsp; Omar Ibrahim</h2>

              <div className="w-[90%] py-[4vw] sm:py-[2vw] self-center"> {/* buttons div */}
                  <hr></hr>
                  <div className="flex flex-row justify-center max-w-[33] items-center py-1">
                      <p>Read at:</p>
                      {/* TODO: Update link to medium blog */}
                      <a href="/" className="ml-8 h-6 w-24 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer flex flex-row justify-center">
                          <PiMediumLogoFill style = {{width: "25px", height: "25px", alignSelf: "center"}}/>
                          <p className="ml-2 self-center text-[15px]">Medium</p>
                      </a>
                      {/* TODO: Update link to linkedin blog */}
                      <a href="/" className="ml-4 h-6 w-24 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer flex flex-row justify-center">
                          <FaLinkedin style = {{width: "25px", height: "25px", alignSelf: "center"}}/>
                          <p className="ml-2 self-center text-[15px]">LinkedIn</p>
                      </a>
                  </div>
                  <hr></hr>
              </div>

              {/* TODO: Update main image */}
              <img className="w-[90%] h-auto self-center" alt="alternative text..." src={Image} />
              <p className="w-[90%] self-center text-center text-[12px] sm:text-[14px] mt-1 text-greydef">Image subtitle</p>

              {/* NOTE: everything from here has a 28px top margin */}
              {/* TODO: Update paragraphs */}
              <p style={{fontFamily: 'GTPressura', marginTop: '28px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis pretium lacinia. Aliquam lobortis fringilla velit eu varius. Suspendisse vitae varius quam. Quisque feugiat ornare neque eu tempus. Quisque ullamcorper viverra neque id aliquam. Nullam bibendum quis ipsum a maximus. Phasellus sit amet mattis lectus, egestas sodales lectus. Sed tincidunt dignissim faucibus. Nulla consectetur felis turpis, sit amet lacinia nibh suscipit in. Cras elementum pellentesque augue nec sodales. Etiam eget purus eget velit sollicitudin blandit eget et ipsum. Praesent eget eros non ante eleifend feugiat. Aliquam vitae auctor dui.</p>

              <p style={{fontFamily: 'GTPressura', marginTop: '28px'}}> Nam at fermentum est. Maecenas eget egestas velit. Vivamus mi nulla, volutpat nec libero at, sollicitudin sodales erat. Nam pharetra blandit iaculis. Nunc rhoncus velit ut justo efficitur, quis tincidunt justo mollis. Vestibulum consectetur luctus iaculis. Vestibulum mattis eros nec dui vehicula faucibus. Integer tincidunt turpis at odio lobortis, quis rutrum turpis auctor. Praesent quis urna ac mi facilisis sagittis non viverra erat. Etiam molestie in libero ac viverra. Sed eget massa eget orci convallis eleifend. Suspendisse potenti. Integer laoreet non justo eget lacinia. Sed in orci a nulla porta dapibus.</p>

              <p style={{fontFamily: 'GTPressura', marginTop: '28px'}}>  Sed molestie, erat at lobortis dignissim, purus risus pellentesque lacus, iaculis eleifend arcu metus et lectus. Etiam pellentesque nunc eget consectetur pretium. Proin in semper odio. Donec sit amet tortor et lacus fringilla tincidunt. Sed congue justo nec nisi pharetra, eu commodo lectus eleifend. Sed nec sem nec ante laoreet consequat. Donec convallis dictum ornare. Vivamus quis ex nulla. Suspendisse nec arcu non enim convallis malesuada sodales et lectus. Cras tincidunt urna et mauris dictum pellentesque. Phasellus tincidunt eleifend ipsum, vestibulum venenatis mauris ornare vitae. Morbi id leo ut eros egestas sodales suscipit in turpis. Nullam odio est, tincidunt id varius id, condimentum eget ligula. Pellentesque posuere felis eget viverra iaculis. </p>

              <p style={{fontFamily: 'GTPressura', marginTop: '28px'}}>  Here's a code block:  </p>

              {/* TODO: And a code block :) */}
              <div className="bg-codebg text-codewhite font-['Consolas'] mt-[28px] px-4 py-4">
                <p><span className="text-codeorange">except</span> <span className="text-codepurple">Exception</span> <span className="text-codeorange">as</span> e:</p>
                <p>&emsp; &emsp; passed = <span className="text-codeorange">False</span></p>
              </div>

              {/* TODO: And an inline link :) */}
              <p style={{fontFamily: 'GTPressura', marginTop: '28px'}}>  And here's an <a href="https://stackoverflow.com" className="text-buttongreen hover:text-buttongreenhighlight">inline</a> link. </p>

              <br className="mt-24"></br>
          </div>
      </div>
  );
}
export default Blog20240128;