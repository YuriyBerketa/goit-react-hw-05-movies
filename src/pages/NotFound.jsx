import { NotFoundBlock, NotFoundText, NotFoundLink } from '../pages/Page.styled';

const NotFound = () => {
    return (
        <NotFoundBlock>
            <NotFoundText>Вибачте, такої сторінки не існує</NotFoundText>
            <NotFoundLink to='/'>Повернутися на готовну сторінку</NotFoundLink>
        </NotFoundBlock>
    )
}

export default NotFound;