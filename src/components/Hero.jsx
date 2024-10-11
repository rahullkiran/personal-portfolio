import FancyText from '@carefully-coded/react-text-gradient';
import { HERO_CONTENT } from '../constants';
import pfp from "../assets/rahulPfp.png"; 
const hero = () => {
  return (
    <div className ="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-sky-500 pb-16 text-7xl font-thick tracking-tighte lg:mt-16 lg:text-8xl" >
                        <FancyText
                            gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
                            animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
                            animateDuration={2500}> 
                            Rahul Kiran
                        </FancyText>
                    </h1>
                    <span className="bg-clip-text text-4xl font-thin tracking-tight ">
                        Computer Engineering @ York University
                    </span>
                    <p className="my-2 max-w-xl py-6 text-2xl font-thin tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={pfp} width = {650} alt="Rahul Kiran" />
                </div>
            </div>
        </div>
    </div>
  )
}
//this is  atest 
export default hero
