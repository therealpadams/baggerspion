import HeroBlock from './hero-block'
import MoreBlock from './more-block'

export default function HeroPost(props) {
    return (
        <section className="space-y-1 lg:flex lg:space-y-0 lg:space-x-1">
            <div className="lg:w-2/3">
                <HeroBlock title={props.hero.title} coverImage={props.hero.coverImage} date={props.hero.date} link={props.hero.slug} />
            </div>
            <div className="hidden lg:block lg:w-1/3 lg:grid lg:grid-cols-1 lg:space-y-1 more">
                <MoreBlock title={props.more[0].title} coverImage={props.more[0].coverImage} date={props.more[0].date} link={props.more[0].slug} /> 
                <MoreBlock title={props.more[1].title} coverImage={props.more[1].coverImage} date={props.more[1].date} link={props.more[1].slug} />
            </div>
        </section>
    )
}