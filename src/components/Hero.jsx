import React from 'react'
import FancyText from '@carefully-coded/react-text-gradient';
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero
