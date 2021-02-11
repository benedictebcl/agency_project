import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Work = ( { studyCases }) => {

    const { slug } = useParams();
    const [currentStudy, setCurrentStudy] = useState()

    useEffect(() => {
        const foundStudy = studyCases.find((work) => work.slug === slug);
        setCurrentStudy(foundStudy);
      }, [slug])
    

    return(
        <> 
        { currentStudy && 
            <div>
                <h2>{currentStudy.title}</h2>
                <h4>{currentStudy.subtitle}</h4>
                <p>{currentStudy.description}</p>


            </div>
        }
        </>
    )
    
};
    
export default Work;