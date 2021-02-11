import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Work from './work';
//import studyCases from './study-cases';

const Works = () => {   

    let studyCases = [
        {
            slug: "platon-study-case",
            title: "Platon",
            subtitle: "Le challenge",
            description: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
    
        },
        {
            slug: "solane-study-case",
            title: "Solane",
            subtitle: "Solane est le premier vendeur de fraises du Poitou-Charentes",
            description: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
    
        },
        {
            slug: "sedal-study-case",
            title: "Sedal",
            subtitle: "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
            description: "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, 'les derniers seront les premiers'."
    
        },
    ];

    return (

        
            <div>
                <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
                <p><strong>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</strong></p>
            
                
                <main>
                    
                    {
                        studyCases.map((item) =>
                        <div>
                            <Link to={`/works/${item.slug}`}>
                                <div className="row">
                                    <div className="col">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <Work studyCases={studyCases} />
                                
                            </Link>
                        </div>
                        )
                    }
                            
                 <Switch>
                    <Route path="/works/:slug">
                        <Work studyCases={studyCases} />
                    </Route>
                </Switch>  


                    
                </main>    
            
            </div>
        
    )

}

export default Works;