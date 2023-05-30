const { Link } = require("react-router-dom")

const NotFound = () => {
    return (
        <div>
            <h3>Вибачте, такої сторінки не існує</h3>
            <Link to='/'>Повернутися на готовну сторінку</Link>
        </div>
    )
}

export default NotFound;