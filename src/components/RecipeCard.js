import CumstomImages from "./CustomImages"

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CumstomImages imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">orem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}