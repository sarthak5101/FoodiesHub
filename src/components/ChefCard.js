import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function ChefCard({ chef }) {
    return (
        <div className="chef-card">
            <img src={chef.img} alt="" />
            <div className="chef-card-info">
                <h3 className="chef-card-name">{chef.name}</h3>
                <p className="chef-recipe-count">Recipes: <b>{chef.recipesCount}</b></p>
                <p className="chef-cuisine">Cuisine: <b>{chef.cuisine}</b></p>
                <p className="chef-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}
