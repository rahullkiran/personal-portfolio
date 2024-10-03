import FancyText from '@carefully-coded/react-text-gradient';


              
export default function ColorAnimated() {
    return (
      <FancyText
        gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
        animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
        animateDuration={2000}>
        <div className ="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-sky-500 pb-16 text-6xl font-thin tracking-tighte lg:mt-16 lg:text-8xl" > 
                        Rahul Kiran
                    </h1>
                </div>
            </div>
        </div>
    </div>
      </FancyText>
    )
  }
