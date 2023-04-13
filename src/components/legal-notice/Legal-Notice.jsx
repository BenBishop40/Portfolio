import './_legal-notice.scss'
import gsap from 'gsap'
import { useEffect } from 'react'

const LegalNotice = () => {
    
    useEffect(() => {
        gsap.fromTo(
            ".legal-notice",
            {opacity:0,
        },
        {
            opacity:1,
            duration: 2,
        }
        )
    }, [])

    return (
        <div className="legal-notice">
           <h1>Informations légales</h1>
            <p>Correspondant aux dispositions  de l'article 6-III et 19 de la Loi n* 2004-575 du 21 juin 2004 relative à la Confiance en l'économie numérique, dite L.C.E.N., nous informons les visiteurs du site internet : <a href="https://www.benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> Ces données ci-jointes :</p>
            <br />
            <p><strong>1. Informations légales :</strong></p>

            <p>Information du propriétaire : <strong>Benjamin Leveque</strong><br />
            Adresse de localisation du titulaire : <strong>rue Lombard 33300 - Bordeaux</strong><br />
            <br />
            Le Fondateur du site internet est : <strong>Benjamin Leveque</strong><br />
            Chef de la publication est : <strong>Benjamin Leveque</strong><br />
            Par quel moyen entrer en contact avec le Décideur de publication : <strong>benjamin.leveque@lapiscine.pro</strong><br />
            <br />
            Le Webmaster est : <strong>Benjamin Leveque</strong><br />
                Ou entrer en contact avec le Webmaster : <strong><a href="mailto:benjamin.leveque@lapiscine.pro?subject=Contact a partir des mentions légales via le site benjamin-leveque.com">benjamin.leveque@lapiscine.pro</a></strong><br />
            <br />

            Entreprise qui assure l'hébergement : <strong>Ionos SARL</strong><br />
            EURL au capital de 100 000 Euros<br />
            Registre du commerce et des sociétés (RCS) Sarreguemines B 431 303 775<br />
            Code APE (INSEE) 6311Z<br />
            Num. de TVA : FR 13 431 303 775<br />
            Siège Sociale de l'hébergeur : 7 place de la Gare - 57200 Sarreguemines - France<br />
            <br />
            <br />
            Ces Mentions Légales ont été réalisées via <strong><a href="https://www.generateur-de-mentions-legales.com" target="_blank" rel="noreferrer">ce site</a></strong><br />

            <br />
            </p>

            <p><strong>2. Présentation et principe :</strong></p>
            
            <p>Tout internaute qui se connecte et utilise le site suivant : <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> est considéré comme utilisateur du site internet.<br />
            Le site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> réuni plusieurs services, dans l'état, disponible pour les utilisateur. Il est ici précisé que ces derniers doivent rester honnête et faire preuve de bonne foi tant envers les différents utilisateurs qu'envers le Webmaster du site benjamin-leveque.com. Le site benjamin-leveque.com est mis à jour de façon régulière par Benjamin Leveque.<br />
            Benjamin Leveque s'efforce de prescrire sur le site internet benjamin-leveque.com des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait affirmer l'exactitude, la complétude et les informations répandu sur son site, qu'elles soient ou non de son fait. En dépendance, l'utilisateur reconnaît utiliser ces informations données (à titre indicatif, non exhaustives et susceptibles d'évoluer) sous son unique responsabilité.</p>
            
            <br />
            <p><strong>3. Accessibilité :</strong><br />
            <br />
            Le site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> est généralement accessible aux utilisateurs 24/24h, 7/7j, sauf en cas de maintenance, programmée ou pas, pour les besoins de la maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au service, benjamin-leveque.com se devouera à faire de son mieux pour rétablir l'accès au site suivant et s'efforcera alors d'informer au préalable aux utilisateurs Dates & heures de l'interruption. N'étant subordonné qu'à une obligation de moyen, benjamin-leveque.com ne saurait être tenu comme responsable des dommages, peu importe la nature, résultant d'une indisponibilité du service</p>
            
            <br />
            <p><strong>4. Droit de propriété intellectuelle :</strong><br />
            <br />
            Benjamin Leveque est le propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d'usage sur l'intégralité des éléments accessibles sur le site web, tant sur la structure que sur les articles et textes, graphismes, icônes, bande sonore, logiciels…<br />
            Toute reproduction totale ou partielle du site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a>, affichage, edition, adaptation totale ou partielle de l'un de ces éléments, peu importe le  moyen ou le procédé utilisé, est interdite, sauf acceptation écrite préalable de Benjamin Leveque, propriétaire du site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a>. Dans le cas contraire elle sera considérée de la même manière qu'une contrefaçon et passible de poursuite d'après les dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
            
            <p><br />
            <strong>5. Liens hypertextes & cookies :</strong><br />
            <br />
            Le site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> possède de multiple URL cliquable vers d'autres sites web (partenariats, sites sources .) mis en place avec l'accord de Benjamin Leveque<a href="https://www.generateur-de-mentions-legales.com/"><font color="#000000">.</font></a> Cependant, Benjamin Leveque n'a pas la possibilité de vérifier l'ensemble du contenu des différents sites  consultés et décline donc toute responsabilité de ce fait concernant les risques de contenus illicites.<br />
            L'usager est donc avisé que durant de ses visites sur le site suivant <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a>, un ou différents cookies sont susceptibles de s'intégrer mécaniquement sur son pc via son logiciel informatique de navigation. Un cookie c'est un assemblage de donnée qui ne permettra pas de savoir qui l'utilise, mais qui sauvegarde des renseignements en lien avec la navigation de l'utilisateur sur le site interne. <br />
            La configration du logiciel de navigation laisse libre de renseigner de la présence de cookie et potentiellement, de pouvoir  refuser de la manière décrite à l' adresse suivante : <a href="mailto:benjamin.leveque@lapiscine.pro?subject=Contact a partir des mentions légales via le site benjamin-leveque.com">benjamin.leveque@lapiscine.pro</a>. L'utilisateur à la possibilité toutefois de configurer le navigateur de son pc pour contester la mise en place des cookies, en sachant que le rebut d'installation d'un cookie peut potentiellement entraîner l'incapacité d'accéder à certains services. Concernant tout barrage des cookies, cherchez dans un outil de recherche : blocage des cookies et suivez les explications en rapport avec votre  navigateur.</p>
            
            <p><strong>6. Protection des biens et personnes - Utilisation des données personnelles :</strong><br />
            <br />
            En France, les données personnelles sont par exemple protégées par la loi n° 78-87 du 6 janvier 1978 et la loi n° 2004-801 datant du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne datant du 24 octobre 1995.</p>
            
            <p>Sur le site web <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a>, Benjamin Leveque ne collecte pas d'informations personnelles ( suivant l'article 4 loi n°78-17 du 06 janvier 1978) concernant l'utilisateur que pour le besoin de certains services proposés par le site interne <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a>. L'usager offre ces données en toute conscience de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors expliqué à l'utilisateur du site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> le devoir ou non de rentrer ces informations.<br />
            Conformément aux dispositifs des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 en lien avec l'informatique, aux fichiers et aux différentes libertés, n'importe quel utilisateur dispose d'un droit d'accès aux informations, de rectification, de suppression et d'opposition à toutes les informations personnelles qui le concerne. Pour l'utiliser, adressez votre demande à <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> par mail : <strong><a href="mailto:benjamin.leveque@lapiscine.pro?subject=Contact à partir des mentions légales via le site benjamin-leveque.com">benjamin.leveque@lapiscine.pro</a></strong> ou par lettre manuscrite dûement signée, jointe d'une copie du titre d'identité avec signature du titulaire du document, en mentionnant l'adresse à laquelle la réponse doit être retournée.</p>
            
            <p>Sans information personnelle de l'utilisateur du site <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> ne sera publiée à l'insu de l'utilisateur, troquée, transférée, cédée sur un support quelconque à des groupes. Seule l'hypothèse du rachat du site suivant <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> et de l'intégralité de ses droits autorise Benjamin Leveque à céder les  informations  à l' acquéreur qui serait alors lui-même tenu à la même obligation de conservation et de modification des informations concernant l'utilisateur du site suivant <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a>.<br />
            Le site web <a href="https://benjamin-leveque.com" target="_blank" rel="noreferrer">benjamin-leveque.com</a> est en conformité avec le RGPD.</p>
            
            <p>Les bases de données sont protégées par les obligations de la loi du 1er juillet 1998 transposant ainsi la directive 96/9 du 11 mars 1996 relative à la protection juridique des BDD (bases de données).</p>
        </div>
    )
}
export default LegalNotice
